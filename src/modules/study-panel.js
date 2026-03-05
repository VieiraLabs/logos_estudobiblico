/**
 * study-panel.js
 * Módulo do Painel de Estudo — Exibe glossário, notas contextuais
 * e gerencia visibilidade do painel lateral direito.
 */

import { glossaryTerms } from '../data/bible-books.js';

/**
 * Inicializa o módulo do painel de estudo.
 * Preenche glossário e configura listeners para notas contextuais.
 */
export function initStudyPanel() {
    const studyPanel = document.getElementById('study-panel');
    const btnTogglePanel = document.getElementById('btn-toggle-panel');
    const btnClosePanel = document.getElementById('btn-close-panel');
    const glossaryContent = document.getElementById('glossary-content');
    const studyNotesContent = document.getElementById('study-notes-content');

    // ---- Renderizar glossário ----
    renderGlossary();

    // ---- Toggle do painel lateral ----
    if (btnTogglePanel) {
        btnTogglePanel.addEventListener('click', () => {
            // Em telas grandes, o painel mostra/esconde alterando a grid
            const isHidden = studyPanel.classList.contains('hidden');
            if (isHidden) {
                studyPanel.classList.remove('hidden');
                studyPanel.classList.add('visible');
                // Ajustar grid para 3 colunas
                document.getElementById('app').style.gridTemplateColumns =
                    `var(--sidebar-width) 1fr var(--panel-width)`;
            } else {
                studyPanel.classList.add('hidden');
                studyPanel.classList.remove('visible');
                // Ajustar grid para 2 colunas
                document.getElementById('app').style.gridTemplateColumns =
                    `var(--sidebar-width) 1fr`;
            }
        });
    }

    // ---- Fechar painel ----
    if (btnClosePanel) {
        btnClosePanel.addEventListener('click', () => {
            studyPanel.classList.add('hidden');
            studyPanel.classList.remove('visible');
            if (window.innerWidth > 1080) {
                document.getElementById('app').style.gridTemplateColumns =
                    `var(--sidebar-width) 1fr`;
            }
        });
    }

    // ---- Escutar respostas do assistente para gerar notas contextuais ----
    window.addEventListener('assistant-response', (e) => {
        const { question, answer } = e.detail;
        addStudyNote(question, answer);
    });

    /**
     * Renderiza os termos do glossário no painel.
     */
    function renderGlossary() {
        if (!glossaryContent) return;

        let html = '';
        glossaryTerms.forEach(item => {
            html += `
        <div class="glossary-item">
          <div class="glossary-term">${item.term}</div>
          <div class="glossary-def">${item.definition}</div>
        </div>
      `;
        });

        glossaryContent.innerHTML = html;
    }

    /**
     * Adiciona uma nota de estudo baseada na pergunta e resposta do chat.
     * @param {string} question - Pergunta do usuário
     * @param {string} answer - Resposta do assistente
     */
    function addStudyNote(question, answer) {
        if (!studyNotesContent) return;

        // Remover estado vazio se existir
        const emptyState = studyNotesContent.querySelector('.empty-state');
        if (emptyState) emptyState.remove();

        // Extrair um resumo curto da resposta (primeiros 100 caracteres significativos)
        const cleanAnswer = answer.replace(/[#*_`>|]/g, '').trim();
        const summary = cleanAnswer.substring(0, 120) + (cleanAnswer.length > 120 ? '...' : '');

        // Criar nota
        const noteEl = document.createElement('div');
        noteEl.className = 'glossary-item';
        noteEl.innerHTML = `
      <div class="glossary-term">${truncate(question, 50)}</div>
      <div class="glossary-def">${summary}</div>
    `;

        // Inserir no topo
        studyNotesContent.insertBefore(noteEl, studyNotesContent.firstChild);

        // Limitar a 10 notas
        const notes = studyNotesContent.querySelectorAll('.glossary-item');
        if (notes.length > 10) {
            notes[notes.length - 1].remove();
        }
    }

    /**
     * Trunca texto longo e adiciona reticências.
     * @param {string} text - Texto original
     * @param {number} maxLength - Comprimento máximo
     * @returns {string} Texto truncado
     */
    function truncate(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
}
