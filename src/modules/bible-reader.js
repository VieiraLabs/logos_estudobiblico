/**
 * bible-reader.js
 * Módulo de Leitura Bíblica — Exibe o texto completo de capítulos
 * com navegação entre capítulos e opção de estudar via chat.
 */

import { fetchChapter } from '../services/bible-api.js';

// Estado atual da leitura
let currentBook = null;
let currentChapter = 1;
let totalChapters = 1;

/**
 * Inicializa o módulo de leitura bíblica.
 * Configura os listeners de navegação entre capítulos.
 */
export function initBibleReader() {
    // Escutar evento personalizado para abrir um livro
    window.addEventListener('open-bible-reader', (e) => {
        const { bookName, chapters } = e.detail;
        currentBook = bookName;
        currentChapter = 1;
        totalChapters = chapters;
        showReaderView(bookName, 1, chapters);
    });
}

/**
 * Exibe a interface do leitor bíblico na área principal.
 * @param {string} bookName - Nome do livro
 * @param {number} chapter - Capítulo a exibir
 * @param {number} chapters - Total de capítulos do livro
 */
async function showReaderView(bookName, chapter, chapters) {
    const chatMessages = document.getElementById('chat-messages');
    const welcomeScreen = document.getElementById('welcome-screen');
    const chatTitle = document.getElementById('chat-title');
    const chatStatus = document.getElementById('chat-status');

    // Esconder tela de boas-vindas
    if (welcomeScreen) welcomeScreen.style.display = 'none';

    // Atualizar header
    if (chatTitle) chatTitle.textContent = `📖 ${bookName}`;
    if (chatStatus) {
        chatStatus.innerHTML = `<span class="status-dot"></span> Capítulo ${chapter} de ${chapters}`;
    }

    // Limpar conteúdo
    chatMessages.innerHTML = '';

    // Criar container do leitor
    const readerEl = document.createElement('div');
    readerEl.className = 'bible-reader';
    readerEl.id = 'bible-reader';

    // Barra de navegação superior
    readerEl.innerHTML = `
    <div class="reader-nav-top">
      <button class="reader-nav-btn" id="reader-prev" ${chapter <= 1 ? 'disabled' : ''}>
        <i data-lucide="chevron-left"></i>
        <span>Anterior</span>
      </button>
      <div class="reader-chapter-select">
        <select id="reader-chapter-dropdown" class="reader-dropdown" aria-label="Selecionar capítulo">
          ${generateChapterOptions(chapters, chapter)}
        </select>
      </div>
      <button class="reader-nav-btn" id="reader-next" ${chapter >= chapters ? 'disabled' : ''}>
        <span>Próximo</span>
        <i data-lucide="chevron-right"></i>
      </button>
    </div>

    <div class="reader-content" id="reader-content">
      <div class="reader-loading">
        <div class="typing-indicator">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
        <p>Carregando ${bookName} ${chapter}...</p>
      </div>
    </div>

    <div class="reader-nav-bottom" id="reader-nav-bottom" style="display:none;">
      <button class="reader-nav-btn" id="reader-prev-bottom" ${chapter <= 1 ? 'disabled' : ''}>
        <i data-lucide="chevron-left"></i>
        <span>Capítulo ${chapter - 1}</span>
      </button>
      <button class="reader-study-btn" id="reader-ask-ai">
        <i data-lucide="message-circle"></i>
        <span>Estudar este capítulo com a IA</span>
      </button>
      <button class="reader-nav-btn" id="reader-next-bottom" ${chapter >= chapters ? 'disabled' : ''}>
        <span>Capítulo ${chapter + 1}</span>
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `;

    chatMessages.appendChild(readerEl);

    // Inicializar ícones Lucide
    if (window.lucide) window.lucide.createIcons();

    // Configurar eventos de navegação
    setupReaderEvents(readerEl, bookName, chapters);

    // Carregar o texto do capítulo
    await loadChapterText(bookName, chapter, chapters);
}

/**
 * Gera as opções do dropdown de seleção de capítulo.
 * @param {number} total - Total de capítulos
 * @param {number} selected - Capítulo selecionado
 * @returns {string} HTML das opções
 */
function generateChapterOptions(total, selected) {
    let html = '';
    for (let i = 1; i <= total; i++) {
        html += `<option value="${i}" ${i === selected ? 'selected' : ''}>Capítulo ${i}</option>`;
    }
    return html;
}

/**
 * Configura eventos dos botões de navegação do leitor.
 * @param {HTMLElement} readerEl - Elemento do leitor
 * @param {string} bookName - Nome do livro
 * @param {number} chapters - Total de capítulos
 */
function setupReaderEvents(readerEl, bookName, chapters) {
    // Botão anterior (topo)
    const prevBtn = readerEl.querySelector('#reader-prev');
    const nextBtn = readerEl.querySelector('#reader-next');
    const dropdown = readerEl.querySelector('#reader-chapter-dropdown');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateChapter(-1, bookName, chapters));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateChapter(1, bookName, chapters));
    }

    // Dropdown de capítulos
    if (dropdown) {
        dropdown.addEventListener('change', (e) => {
            currentChapter = parseInt(e.target.value);
            showReaderView(bookName, currentChapter, chapters);
        });
    }

    // Botões do rodapé
    const prevBottom = readerEl.querySelector('#reader-prev-bottom');
    const nextBottom = readerEl.querySelector('#reader-next-bottom');
    const askAI = readerEl.querySelector('#reader-ask-ai');

    if (prevBottom) {
        prevBottom.addEventListener('click', () => navigateChapter(-1, bookName, chapters));
    }
    if (nextBottom) {
        nextBottom.addEventListener('click', () => navigateChapter(1, bookName, chapters));
    }

    // Botão "Estudar com IA"
    if (askAI) {
        askAI.addEventListener('click', () => {
            // Voltar para o modo chat e enviar pergunta
            const chatInput = document.getElementById('chat-input');
            const btnSend = document.getElementById('btn-send');
            const chatTitle = document.getElementById('chat-title');
            const chatStatus = document.getElementById('chat-status');

            if (chatTitle) chatTitle.textContent = 'Assistente Bíblico';
            if (chatStatus) {
                chatStatus.innerHTML = '<span class="status-dot"></span> Online — Pronto para ajudar';
            }

            // Limpar o leitor
            const chatMessages = document.getElementById('chat-messages');
            chatMessages.innerHTML = '';

            // Enviar pergunta para o chat
            if (chatInput) {
                chatInput.value = `Explique ${bookName} capítulo ${currentChapter} com contexto histórico, significado e aplicação prática.`;
                btnSend.disabled = false;
                btnSend.click();
            }
        });
    }
}

/**
 * Navega para o próximo ou anterior capítulo.
 * @param {number} direction - 1 para próximo, -1 para anterior
 * @param {string} bookName - Nome do livro
 * @param {number} chapters - Total de capítulos
 */
function navigateChapter(direction, bookName, chapters) {
    const newChapter = currentChapter + direction;
    if (newChapter < 1 || newChapter > chapters) return;
    currentChapter = newChapter;
    showReaderView(bookName, currentChapter, chapters);
}

/**
 * Carrega o texto do capítulo via API e renderiza.
 * @param {string} bookName - Nome do livro
 * @param {number} chapter - Número do capítulo
 * @param {number} chapters - Total de capítulos
 */
async function loadChapterText(bookName, chapter, chapters) {
    const contentEl = document.getElementById('reader-content');
    const navBottom = document.getElementById('reader-nav-bottom');

    try {
        const data = await fetchChapter(bookName, chapter);

        // Renderizar versículos
        let html = `
      <div class="reader-header">
        <h2>${bookName} ${chapter}</h2>
        <span class="reader-source">${data.source}</span>
      </div>
      <div class="reader-verses">
    `;

        data.verses.forEach(verse => {
            html += `
        <div class="reader-verse" data-verse="${verse.number}">
          <span class="verse-number">${verse.number}</span>
          <span class="verse-text">${verse.text}</span>
        </div>
      `;
        });

        html += '</div>';
        contentEl.innerHTML = html;

        // Mostrar navegação inferior
        if (navBottom) navBottom.style.display = 'flex';

        // Adicionar evento de clique nos versículos (para estudar um específico)
        const verseEls = contentEl.querySelectorAll('.reader-verse');
        verseEls.forEach(verseEl => {
            verseEl.addEventListener('click', () => {
                // Toggle seleção visual
                verseEl.classList.toggle('selected');
            });
        });

    } catch (error) {
        console.error('❌ Erro ao carregar capítulo:', error);
        contentEl.innerHTML = `
      <div class="reader-error">
        <i data-lucide="alert-circle"></i>
        <h3>Não foi possível carregar o texto</h3>
        <p>${error.message}</p>
        <button class="reader-retry-btn" onclick="location.reload()">
          <i data-lucide="refresh-cw"></i>
          Tentar novamente
        </button>
      </div>
    `;
        if (window.lucide) window.lucide.createIcons();
    }
}
