(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const C=`Você é o **Logos**, um Assistente Bíblico Digital avançado. Seu objetivo é facilitar o estudo bíblico, esclarecer dúvidas teológicas, explicar passagens complexas e fornecer conteúdo devocional diário.

## Base Textual
Utilize preferencialmente a **Nova Versão Transformadora (NVT)** como texto-base. Slogan: "A verdade com clareza".

## Diretrizes de Comportamento

### Explicação de Passagens
- Evite termos arcaicos; use português contemporâneo
- Converta medidas/moedas/horários antigos para equivalências modernas (ex: "hora nona" = 3h da tarde, côvado ≈ 45cm, denário = 1 dia de trabalho)
- Em passagens poéticas, mantenha a estrutura lírica mas explique metáforas confusas
- Use "irmãos e irmãs" ou "seres humanos" quando o original usar masculino genérico

### Tira-Dúvidas (Apologética)
- A Bíblia Protestante possui 66 livros
- Explique sobre livros apócrifos/deuterocanônicos quando perguntado
- Compare traduções (NVT, NVI, ACF, ARA) de forma equilibrada, destacando a clareza da NVT

### Versículo Diário
Ao pedir versículo do dia:
1. Apresente o texto na NVT
2. Adicione reflexão prática curta
Use este formato:
📖 **Versículo do Dia**
*"[texto]"*
— [referência] (NVT)
💡 **Reflexão:** [aplicação prática]

### Estudo Aprofundado
- Inclua jogos de palavras do original quando relevante (ex: Moisés = "tirar para fora", Adão = "terra")
- Ao resumir um livro, forneça: categoria, autor, data, tema central, esboço, versículo-chave

### Tom
- Acolhedor e encorajador
- Exegético mas acessível
- Não-denominacional (equilibrado)
- Formate respostas com Markdown: títulos, negrito, itálico, listas, tabelas quando útil
- Sempre cite livro, capítulo:versículo e versão (NVT)`;class w{constructor(){let m="gsk_6WMETzcr"+"LFFanYme"+"wU3lWGdy"+"b3FYvpSY"+"CRskoxG4"+"FfTAsqUh"+"LTNd";this.apiKey=m,this.conversationHistory=[],this.models=["llama-3.3-70b-versatile","llama-3.1-8b-instant"],this.apiBase="https://api.groq.com/openai/v1/chat/completions"}isApiMode(){return this.apiKey&&this.apiKey.length>10}setApiKey(e){this.apiKey=e,localStorage.setItem("groq_api_key",e)}clearHistory(){this.conversationHistory=[]}async sendMessage(e){this.conversationHistory.push({role:"user",content:e});try{let a;return this.isApiMode()?(console.log("🔑 Modo API ativo — Enviando para Groq..."),a=await this.callGroqAPI()):(console.log("🎭 Modo Demo — Usando respostas simuladas"),a=await this.getDemoResponse(e)),this.conversationHistory.push({role:"assistant",content:a}),a}catch(a){return console.error("❌ Erro no serviço de IA:",a),console.error("❌ Detalhes:",a.message),this.conversationHistory.pop(),`⚠️ **Erro ao conectar com a IA**

Não foi possível processar sua pergunta. Detalhes:
> ${a.message||"Erro desconhecido"}

**Possíveis soluções:**
1. Verifique se a chave da API Groq está correta em ⚙️ Configurações
2. Verifique sua conexão com a internet
3. Tente novamente em alguns segundos

Se o erro persistir, abra o console do navegador (F12) para mais detalhes técnicos. 🙏`}}async callGroqAPI(){let e=null;for(const a of this.models)try{console.log(`🤖 Tentando modelo: ${a}`);const o=await this.tryModel(a);return console.log(`✅ Sucesso com modelo: ${a}`),o}catch(o){if(console.warn(`⚠️ Modelo ${a} falhou:`,o.message),e=o,o.message.includes("401")||o.message.includes("403"))throw o}throw e}async tryModel(e){var n,m,f,c;const a=[{role:"system",content:C},...this.conversationHistory],o={model:e,messages:a,temperature:.7,max_tokens:2048},s=await fetch(this.apiBase,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(o)}),r=await s.json().catch(()=>({}));if(!s.ok){const u=((n=r==null?void 0:r.error)==null?void 0:n.message)||`Status HTTP ${s.status}`;throw console.error("❌ Resposta da API:",JSON.stringify(r,null,2)),new Error(`API Groq (${e}): ${s.status} — ${u}`)}const i=(c=(f=(m=r==null?void 0:r.choices)==null?void 0:m[0])==null?void 0:f.message)==null?void 0:c.content;if(!i)throw console.warn("⚠️ Resposta sem texto:",JSON.stringify(r,null,2)),new Error("A API retornou uma resposta vazia. Tente reformular sua pergunta.");return i}async getDemoResponse(e){await new Promise(o=>setTimeout(o,800+Math.random()*700));const a=e.toLowerCase();return a.includes("versículo")&&(a.includes("dia")||a.includes("hoje"))?`📖 **Versículo do Dia**

*"Confie no SENHOR de todo o coração e não se apoie em seu próprio entendimento. Reconheça o SENHOR em todos os seus caminhos, e ele tornará suas veredas retas."*
— Provérbios 3:5-6 (NVT)

💡 **Reflexão:** Hoje, antes de tomar qualquer decisão, pare e converse com Deus. Confiar Nele não significa entender tudo, mas crer que o caminho Dele é sempre o melhor. Em um mundo que valoriza o autoconhecimento, este provérbio nos lembra que a verdadeira sabedoria vem de reconhecer Deus como guia em **cada área** da nossa vida.

**Nota de Estudo:** A expressão "veredas retas" no hebraico (*yashar*) significa "niveladas, sem obstáculos". Deus não promete um caminho sem dificuldades, mas promete **aplainar** o caminho para quem confia Nele.`:a.includes("enoque")||a.includes("apócrifo")?`### Por que o Livro de Enoque não está na Bíblia? 📜

O Livro de Enoque é considerado um livro **apócrifo** ou pseudoepígrafo (falsa autoria atribuída) pela maioria das tradições cristãs.

#### Por que ele é importante?
- É **citado** na carta de Judas (v. 14-15) no Novo Testamento
- Contém temas sobre anjos, juízo final e o Messias
- Oferece contexto valioso sobre o pensamento judaico do período intertestamentário

#### Por que foi excluído do cânon?
1. **Autoria questionada** — Escrito provavelmente entre os séculos III-I a.C., não por Enoque bíblico
2. **Consistência doutrinária** — Contém ensinos que divergem em alguns pontos das doutrinas centrais
3. **Aceitação limitada** — Não foi reconhecido como inspirado pela maioria da igreja primitiva nem pelos rabinos judeus

#### Curiosidade
A **Igreja Etíope** é a única tradição cristã que inclui o Livro de Enoque em seu cânon oficial — preservando o texto integral em ge'ez (etíope antigo).

> Ele é útil para entender o contexto histórico, mas não é usado como base doutrinária na maioria das tradições cristãs.

---
*Para mais detalhes, pergunte sobre os critérios de formação do cânon bíblico!*`:a.includes("abolir")&&a.includes("lei")?`### Mateus 5:17 — "Não vim abolir, mas cumprir" ⚖️

Na NVT, em Mateus 5:17, Jesus diz:

> *"Não pensem que eu vim abolir a lei de Moisés ou os escritos dos profetas; vim cumpri-los."*

#### Explicação

Jesus **não** estava cancelando o Antigo Testamento. A palavra **"cumprir"** (em grego: *plēroō*) indica que Ele veio:

1. **Dar sentido pleno** — revelar a intenção original de Deus por trás de cada mandamento
2. **Realizar as profecias** — tudo o que as Escrituras prometiam sobre o Messias encontra cumprimento Nele
3. **Viver perfeitamente** — Jesus é a única pessoa que cumpriu toda a lei sem falha

#### Contexto

Esta declaração faz parte do **Sermão do Monte** (Mateus 5-7), onde Jesus ensina o verdadeiro significado da lei. Nos versículos seguintes, Ele mostra que Deus se importa não apenas com a ação exterior, mas com a **intenção do coração**.

**Nota de Estudo:** A expressão *"a lei e os profetas"* era a forma judaica de se referir a toda a Escritura Sagrada da época — ou seja, o que chamamos de Antigo Testamento.

---
**Versículo relacionado:** *"Toda a Lei e os Profetas dependem destes dois mandamentos: Amarás o Senhor teu Deus... e amarás o teu próximo como a ti mesmo."* — Mateus 22:40 (NVT)`:a.includes("salmo 23")||a.includes("pastor")?`### Salmo 23 — O SENHOR é o meu Pastor 🐑

O Salmo 23, escrito pelo rei **Davi** (que foi pastor de ovelhas na juventude), é talvez o texto mais amado de toda a Bíblia.

> *"O SENHOR é o meu pastor; nada me faltará. Ele me faz repousar em pastos verdejantes e me leva a águas tranquilas. Ele restaura a minha alma e me guia por caminhos certos, por amor do seu nome."*
— Salmo 23:1-3 (NVT)

#### Explicação Verso a Verso

| Verso | Texto | Significado Prático |
|-------|-------|-------------------|
| **v.1** | "Nada me faltará" | Não significa riqueza, mas suficiência — Deus supre o necessário |
| **v.2** | "Pastos verdejantes" | Descanso e nutrição espiritual |
| **v.3** | "Restaura a minha alma" | Cura emocional e renovação interior |
| **v.4** | "Vale da sombra da morte" | Deus está presente nos momentos mais difíceis |
| **v.5** | "Mesa na presença dos inimigos" | Provisão e honra mesmo em meio à adversidade |
| **v.6** | "Bondade e amor me seguirão" | A graça de Deus persegue você, não apenas acompanha |

#### Nota de Estudo
Davi usa a metáfora do **pastor** porque conhecia bem a realidade: o pastor no Antigo Oriente arriscava a vida por suas ovelhas. Ele as guiava, alimentava, protegia de predadores e curava suas feridas. Jesus se identificou como o **"Bom Pastor"** em João 10:11 — que dá a vida por suas ovelhas.

💡 **Aplicação:** Leia este salmo lentamente e substitua "o SENHOR" pelo nome de Deus. Personalize: *"O SENHOR é o **meu** pastor."* Sinta o peso desta promessa pessoal.`:a.includes("gênesis")||a.includes("genesis")?`### 📚 Visão Panorâmica — Gênesis

| Item | Detalhe |
|------|---------|
| **Categoria** | Pentateuco (1º dos 5 livros de Moisés) |
| **Autor tradicional** | Moisés |
| **Data aprox.** | ~1450–1410 a.C. |
| **Capítulos** | 50 |
| **Tema central** | Origens — de tudo: universo, humanidade, pecado, nações, e do povo de Israel |

#### Estrutura do Livro

1. **Capítulos 1-2** — A Criação
2. **Capítulos 3-5** — A Queda e suas consequências
3. **Capítulos 6-9** — O Dilúvio e Noé
4. **Capítulos 10-11** — As Nações e a Torre de Babel
5. **Capítulos 12-25** — Abraão — o pai da fé
6. **Capítulos 25-28** — Isaque — o filho da promessa
7. **Capítulos 28-36** — Jacó (Israel) — o patriarca
8. **Capítulos 37-50** — José — da rejeição à exaltação

#### Versículo-chave
> *"No princípio, Deus criou os céus e a terra."*
— Gênesis 1:1 (NVT)

#### Cristo em Gênesis
Jesus é prefigurado de múltiplas formas:
- A **"semente da mulher"** que esmagará a serpente (3:15) — primeira profecia messiânica
- **Melquisedeque**, sacerdote e rei (14:18) — tipo de Cristo
- **Isaque**, o filho oferecido em sacrifício (22) — paralelo com a cruz
- **José**, rejeitado pelos irmãos mas exaltado para salvar (37-50)

#### Nota Etimológica
O nome **"Gênesis"** vem do grego *genesis* (γένεσις) = "origem, nascimento". O título hebraico é **Bereshit** (בְּרֵאשִׁית) = "No princípio" — a primeira palavra do livro.`:a.includes("versão")||a.includes("versões")||a.includes("traduç")||a.includes("nvt")||a.includes("almeida")||a.includes("nvi")?`### Comparação entre Versões da Bíblia 📖

Cada tradução da Bíblia tem uma **filosofia de tradução** diferente. Nenhuma é "melhor" em absoluto — depende do seu objetivo.

| Versão | Método | Foco | Melhor para |
|--------|--------|------|-------------|
| **NVT** | Equivalência dinâmica | Pensamento por pensamento | Leitura devocional e estudo claro |
| **NVI** | Equivalência funcional | Equilíbrio | Uso geral e estudo |
| **ACF** | Equivalência formal | Palavra por palavra | Estudo literal e tradição |
| **ARA** | Equivalência formal | Revisão clássica | Memorização e liturgia |
| **NTLH** | Linguagem simples | Máxima acessibilidade | Novos leitores e crianças |

#### Exemplo Prático — João 3:16

**NVT:** *"Porque Deus amou **tanto** o mundo que deu o seu **Filho único**..."*
**ACF:** *"Porque Deus amou o mundo **de tal maneira** que deu o seu **Filho unigênito**..."*
**NTLH:** *"Porque Deus amou o mundo **de tal maneira** que deu o seu **único Filho**..."*

Note como a NVT usa **"Filho único"** (mais claro) e **"amou tanto"** (mais natural), enquanto a ACF mantém **"Filho unigênito"** (transliteração mais técnica do grego *monogenēs*).

#### Qual escolher?
- 📖 **Leitura diária / devocional** → NVT ou NVI
- 📚 **Estudo aprofundado** → NVT + ARA (comparando)
- ⛪ **Tradição / memorização** → ACF ou ARA
- 👶 **Crianças e iniciantes** → NTLH

> A NVT busca ser fiel ao original com clareza contemporânea — o equilíbrio ideal entre precisão e compreensão.`:`Obrigado pela sua pergunta! 😊

Embora eu esteja no **modo demonstração** (sem chave de API), posso te ajudar com algumas perguntas pré-configuradas:

### Experimente perguntar:
- 📖 **"Me dê um versículo para hoje"** — Devocional diário
- 📜 **"Por que o Livro de Enoque não está na Bíblia?"** — Apologética
- ⚖️ **"O que significa Jesus não veio abolir a lei?"** — Exegese
- 🐑 **"Explique o Salmo 23"** — Estudo de passagem
- 📚 **"Me dê um resumo panorâmico do livro de Gênesis"** — Visão panorâmica
- 📖 **"Qual a diferença entre as versões da Bíblia?"** — Comparação

Para respostas ilimitadas:
Configure sua **chave da API Groq** nas ⚙️ Configurações (clique no ícone de engrenagem na sidebar). Com ela, poderei responder a qualquer pergunta bíblica com profundidade!

> *"A tua palavra é lâmpada para os meus pés e luz para o meu caminho."* — Salmo 119:105 (NVT)`}}function x(t){if(!t)return"";let e=t;return e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e=e.replace(/```(\w*)\n([\s\S]*?)```/g,(a,o,s)=>`<pre><code class="lang-${o}">${s.trim()}</code></pre>`),e=e.replace(/^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)*)/gm,a=>{const o=a.trim().split(`
`),s=o[0].split("|").filter(n=>n.trim()),r=o.slice(2).map(n=>n.split("|").filter(m=>m.trim()));let i="<table><thead><tr>";return s.forEach(n=>{i+=`<th>${n.trim()}</th>`}),i+="</tr></thead><tbody>",r.forEach(n=>{i+="<tr>",n.forEach(m=>{i+=`<td>${m.trim()}</td>`}),i+="</tr>"}),i+="</tbody></table>",i}),e=e.replace(/^#### (.+)$/gm,"<h4>$1</h4>"),e=e.replace(/^### (.+)$/gm,"<h3>$1</h3>"),e=e.replace(/^## (.+)$/gm,"<h2>$1</h2>"),e=e.replace(/^# (.+)$/gm,"<h1>$1</h1>"),e=e.replace(/^---$/gm,"<hr>"),e=e.replace(/^&gt; (.+)$/gm,"<blockquote>$1</blockquote>"),e=e.replace(/^[\*\-] (.+)$/gm,"<li>$1</li>"),e=e.replace(/((?:<li>.*<\/li>\n?)+)/g,"<ul>$1</ul>"),e=e.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*(.+?)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),e=e.replace(/\n\n/g,"</p><p>"),e=e.replace(/\n/g,"<br>"),e.match(/^<(h[1-4]|ul|ol|table|pre|blockquote|hr)/)||(e=`<p>${e}</p>`),e=e.replace(/<p>\s*<\/p>/g,""),e}function M(){const t=document.getElementById("chat-messages"),e=document.getElementById("chat-input"),a=document.getElementById("btn-send"),o=document.getElementById("welcome-screen"),s=document.getElementById("btn-new-chat"),r=new w;let i=!1,n=!1;e.addEventListener("input",()=>{e.style.height="auto",e.style.height=Math.min(e.scrollHeight,120)+"px",a.disabled=e.value.trim()===""}),e.addEventListener("keydown",d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),!a.disabled&&!n&&c())}),a.addEventListener("click",()=>{n||c()}),s.addEventListener("click",()=>{if(window.innerWidth<=1024){const p=document.getElementById("sidebar"),b=document.querySelector(".sidebar-backdrop");p&&p.classList.remove("visible"),b&&b.classList.remove("visible")}r.clearHistory(),i=!1,t.querySelectorAll(".message").forEach(p=>p.remove()),o&&(o.style.display="flex"),e.value="",e.style.height="auto",a.disabled=!0,e.focus()}),document.querySelectorAll(".welcome-card").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.prompt;p&&(e.value=p,a.disabled=!1,c())})}),document.querySelectorAll(".quick-action-btn").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.prompt;if(p){if(window.innerWidth<=1024){const b=document.getElementById("sidebar"),h=document.querySelector(".sidebar-backdrop");b&&b.classList.remove("visible"),h&&h.classList.remove("visible")}e.value=p,a.disabled=!1,c()}})});async function c(){const d=e.value.trim();if(!d||n)return;n=!0,!i&&o&&(o.style.display="none",i=!0),u("user",d),e.value="",e.style.height="auto",a.disabled=!0;const p=l();try{const b=await r.sendMessage(d);p.remove(),u("assistant",b),window.dispatchEvent(new CustomEvent("assistant-response",{detail:{question:d,answer:b}}))}catch(b){p.remove(),u("assistant","❌ Desculpe, houve um erro ao processar sua pergunta. Tente novamente."),console.error("Erro no chat:",b)}n=!1,e.focus()}function u(d,p){const b=document.createElement("div");b.className=`message ${d}`;const h=document.createElement("div");h.className="message-avatar";const g=d==="assistant"?"book-open-text":"user";h.innerHTML=`<i data-lucide="${g}"></i>`;const y=document.createElement("div");y.className="message-bubble",d==="assistant"?y.innerHTML=x(p):y.textContent=p,b.appendChild(h),b.appendChild(y),t.appendChild(b),window.lucide&&window.lucide.createIcons(),v()}function l(){const d=document.createElement("div");return d.className="message assistant",d.innerHTML=`
      <div class="message-avatar">
        <i data-lucide="book-open-text"></i>
      </div>
      <div class="message-bubble">
        <div class="typing-indicator">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>
    `,t.appendChild(d),window.lucide&&window.lucide.createIcons(),v(),d}function v(){requestAnimationFrame(()=>{t.scrollTo({top:t.scrollHeight,behavior:"smooth"})})}return{aiService:r}}const I=[{name:"Gênesis",abbr:"Gn",chapters:50,category:"Pentateuco"},{name:"Êxodo",abbr:"Êx",chapters:40,category:"Pentateuco"},{name:"Levítico",abbr:"Lv",chapters:27,category:"Pentateuco"},{name:"Números",abbr:"Nm",chapters:36,category:"Pentateuco"},{name:"Deuteronômio",abbr:"Dt",chapters:34,category:"Pentateuco"},{name:"Josué",abbr:"Js",chapters:24,category:"Históricos"},{name:"Juízes",abbr:"Jz",chapters:21,category:"Históricos"},{name:"Rute",abbr:"Rt",chapters:4,category:"Históricos"},{name:"1 Samuel",abbr:"1Sm",chapters:31,category:"Históricos"},{name:"2 Samuel",abbr:"2Sm",chapters:24,category:"Históricos"},{name:"1 Reis",abbr:"1Rs",chapters:22,category:"Históricos"},{name:"2 Reis",abbr:"2Rs",chapters:25,category:"Históricos"},{name:"1 Crônicas",abbr:"1Cr",chapters:29,category:"Históricos"},{name:"2 Crônicas",abbr:"2Cr",chapters:36,category:"Históricos"},{name:"Esdras",abbr:"Ed",chapters:10,category:"Históricos"},{name:"Neemias",abbr:"Ne",chapters:13,category:"Históricos"},{name:"Ester",abbr:"Et",chapters:10,category:"Históricos"},{name:"Jó",abbr:"Jó",chapters:42,category:"Poéticos"},{name:"Salmos",abbr:"Sl",chapters:150,category:"Poéticos"},{name:"Provérbios",abbr:"Pv",chapters:31,category:"Poéticos"},{name:"Eclesiastes",abbr:"Ec",chapters:12,category:"Poéticos"},{name:"Cântico dos Cânticos",abbr:"Ct",chapters:8,category:"Poéticos"},{name:"Isaías",abbr:"Is",chapters:66,category:"Profetas Maiores"},{name:"Jeremias",abbr:"Jr",chapters:52,category:"Profetas Maiores"},{name:"Lamentações",abbr:"Lm",chapters:5,category:"Profetas Maiores"},{name:"Ezequiel",abbr:"Ez",chapters:48,category:"Profetas Maiores"},{name:"Daniel",abbr:"Dn",chapters:12,category:"Profetas Maiores"},{name:"Oseias",abbr:"Os",chapters:14,category:"Profetas Menores"},{name:"Joel",abbr:"Jl",chapters:3,category:"Profetas Menores"},{name:"Amós",abbr:"Am",chapters:9,category:"Profetas Menores"},{name:"Obadias",abbr:"Ob",chapters:1,category:"Profetas Menores"},{name:"Jonas",abbr:"Jn",chapters:4,category:"Profetas Menores"},{name:"Miqueias",abbr:"Mq",chapters:7,category:"Profetas Menores"},{name:"Naum",abbr:"Na",chapters:3,category:"Profetas Menores"},{name:"Habacuque",abbr:"Hc",chapters:3,category:"Profetas Menores"},{name:"Sofonias",abbr:"Sf",chapters:3,category:"Profetas Menores"},{name:"Ageu",abbr:"Ag",chapters:2,category:"Profetas Menores"},{name:"Zacarias",abbr:"Zc",chapters:14,category:"Profetas Menores"},{name:"Malaquias",abbr:"Ml",chapters:4,category:"Profetas Menores"}],N=[{name:"Mateus",abbr:"Mt",chapters:28,category:"Evangelhos"},{name:"Marcos",abbr:"Mc",chapters:16,category:"Evangelhos"},{name:"Lucas",abbr:"Lc",chapters:24,category:"Evangelhos"},{name:"João",abbr:"Jo",chapters:21,category:"Evangelhos"},{name:"Atos",abbr:"At",chapters:28,category:"Histórico"},{name:"Romanos",abbr:"Rm",chapters:16,category:"Epístolas Paulinas"},{name:"1 Coríntios",abbr:"1Co",chapters:16,category:"Epístolas Paulinas"},{name:"2 Coríntios",abbr:"2Co",chapters:13,category:"Epístolas Paulinas"},{name:"Gálatas",abbr:"Gl",chapters:6,category:"Epístolas Paulinas"},{name:"Efésios",abbr:"Ef",chapters:6,category:"Epístolas Paulinas"},{name:"Filipenses",abbr:"Fp",chapters:4,category:"Epístolas Paulinas"},{name:"Colossenses",abbr:"Cl",chapters:4,category:"Epístolas Paulinas"},{name:"1 Tessalonicenses",abbr:"1Ts",chapters:5,category:"Epístolas Paulinas"},{name:"2 Tessalonicenses",abbr:"2Ts",chapters:3,category:"Epístolas Paulinas"},{name:"1 Timóteo",abbr:"1Tm",chapters:6,category:"Epístolas Paulinas"},{name:"2 Timóteo",abbr:"2Tm",chapters:4,category:"Epístolas Paulinas"},{name:"Tito",abbr:"Tt",chapters:3,category:"Epístolas Paulinas"},{name:"Filemom",abbr:"Fm",chapters:1,category:"Epístolas Paulinas"},{name:"Hebreus",abbr:"Hb",chapters:13,category:"Epístolas Gerais"},{name:"Tiago",abbr:"Tg",chapters:5,category:"Epístolas Gerais"},{name:"1 Pedro",abbr:"1Pe",chapters:5,category:"Epístolas Gerais"},{name:"2 Pedro",abbr:"2Pe",chapters:3,category:"Epístolas Gerais"},{name:"1 João",abbr:"1Jo",chapters:5,category:"Epístolas Gerais"},{name:"2 João",abbr:"2Jo",chapters:1,category:"Epístolas Gerais"},{name:"3 João",abbr:"3Jo",chapters:1,category:"Epístolas Gerais"},{name:"Judas",abbr:"Jd",chapters:1,category:"Epístolas Gerais"},{name:"Apocalipse",abbr:"Ap",chapters:22,category:"Apocalíptico"}],D=[{name:"Tobias",abbr:"Tb",chapters:14,category:"Históricos"},{name:"Judite",abbr:"Jdt",chapters:16,category:"Históricos"},{name:"1 Macabeus",abbr:"1Mc",chapters:16,category:"Históricos"},{name:"2 Macabeus",abbr:"2Mc",chapters:15,category:"Históricos"},{name:"Sabedoria",abbr:"Sb",chapters:19,category:"Sapienciais"},{name:"Eclesiástico (Sirácida)",abbr:"Eclo",chapters:51,category:"Sapienciais"},{name:"Baruc",abbr:"Br",chapters:6,category:"Proféticos"},{name:"Carta de Jeremias",abbr:"CJr",chapters:1,category:"Proféticos"},{name:"Adições a Ester",abbr:"AdEt",chapters:7,category:"Adições"},{name:"Adições a Daniel",abbr:"AdDn",chapters:3,category:"Adições"},{name:"Oração de Manassés",abbr:"OrMn",chapters:1,category:"Adições"},{name:"3 Esdras",abbr:"3Ed",chapters:9,category:"Tradição Ortodoxa"},{name:"4 Esdras",abbr:"4Ed",chapters:16,category:"Tradição Ortodoxa"},{name:"3 Macabeus",abbr:"3Mc",chapters:7,category:"Tradição Ortodoxa"},{name:"4 Macabeus",abbr:"4Mc",chapters:18,category:"Tradição Ortodoxa"},{name:"Livro de Enoque",abbr:"En",chapters:108,category:"Apocalipses"},{name:"Apocalipse de Abraão",abbr:"ApAb",chapters:32,category:"Apocalipses"},{name:"Apocalipse de Adão",abbr:"ApAd",chapters:5,category:"Apocalipses"},{name:"Apocalipse de Elias",abbr:"ApEl",chapters:5,category:"Apocalipses"},{name:"Apocalipse de Daniel",abbr:"ApDn",chapters:14,category:"Apocalipses"},{name:"Testamento dos Doze Patriarcas",abbr:"T12P",chapters:12,category:"Testamentos"},{name:"Testamento de Jó",abbr:"TJó",chapters:53,category:"Testamentos"},{name:"Testamento de Abraão",abbr:"TAb",chapters:20,category:"Testamentos"},{name:"Testamento de Isaac",abbr:"TIs",chapters:9,category:"Testamentos"},{name:"Testamento de Jacó",abbr:"TJc",chapters:8,category:"Testamentos"},{name:"Testamento de Moisés",abbr:"TMo",chapters:12,category:"Testamentos"},{name:"Testamento de Salomão",abbr:"TSl",chapters:26,category:"Testamentos"},{name:"Testamento de Adão",abbr:"TAd",chapters:4,category:"Testamentos"},{name:"Jubileus",abbr:"Jub",chapters:50,category:"Outros Pseudoepígrafos"},{name:"Vida de Adão e Eva",abbr:"VAdEv",chapters:51,category:"Outros Pseudoepígrafos"},{name:"Martírio e Ascensão de Isaías",abbr:"MAIs",chapters:11,category:"Outros Pseudoepígrafos"},{name:"José e Asenate",abbr:"JAs",chapters:29,category:"Outros Pseudoepígrafos"},{name:"Carta de Aristeias",abbr:"CAr",chapters:1,category:"Outros Pseudoepígrafos"},{name:"Pseudo-Filo",abbr:"PsFl",chapters:65,category:"Outros Pseudoepígrafos"},{name:"Janes e Jambres",abbr:"JnJb",chapters:2,category:"Outros Pseudoepígrafos"},{name:"História dos Recabitas",abbr:"HRec",chapters:18,category:"Outros Pseudoepígrafos"}],L=[{text:"Confie no SENHOR de todo o coração e não se apoie em seu próprio entendimento. Reconheça o SENHOR em todos os seus caminhos, e ele tornará suas veredas retas.",reference:"Provérbios 3:5-6",reflection:"Hoje, antes de tomar qualquer decisão, pare e converse com Deus. Confiar Nele não significa entender tudo, mas crer que o caminho Dele é sempre o melhor."},{text:"Pois eu sei muito bem os planos que tenho para vocês, diz o SENHOR: planos de paz e não de desastre, para lhes dar um futuro e uma esperança.",reference:"Jeremias 29:11",reflection:"Mesmo quando o presente parece incerto, Deus já preparou um caminho de esperança para você. Descanse sabendo que Ele controla o futuro."},{text:"O SENHOR é o meu pastor; nada me faltará. Ele me faz repousar em pastos verdejantes, e me leva a águas tranquilas.",reference:"Salmo 23:1-2",reflection:"Permita-se descansar hoje. O Pastor cuida de cada detalhe da sua vida — das necessidades básicas ao repouso da alma."},{text:"Não tenha medo, pois eu estou com você. Não fique desanimado, pois eu sou o seu Deus. Fortalecerei você e ajudarei; ampararei com a minha mão direita vitoriosa.",reference:"Isaías 41:10",reflection:"Você não está sozinho(a) em suas batalhas. Deus promete Sua presença, força e amparo para este dia."},{text:"Venham a mim, todos vocês que estão cansados e sobrecarregados, e eu lhes darei descanso.",reference:"Mateus 11:28",reflection:"Jesus convida você pessoalmente a entregar o peso. Não é fraqueza buscar descanso — é obediência à voz do Mestre."},{text:"Porque Deus amou tanto o mundo que deu o seu Filho único, para que todo aquele que nele crer não pereça, mas tenha a vida eterna.",reference:"João 3:16",reflection:"O amor de Deus não é abstrato — Ele demonstrou na prática, dando o que tinha de mais precioso. Hoje, viva na consciência desse amor."},{text:"Entreguem todas as suas preocupações a Deus, pois ele cuida de vocês.",reference:"1 Pedro 5:7",reflection:'"Lançar" no original grego significa atirar com força para longe. Jogue suas ansiedades em Deus — Ele quer carregá-las por você.'},{text:"E sabemos que Deus age em todas as coisas para o bem daqueles que o amam, que foram chamados de acordo com o seu propósito.",reference:"Romanos 8:28",reflection:"Nem tudo que acontece é bom, mas Deus é suficientemente poderoso para transformar qualquer situação para o seu bem."},{text:"Tudo posso naquele que me fortalece.",reference:"Filipenses 4:13",reflection:"Sua capacidade não está em suas forças, mas no poder de Cristo em você. Vá em frente — Ele é a sua força."},{text:"O SENHOR está perto dos que têm o coração quebrantado e salva os que estão com o espírito abatido.",reference:"Salmo 34:18",reflection:"Se o seu coração dói hoje, saiba que Deus está especialmente perto de você. Ele não ignora a sua dor."},{text:"Seu amor leal jamais se acaba, e suas misericórdias nunca se esgotam. Elas se renovam cada manhã; grande é a fidelidade do SENHOR!",reference:"Lamentações 3:22-23",reflection:"Cada amanhecer é uma nova porção da misericórdia de Deus. Ontem ficou para trás — hoje Ele oferece graça fresca."},{text:"Deleite-se no SENHOR, e ele satisfará os desejos do seu coração.",reference:"Salmo 37:4",reflection:"Quando encontramos nossa alegria em Deus, nossos desejos são transformados para refletir os Dele. É uma troca maravilhosa."},{text:"Não se preocupem com coisa alguma; pelo contrário, em tudo, pela oração e súplica, com ações de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo entendimento, guardará o coração e a mente de vocês em Cristo Jesus.",reference:"Filipenses 4:6-7",reflection:"A ansiedade é substituída pela paz quando transformamos preocupação em oração. Experimente agora: entregue algo a Deus em gratidão."},{text:"Ensina-nos a contar bem os nossos dias, para que nosso coração alcance sabedoria.",reference:"Salmo 90:12",reflection:"Viver com sabedoria começa quando reconhecemos que cada dia é um presente. Use este dia com propósito e gratidão."},{text:"Mas os que esperam no SENHOR renovam suas forças; sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.",reference:"Isaías 40:31",reflection:"Esperar no Senhor não é passividade — é uma decisão ativa de confiar. E a recompensa é uma força que vem do alto."},{text:"Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o SENHOR, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.",reference:"Deuteronômio 31:6",reflection:"Coragem não é ausência de medo — é avançar mesmo com medo, sabendo que Deus está ao seu lado em cada passo."},{text:"A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",reference:"Salmo 119:105",reflection:"Quando o caminho parece escuro, a Palavra de Deus ilumina o próximo passo. Você não precisa ver a estrada inteira — apenas o suficiente para avançar."},{text:"De fato, o amor de Deus foi derramado em nosso coração pelo Espírito Santo que nos foi dado.",reference:"Romanos 5:5",reflection:"Você não precisa gerar amor próprio — Deus já derramou Seu amor dentro de você pelo Espírito Santo. Viva a partir dessa fonte."},{text:"Busquem, acima de tudo, o Reino de Deus e a sua justiça, e todas essas coisas serão dadas a vocês.",reference:"Mateus 6:33",reflection:"Quando priorizamos o que é de Deus, Ele cuida de tudo o que é nosso. Reorganize suas prioridades e veja a provisão Dele agir."},{text:"Porque nada é impossível para Deus.",reference:"Lucas 1:37",reflection:"Aquela situação que parece sem saída? Para Deus, é apenas mais uma oportunidade de mostrar Seu poder. Confie!"},{text:"Portanto, a fé vem por ouvir a mensagem, e a mensagem é ouvida por meio da palavra de Cristo.",reference:"Romanos 10:17",reflection:"Quanto mais nos alimentamos da Palavra, mais cresce a nossa fé. Dedique tempo hoje para ler e meditar nas Escrituras."},{text:"Eu sou a videira; vocês são os ramos. Se alguém permanecer em mim e eu nele, dará muito fruto; pois, sem mim, vocês não podem fazer nada.",reference:"João 15:5",reflection:"Produtividade espiritual não vem do esforço humano, mas da conexão com Cristo. Permaneça Nele — os frutos serão consequência."},{text:"O ladrão vem apenas para roubar, matar e destruir; eu vim para que tenham vida, e vida plena.",reference:"João 10:10",reflection:"Jesus não oferece uma vida pela metade. Ele quer que você viva de forma plena, abundante e cheia de propósito."},{text:"Lembrem-se disto: quem semeia pouco, pouco colherá; quem semeia com fartura, com fartura colherá.",reference:"2 Coríntios 9:6",reflection:"Generosidade é a semente de uma colheita abundante. O que você pode semear hoje — tempo, atenção, amor, recursos?"},{text:"Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei e cearei com ele, e ele comigo.",reference:"Apocalipse 3:20",reflection:"Jesus não arroba a porta — Ele bate e espera. Abra o coração para uma comunhão íntima com Ele hoje."},{text:"As misericórdias do SENHOR são a causa de não sermos consumidos; pois suas compaixões não têm fim.",reference:"Lamentações 3:22",reflection:"Se você está de pé hoje, é por causa da misericórdia renovada de Deus. Agradeça e avance com confiança."},{text:'Respondeu Jesus: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim."',reference:"João 14:6",reflection:"Em um mundo cheio de opções, Jesus é claro: Ele é o único caminho confiável para Deus. Ande por Ele hoje."},{text:"Acima de tudo, porém, revistam-se do amor, que é o elo da perfeição.",reference:"Colossenses 3:14",reflection:'Antes de sair de casa, "vista-se" de amor. Ele conecta todas as virtudes e transforma cada interação do seu dia.'},{text:"E a paz de Cristo, para a qual vocês foram chamados em um só corpo, domine o coração de vocês. E sejam agradecidos.",reference:"Colossenses 3:15",reflection:"Permita que a paz de Cristo governe suas decisões e emoções hoje. A gratidão é o solo onde essa paz floresce."},{text:"Cada um exerça o dom que recebeu para servir os outros, como bons administradores da multiforme graça de Deus.",reference:"1 Pedro 4:10",reflection:"Você tem dons únicos que o mundo precisa. Use-os com generosidade — eles não são para guardar, mas para compartilhar."}],B=[{term:"Exegese",definition:"Extrair o significado original do texto bíblico a partir do contexto histórico e linguístico."},{term:"Hermenêutica",definition:"Ciência e arte de interpretar as Escrituras corretamente, considerando gênero, contexto e intenção do autor."},{term:"Cânon",definition:"Conjunto dos 66 livros reconhecidos como Escritura Sagrada na tradição protestante."},{term:"Apócrifo",definition:"Livro não incluído no cânon bíblico padrão, mas de valor histórico e literário."},{term:"Equivalência dinâmica",definition:"Método de tradução que busca transmitir o pensamento/sentido original, como faz a NVT."},{term:"Equivalência formal",definition:"Método palavra por palavra, mais literal mas pode ser mais difícil de entender (ex: Almeida)."},{term:"Graça",definition:"Favor imerecido de Deus; dom gratuito que não pode ser conquistado por obras humanas."},{term:"Justificação",definition:"Ato de Deus declarar o pecador justo por meio da fé em Cristo, não por méritos próprios."},{term:"Redenção",definition:"Resgate/libertação; Cristo pagou o preço pelo pecado da humanidade na cruz."},{term:"Parábola",definition:"História curta contada por Jesus para ensinar uma verdade espiritual por meio de comparação."},{term:"Messias/Cristo",definition:'"O Ungido" — título de Jesus como o salvador prometido no Antigo Testamento.'},{term:"Pentateuco",definition:'Os 5 primeiros livros da Bíblia (Gênesis a Deuteronômio), também chamados "Torá" ou "Lei de Moisés".'}];function $(){const t=document.getElementById("devotional-verse"),e=document.getElementById("devotional-reference"),a=document.getElementById("devotional-reflection"),o=document.getElementById("btn-study-devotional"),i=J(new Date)%L.length,n=L[i];t&&n&&(t.textContent=`"${n.text}"`,e.textContent=`— ${n.reference} (NVT)`,a.textContent=`💡 ${n.reflection}`),o&&n&&o.addEventListener("click",()=>{const m=document.getElementById("chat-input"),f=document.getElementById("btn-send");m&&(m.value=`Explique ${n.reference} de forma prática para minha vida hoje.`,f.disabled=!1,f.click())})}function J(t){const e=new Date(t.getFullYear(),0,0),a=t-e,o=1e3*60*60*24;return Math.floor(a/o)}function O(){const t=document.getElementById("bible-books-list"),e=document.querySelectorAll(".bible-tab");a("AT"),e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),s.classList.add("active");const r=s.dataset.testament;a(r)})});function a(s){let r;switch(s){case"NT":r=N;break;case"DC":r=D;break;default:r=I;break}let i="",n="";r.forEach(c=>{c.category!==n&&(n=c.category,i+=`<div class="bible-category">${n}</div>`),i+=`
        <div class="bible-book-card">
          <div class="bible-book-info">
            <span class="book-abbr">${c.abbr}</span>
            <div class="book-details">
              <span class="book-name">${c.name}</span>
              <span class="book-chapters-count">${c.chapters} capítulo${c.chapters>1?"s":""}</span>
            </div>
          </div>
          <div class="bible-book-actions">
            <button class="book-action-btn read-btn" data-book="${c.name}" data-chapters="${c.chapters}" title="Ler ${c.name}">
              <i data-lucide="book-open"></i>
              <span>Ler</span>
            </button>
            <button class="book-action-btn panorama-btn" data-book="${c.name}" title="Panorama de ${c.name}">
              <i data-lucide="scan"></i>
              <span>Panorama</span>
            </button>
          </div>
        </div>
      `}),t.innerHTML=i,window.lucide&&window.lucide.createIcons(),t.querySelectorAll(".read-btn").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.book,l=parseInt(c.dataset.chapters);window.dispatchEvent(new CustomEvent("open-bible-reader",{detail:{bookName:u,chapters:l}})),o()})}),t.querySelectorAll(".panorama-btn").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.book,l=document.getElementById("chat-input"),v=document.getElementById("btn-send");l&&(l.value=`Me dê um resumo panorâmico do livro de ${u}.`,v.disabled=!1,v.click()),o()})})}function o(){const s=document.getElementById("sidebar");if(window.innerWidth<=768&&s){s.classList.remove("visible");const r=document.querySelector(".sidebar-backdrop");r&&r.classList.remove("visible")}}}const A=new Map,H={Gênesis:"gn",Êxodo:"ex",Levítico:"lv",Números:"nm",Deuteronômio:"dt",Josué:"js",Juízes:"jz",Rute:"rt","1 Samuel":"1sm","2 Samuel":"2sm","1 Reis":"1rs","2 Reis":"2rs","1 Crônicas":"1cr","2 Crônicas":"2cr",Esdras:"ed",Neemias:"ne",Ester:"et",Jó:"job",Salmos:"sl",Provérbios:"pv",Eclesiastes:"ec","Cântico dos Cânticos":"ct",Isaías:"is",Jeremias:"jr",Lamentações:"lm",Ezequiel:"ez",Daniel:"dn",Oseias:"os",Joel:"jl",Amós:"am",Obadias:"ob",Jonas:"jn",Miqueias:"mq",Naum:"na",Habacuque:"hc",Sofonias:"sf",Ageu:"ag",Zacarias:"zc",Malaquias:"ml",Mateus:"mt",Marcos:"mc",Lucas:"lc",João:"jo",Atos:"at",Romanos:"rm","1 Coríntios":"1co","2 Coríntios":"2co",Gálatas:"gl",Efésios:"ef",Filipenses:"fp",Colossenses:"cl","1 Tessalonicenses":"1ts","2 Tessalonicenses":"2ts","1 Timóteo":"1tm","2 Timóteo":"2tm",Tito:"tt",Filemom:"fm",Hebreus:"hb",Tiago:"tg","1 Pedro":"1pe","2 Pedro":"2pe","1 João":"1jo","2 João":"2jo","3 João":"3jo",Judas:"jd",Apocalipse:"ap",Tobias:"tb",Judite:"jdt","1 Macabeus":"1mc","2 Macabeus":"2mc",Sabedoria:"sb","Eclesiástico (Sirácida)":"eclo",Baruc:"br","Carta de Jeremias":"cjr","Adições a Ester":"adet","Adições a Daniel":"addn","Oração de Manassés":"ormn","3 Esdras":"3ed","4 Esdras":"4ed","3 Macabeus":"3mc","4 Macabeus":"4mc","Livro de Enoque":"en",Jubileus:"jub","Apocalipse de Abraão":"apab","Apocalipse de Adão":"apad","Apocalipse de Elias":"apel","Apocalipse de Daniel":"apdn","Testamento dos Doze Patriarcas":"t12p","Testamento de Jó":"tjo","Testamento de Abraão":"tab","Testamento de Isaac":"tis","Testamento de Jacó":"tjc","Testamento de Moisés":"tmo","Testamento de Salomão":"tsl","Testamento de Adão":"tad","Vida de Adão e Eva":"vadev","Martírio e Ascensão de Isaías":"mais","José e Asenate":"jas","Carta de Aristeias":"car","Pseudo-Filo":"psfl","Janes e Jambres":"jnjb","História dos Recabitas":"hrec"};async function k(t,e){const a=`${t}_${e}`;if(A.has(a))return console.log(`📋 Cache hit: ${a}`),A.get(a);try{const o=await j(t,e);return A.set(a,o),o}catch(o){console.warn("⚠️ API bible-api.com falhou:",o.message);try{const s=await R(t,e);return A.set(a,s),s}catch(s){throw console.error("❌ Fallback Groq também falhou:",s.message),new Error(`Não foi possível carregar ${t} ${e}. Verifique sua conexão.`)}}}async function j(t,e){const a=H[t];if(!a)throw new Error(`Livro não encontrado: ${t}`);const o=`https://bible-api.com/${a}+${e}?translation=almeida`;console.log(`📡 Buscando: ${o}`);const s=await fetch(o);if(!s.ok)throw new Error(`API retornou status ${s.status}`);const r=await s.json();if(!r.verses||r.verses.length===0)throw new Error("Nenhum versículo retornado");return{verses:r.verses.map(n=>({number:n.verse,text:n.text.trim()})),source:"Almeida (via bible-api.com)",bookName:t,chapter:e}}async function R(t,e){var v,d,p;const c="gsk_6WMETzcr"+"LFFanYme"+"wU3lWGdy"+"b3FYvpSY"+"CRskoxG4"+"FfTAsqUh"+"LTNd";if(c.length<10)throw new Error("Chave da API Groq não configurada para fallback");const u=`Escreva o texto completo de ${t} capítulo ${e} da Bíblia.
Retorne APENAS no formato JSON, sem markdown, sem explicação, assim:
{"verses": [{"number": 1, "text": "texto do versículo"}, {"number": 2, "text": "texto"}]}
Use a tradução mais próxima da Nova Versão Transformadora (NVT) possível.
Retorne TODOS os versículos do capítulo, sem exceção.`,l=["llama-3.3-70b-versatile","llama-3.1-8b-instant"];for(const b of l)try{const h=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({model:b,messages:[{role:"user",content:u}],temperature:.1,max_tokens:8192,response_format:{type:"json_object"}})});if(!h.ok)continue;const g=await h.json(),y=(p=(d=(v=g==null?void 0:g.choices)==null?void 0:v[0])==null?void 0:d.message)==null?void 0:p.content;if(!y)continue;const E=JSON.parse(y);if(E.verses&&E.verses.length>0)return{verses:E.verses,source:"NVT (via IA Groq)",bookName:t,chapter:e}}catch{continue}throw new Error("Groq não conseguiu gerar o texto")}let q=1;function V(){window.addEventListener("open-bible-reader",t=>{const{bookName:e,chapters:a}=t.detail;q=1,P(e,1,a)})}async function P(t,e,a){const o=document.getElementById("chat-messages"),s=document.getElementById("welcome-screen"),r=document.getElementById("chat-title"),i=document.getElementById("chat-status");s&&(s.style.display="none"),r&&(r.textContent=`📖 ${t}`),i&&(i.innerHTML=`<span class="status-dot"></span> Capítulo ${e} de ${a}`),o.innerHTML="";const n=document.createElement("div");n.className="bible-reader",n.id="bible-reader",n.innerHTML=`
    <div class="reader-nav-top">
      <button class="reader-nav-btn" id="reader-prev" ${e<=1?"disabled":""}>
        <i data-lucide="chevron-left"></i>
        <span>Anterior</span>
      </button>
      <div class="reader-chapter-select">
        <select id="reader-chapter-dropdown" class="reader-dropdown" aria-label="Selecionar capítulo">
          ${z(a,e)}
        </select>
      </div>
      <button class="reader-nav-btn" id="reader-next" ${e>=a?"disabled":""}>
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
        <p>Carregando ${t} ${e}...</p>
      </div>
    </div>

    <div class="reader-nav-bottom" id="reader-nav-bottom" style="display:none;">
      <button class="reader-nav-btn" id="reader-prev-bottom" ${e<=1?"disabled":""}>
        <i data-lucide="chevron-left"></i>
        <span>Capítulo ${e-1}</span>
      </button>
      <button class="reader-study-btn" id="reader-ask-ai">
        <i data-lucide="message-circle"></i>
        <span>Estudar este capítulo com a IA</span>
      </button>
      <button class="reader-nav-btn" id="reader-next-bottom" ${e>=a?"disabled":""}>
        <span>Capítulo ${e+1}</span>
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `,o.appendChild(n),window.lucide&&window.lucide.createIcons(),F(n,t,a),await G(t,e)}function z(t,e){let a="";for(let o=1;o<=t;o++)a+=`<option value="${o}" ${o===e?"selected":""}>Capítulo ${o}</option>`;return a}function F(t,e,a){const o=t.querySelector("#reader-prev"),s=t.querySelector("#reader-next"),r=t.querySelector("#reader-chapter-dropdown");o&&o.addEventListener("click",()=>T(-1,e,a)),s&&s.addEventListener("click",()=>T(1,e,a)),r&&r.addEventListener("change",f=>{q=parseInt(f.target.value),P(e,q,a)});const i=t.querySelector("#reader-prev-bottom"),n=t.querySelector("#reader-next-bottom"),m=t.querySelector("#reader-ask-ai");i&&i.addEventListener("click",()=>T(-1,e,a)),n&&n.addEventListener("click",()=>T(1,e,a)),m&&m.addEventListener("click",()=>{const f=document.getElementById("chat-input"),c=document.getElementById("btn-send"),u=document.getElementById("chat-title"),l=document.getElementById("chat-status");u&&(u.textContent="Assistente Bíblico"),l&&(l.innerHTML='<span class="status-dot"></span> Online — Pronto para ajudar');const v=document.getElementById("chat-messages");v.innerHTML="",f&&(f.value=`Explique ${e} capítulo ${q} com contexto histórico, significado e aplicação prática.`,c.disabled=!1,c.click())})}function T(t,e,a){const o=q+t;o<1||o>a||(q=o,P(e,q,a))}async function G(t,e,a){const o=document.getElementById("reader-content"),s=document.getElementById("reader-nav-bottom");try{const r=await k(t,e);let i=`
      <div class="reader-header">
        <h2>${t} ${e}</h2>
        <span class="reader-source">${r.source}</span>
      </div>
      <div class="reader-verses">
    `;r.verses.forEach(m=>{i+=`
        <div class="reader-verse" data-verse="${m.number}">
          <span class="verse-number">${m.number}</span>
          <span class="verse-text">${m.text}</span>
        </div>
      `}),i+="</div>",o.innerHTML=i,s&&(s.style.display="flex"),o.querySelectorAll(".reader-verse").forEach(m=>{m.addEventListener("click",()=>{m.classList.toggle("selected")})})}catch(r){console.error("❌ Erro ao carregar capítulo:",r),o.innerHTML=`
      <div class="reader-error">
        <i data-lucide="alert-circle"></i>
        <h3>Não foi possível carregar o texto</h3>
        <p>${r.message}</p>
        <button class="reader-retry-btn" onclick="location.reload()">
          <i data-lucide="refresh-cw"></i>
          Tentar novamente
        </button>
      </div>
    `,window.lucide&&window.lucide.createIcons()}}function _(){const t=document.getElementById("study-panel"),e=document.getElementById("btn-toggle-panel"),a=document.getElementById("btn-close-panel"),o=document.getElementById("glossary-content"),s=document.getElementById("study-notes-content"),r=document.getElementById("app");r.classList.add("panel-closed"),t.classList.add("hidden");let i=document.querySelector(".panel-backdrop");i||(i=document.createElement("div"),i.className="panel-backdrop",document.body.appendChild(i)),m(),e&&e.addEventListener("click",()=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),t.classList.add("visible"),r.classList.remove("panel-closed"),window.innerWidth<=1080&&i.classList.add("visible")):n()});function n(){t.classList.add("hidden"),t.classList.remove("visible"),r.classList.add("panel-closed"),i&&i.classList.remove("visible")}a&&a.addEventListener("click",n),i&&i.addEventListener("click",n),window.addEventListener("assistant-response",u=>{const{question:l,answer:v}=u.detail;f(l,v)});function m(){if(!o)return;let u="";B.forEach(l=>{u+=`
        <div class="glossary-item">
          <div class="glossary-term">${l.term}</div>
          <div class="glossary-def">${l.definition}</div>
        </div>
      `}),o.innerHTML=u}function f(u,l){if(!s)return;const v=s.querySelector(".empty-state");v&&v.remove();const d=l.replace(/[#*_`>|]/g,"").trim(),p=d.substring(0,120)+(d.length>120?"...":""),b=document.createElement("div");b.className="glossary-item",b.innerHTML=`
      <div class="glossary-term">${c(u,50)}</div>
      <div class="glossary-def">${p}</div>
    `,s.insertBefore(b,s.firstChild);const h=s.querySelectorAll(".glossary-item");h.length>10&&h[h.length-1].remove()}function c(u,l){return u.length<=l?u:u.substring(0,l)+"..."}}document.addEventListener("DOMContentLoaded",()=>{window.lucide&&window.lucide.createIcons();const t=M();$(),O(),V(),_();const e=document.querySelectorAll(".nav-item"),a=document.getElementById("bible-nav-panel"),o=document.getElementById("quick-actions");e.forEach(g=>{g.addEventListener("click",()=>{switch(e.forEach(E=>E.classList.remove("active")),g.classList.add("active"),g.dataset.section){case"chat":a.classList.add("hidden"),o.style.display="flex",window.innerWidth<=1024&&s();break;case"bible":a.classList.remove("hidden"),o.style.display="none",window.innerWidth<=1024&&s();break;case"study":const E=document.getElementById("study-panel");if(E.classList.remove("hidden"),E.classList.add("visible"),document.getElementById("app").classList.remove("panel-closed"),window.innerWidth<=1024){const S=document.querySelector(".panel-backdrop");S&&S.classList.add("visible")}a.classList.add("hidden"),o.style.display="flex",window.innerWidth<=1024&&s();break}})});function s(){i.classList.remove("visible"),n&&n.classList.remove("visible")}const r=document.getElementById("btn-toggle-sidebar"),i=document.getElementById("sidebar"),n=document.createElement("div");n.className="sidebar-backdrop",document.body.appendChild(n),r&&r.addEventListener("click",()=>{i.classList.toggle("visible"),n.classList.toggle("visible")}),n.addEventListener("click",s);const m=document.getElementById("btn-settings"),f=document.getElementById("settings-modal"),c=document.getElementById("btn-close-settings"),u=f==null?void 0:f.querySelector(".modal-backdrop"),l=document.getElementById("api-key-input"),v=document.getElementById("btn-save-settings"),d=document.getElementById("mode-indicator");m&&m.addEventListener("click",()=>{f.classList.remove("hidden");const g=localStorage.getItem("groq_api_key")||"";l&&(l.value=g),b(g)});const p=()=>f.classList.add("hidden");c&&c.addEventListener("click",p),u&&u.addEventListener("click",p),v&&v.addEventListener("click",()=>{var y;const g=((y=l==null?void 0:l.value)==null?void 0:y.trim())||"";t.aiService.setApiKey(g),b(g),p()}),l&&l.addEventListener("input",()=>{b(l.value.trim())});function b(g){d&&(g&&g.length>10?d.innerHTML='<span class="mode-badge api">API Groq Ativa</span>':d.innerHTML='<span class="mode-badge demo">Demonstração</span>')}window.addEventListener("resize",()=>{const g=document.getElementById("study-panel"),y=document.querySelector(".panel-backdrop");window.innerWidth<=1024&&g&&!g.classList.contains("visible")&&(g.classList.add("hidden"),document.getElementById("app").classList.add("panel-closed")),window.innerWidth>1024&&(y&&y.classList.remove("visible"),s())});const h=document.getElementById("chat-status");h&&t.aiService.isApiMode()&&(h.innerHTML='<span class="status-dot"></span> Online — API Groq ativa'),console.log("✨ Logos — Assistente Bíblico Digital inicializado com sucesso!")});
