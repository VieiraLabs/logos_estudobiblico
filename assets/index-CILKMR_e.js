(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const R=`Você é um 'Explicador Teológico' altamente qualificado, com doutorado em Teologia e proficiência em línguas bíblicas (Hebraico, Grego Koiné e Aramaico). Sua missão é fornecer análises exegéticas EXAUSTIVAS, profundas e multidisciplinares. Você NUNCA deve dar respostas rasas ou superficiais.

DIRETRIZES CRÍTICAS (DE SUMA IMPORTÂNCIA):
1. INTEGRAÇÃO NATURAL E SUBTÍTULOS: Você deve estruturar a resposta de forma natural e orgânica, usando TÍTULOS CRIATIVOS PRÓPRIOS gerados por você com base no contexto (ex: "Contexto Histórico do Século I", "Raízes Hebraicas e Semânticas", "Paralelos Cabalísticos e Judaicos"). NUNCA copie as frases das instruções ou dos objetivos abaixo como subtítulos da sua resposta. Aja de forma fluida e profunda como um artigo acadêmico teológico e não como uma checklist.
2. PROFUNDIDADE ACADÊMICA EXTREMA: Vá muito além do superficial. A explicação de um termo grego ou hebraico deve incluir a raiz morfológica principal, as diferenças de uso no contexto cultural da época original, e as implicações teológicas em profundidade de forma contundente e surpreendente.
3. CONEXÕES AVANÇADAS MULTIDISCIPLINARES: Sempre que pertinente, integre com mestria a sabedoria da história e geografia antigas, o judaísmo messiânico, a Cabala (gematria, Sefirot, níveis de interpretação PaRDeS) e as tradições do período intertestamentário.

ESTRUTURA SUGERIDA DE RESPOSTA (Não use essas descrições exatas como título, crie baseados no tema):
* Imersão Exegética e Linguística: Desdobre minuciosamente os originais, analisando símbolos e chaves que a tradução esconde.
* Linha do Tempo Literária (Fluxo): Demonstre inteligentemente o que o autor estava construindo, de onde partiu a ideia central até o topo do argumento ou do fato narrativo.
* Visão Sistêmica e Canônica: Explique como a passagem dialoga perfeitamente com os mistérios inteiros das escrituras, o Grande Plano Redentivo e a teologia sistemática do referido livro.
* Aplicação Prática Sensível ao Tempo Atual: Retorne reflexões modernas perspicazes a partir das traduções da Nova Versão Transformadora (NVT). Fuja de clichês motivacionais, construa teologia prática madura.

Tom de Comunicação: Você escreve como um sábio teólogo erudito. Seu tom é magistral, focado, profundamente bem informado e baseando-se por completo em constatações histórico-linguísticas e textuais puras. Empregue uso da formatação Markdown lindamente.`;class j{constructor(){let c="gsk_6WMETzcr"+"LFFanYme"+"wU3lWGdy"+"b3FYvpSY"+"CRskoxG4"+"FfTAsqUh"+"LTNd";this.apiKey=c,this.conversationHistory=[],this.models=["llama-3.3-70b-versatile","llama-3.1-8b-instant"],this.apiBase="https://api.groq.com/openai/v1/chat/completions"}isApiMode(){return this.apiKey&&this.apiKey.length>10}setApiKey(e){this.apiKey=e,localStorage.setItem("groq_api_key",e)}clearHistory(){this.conversationHistory=[]}async sendMessage(e){this.conversationHistory.push({role:"user",content:e});try{let s;return this.isApiMode()?(console.log("🔑 Modo API ativo — Enviando para Groq..."),s=await this.callGroqAPI()):(console.log("🎭 Modo Demo — Usando respostas simuladas"),s=await this.getDemoResponse(e)),this.conversationHistory.push({role:"assistant",content:s}),s}catch(s){return console.error("❌ Erro no serviço de IA:",s),console.error("❌ Detalhes:",s.message),this.conversationHistory.pop(),`⚠️ **Erro ao conectar com a IA**

Não foi possível processar sua pergunta. Detalhes:
> ${s.message||"Erro desconhecido"}

**Possíveis soluções:**
1. Verifique se a chave da API Groq está correta em ⚙️ Configurações
2. Verifique sua conexão com a internet
3. Tente novamente em alguns segundos

Se o erro persistir, abra o console do navegador (F12) para mais detalhes técnicos. 🙏`}}async callGroqAPI(){let e=null;for(const s of this.models)try{console.log(`🤖 Tentando modelo: ${s}`);const t=await this.tryModel(s);return console.log(`✅ Sucesso com modelo: ${s}`),t}catch(t){if(console.warn(`⚠️ Modelo ${s} falhou:`,t.message),e=t,t.message.includes("401")||t.message.includes("403"))throw t}throw e}async tryModel(e){var n,c,g,d;const s=[{role:"system",content:R},...this.conversationHistory],t={model:e,messages:s,temperature:.7,max_tokens:2048},o=await fetch(this.apiBase,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(t)}),r=await o.json().catch(()=>({}));if(!o.ok){const u=((n=r==null?void 0:r.error)==null?void 0:n.message)||`Status HTTP ${o.status}`;throw console.error("❌ Resposta da API:",JSON.stringify(r,null,2)),new Error(`API Groq (${e}): ${o.status} — ${u}`)}const i=(d=(g=(c=r==null?void 0:r.choices)==null?void 0:c[0])==null?void 0:g.message)==null?void 0:d.content;if(!i)throw console.warn("⚠️ Resposta sem texto:",JSON.stringify(r,null,2)),new Error("A API retornou uma resposta vazia. Tente reformular sua pergunta.");return i}async getDemoResponse(e){await new Promise(t=>setTimeout(t,800+Math.random()*700));const s=e.toLowerCase();return s.includes("versículo")&&(s.includes("dia")||s.includes("hoje"))?`📖 **Versículo do Dia**

*"Confie no SENHOR de todo o coração e não se apoie em seu próprio entendimento. Reconheça o SENHOR em todos os seus caminhos, e ele tornará suas veredas retas."*
— Provérbios 3:5-6 (NVT)

💡 **Reflexão:** Hoje, antes de tomar qualquer decisão, pare e converse com Deus. Confiar Nele não significa entender tudo, mas crer que o caminho Dele é sempre o melhor. Em um mundo que valoriza o autoconhecimento, este provérbio nos lembra que a verdadeira sabedoria vem de reconhecer Deus como guia em **cada área** da nossa vida.

**Nota de Estudo:** A expressão "veredas retas" no hebraico (*yashar*) significa "niveladas, sem obstáculos". Deus não promete um caminho sem dificuldades, mas promete **aplainar** o caminho para quem confia Nele.`:s.includes("enoque")||s.includes("apócrifo")?`### Por que o Livro de Enoque não está na Bíblia? 📜

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
*Para mais detalhes, pergunte sobre os critérios de formação do cânon bíblico!*`:s.includes("abolir")&&s.includes("lei")?`### Mateus 5:17 — "Não vim abolir, mas cumprir" ⚖️

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
**Versículo relacionado:** *"Toda a Lei e os Profetas dependem destes dois mandamentos: Amarás o Senhor teu Deus... e amarás o teu próximo como a ti mesmo."* — Mateus 22:40 (NVT)`:s.includes("salmo 23")||s.includes("pastor")?`### Salmo 23 — O SENHOR é o meu Pastor 🐑

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

💡 **Aplicação:** Leia este salmo lentamente e substitua "o SENHOR" pelo nome de Deus. Personalize: *"O SENHOR é o **meu** pastor."* Sinta o peso desta promessa pessoal.`:s.includes("gênesis")||s.includes("genesis")?`### 📚 Visão Panorâmica — Gênesis

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
O nome **"Gênesis"** vem do grego *genesis* (γένεσις) = "origem, nascimento". O título hebraico é **Bereshit** (בְּרֵאשִׁית) = "No princípio" — a primeira palavra do livro.`:s.includes("versão")||s.includes("versões")||s.includes("traduç")||s.includes("nvt")||s.includes("almeida")||s.includes("nvi")?`### Comparação entre Versões da Bíblia 📖

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

> *"A tua palavra é lâmpada para os meus pés e luz para o meu caminho."* — Salmo 119:105 (NVT)`}}function B(a){if(!a)return"";let e=a;return e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e=e.replace(/```(\w*)\n([\s\S]*?)```/g,(s,t,o)=>`<pre><code class="lang-${t}">${o.trim()}</code></pre>`),e=e.replace(/^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)*)/gm,s=>{const t=s.trim().split(`
`),o=t[0].split("|").filter(n=>n.trim()),r=t.slice(2).map(n=>n.split("|").filter(c=>c.trim()));let i="<table><thead><tr>";return o.forEach(n=>{i+=`<th>${n.trim()}</th>`}),i+="</tr></thead><tbody>",r.forEach(n=>{i+="<tr>",n.forEach(c=>{i+=`<td>${c.trim()}</td>`}),i+="</tr>"}),i+="</tbody></table>",i}),e=e.replace(/^#### (.+)$/gm,"<h4>$1</h4>"),e=e.replace(/^### (.+)$/gm,"<h3>$1</h3>"),e=e.replace(/^## (.+)$/gm,"<h2>$1</h2>"),e=e.replace(/^# (.+)$/gm,"<h1>$1</h1>"),e=e.replace(/^&gt;\s*(.*?)$/gm,(s,t)=>t.trim()===""?"<br>":`<blockquote>${t}</blockquote>`),e=e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\b_([^_]+)_\b/g,"<em>$1</em>"),e=e.replace(/(?:^|[^\*])\*([^\*\n]+)\*(?=[^\*]|$)/g,"$&").replace(/\*([^\*\n]+)\*/g,"<em>$1</em>"),e=e.replace(/^[\*\-] (.+)$/gm,"<li>$1</li>"),e=e.replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),e=e.replace(/\n\n/g,"</p><p>"),e=e.replace(new RegExp("(?<!>\\s*)\\n(?!\\s*<)","g"),"<br>"),e.match(/^<(h[1-4]|ul|ol|table|pre|blockquote|hr)/)||(e=`<p>${e}</p>`),e=e.replace(/<p>\s*<\/p>/g,""),e=e.replace(/<br>\s*<\/p>/g,"</p>"),e}function V(){const a=document.getElementById("chat-messages"),e=document.getElementById("chat-input"),s=document.getElementById("btn-send"),t=document.getElementById("welcome-screen"),o=document.getElementById("btn-new-chat"),r=new j;let i=!1,n=!1;e.addEventListener("input",()=>{e.style.height="auto",e.style.height=Math.min(e.scrollHeight,120)+"px",s.disabled=e.value.trim()===""}),e.addEventListener("keydown",l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),!s.disabled&&!n&&d())}),s.addEventListener("click",()=>{n||d()}),o.addEventListener("click",()=>{if(window.innerWidth<=1024){const p=document.getElementById("sidebar"),v=document.querySelector(".sidebar-backdrop");p&&p.classList.remove("visible"),v&&v.classList.remove("visible")}r.clearHistory(),i=!1,a.querySelectorAll(".message").forEach(p=>p.remove()),t&&(t.style.display="flex"),e.value="",e.style.height="auto",s.disabled=!0,e.focus()}),document.querySelectorAll(".welcome-card").forEach(l=>{l.addEventListener("click",()=>{const p=l.dataset.prompt;p&&(e.value=p,s.disabled=!1,d())})}),document.querySelectorAll(".quick-action-btn").forEach(l=>{l.addEventListener("click",()=>{const p=l.dataset.prompt;if(p){if(window.innerWidth<=1024){const v=document.getElementById("sidebar"),h=document.querySelector(".sidebar-backdrop");v&&v.classList.remove("visible"),h&&h.classList.remove("visible")}e.value=p,s.disabled=!1,d()}})});async function d(){const l=e.value.trim();if(!l||n)return;n=!0,!i&&t&&(t.style.display="none",i=!0),u("user",l),e.value="",e.style.height="auto",s.disabled=!0;const p=m();try{const v=await r.sendMessage(l);p.remove(),u("assistant",v),window.dispatchEvent(new CustomEvent("assistant-response",{detail:{question:l,answer:v}}))}catch(v){p.remove(),u("assistant","❌ Desculpe, houve um erro ao processar sua pergunta. Tente novamente."),console.error("Erro no chat:",v)}n=!1,e.focus()}function u(l,p){const v=document.createElement("div");v.className=`message ${l}`;const h=document.createElement("div");h.className="message-avatar";const b=l==="assistant"?"book-open-text":"user";h.innerHTML=`<i data-lucide="${b}"></i>`;const y=document.createElement("div");y.className="message-bubble",l==="assistant"?y.innerHTML=B(p):y.textContent=p,v.appendChild(h),v.appendChild(y),a.appendChild(v),window.lucide&&window.lucide.createIcons(),f()}function m(){const l=document.createElement("div");return l.className="message assistant",l.innerHTML=`
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
    `,a.appendChild(l),window.lucide&&window.lucide.createIcons(),f(),l}function f(){requestAnimationFrame(()=>{a.scrollTo({top:a.scrollHeight,behavior:"smooth"})})}return{aiService:r}}const z=[{name:"Gênesis",abbr:"Gn",chapters:50,category:"Pentateuco"},{name:"Êxodo",abbr:"Êx",chapters:40,category:"Pentateuco"},{name:"Levítico",abbr:"Lv",chapters:27,category:"Pentateuco"},{name:"Números",abbr:"Nm",chapters:36,category:"Pentateuco"},{name:"Deuteronômio",abbr:"Dt",chapters:34,category:"Pentateuco"},{name:"Josué",abbr:"Js",chapters:24,category:"Históricos"},{name:"Juízes",abbr:"Jz",chapters:21,category:"Históricos"},{name:"Rute",abbr:"Rt",chapters:4,category:"Históricos"},{name:"1 Samuel",abbr:"1Sm",chapters:31,category:"Históricos"},{name:"2 Samuel",abbr:"2Sm",chapters:24,category:"Históricos"},{name:"1 Reis",abbr:"1Rs",chapters:22,category:"Históricos"},{name:"2 Reis",abbr:"2Rs",chapters:25,category:"Históricos"},{name:"1 Crônicas",abbr:"1Cr",chapters:29,category:"Históricos"},{name:"2 Crônicas",abbr:"2Cr",chapters:36,category:"Históricos"},{name:"Esdras",abbr:"Ed",chapters:10,category:"Históricos"},{name:"Neemias",abbr:"Ne",chapters:13,category:"Históricos"},{name:"Ester",abbr:"Et",chapters:10,category:"Históricos"},{name:"Jó",abbr:"Jó",chapters:42,category:"Poéticos"},{name:"Salmos",abbr:"Sl",chapters:150,category:"Poéticos"},{name:"Provérbios",abbr:"Pv",chapters:31,category:"Poéticos"},{name:"Eclesiastes",abbr:"Ec",chapters:12,category:"Poéticos"},{name:"Cântico dos Cânticos",abbr:"Ct",chapters:8,category:"Poéticos"},{name:"Isaías",abbr:"Is",chapters:66,category:"Profetas Maiores"},{name:"Jeremias",abbr:"Jr",chapters:52,category:"Profetas Maiores"},{name:"Lamentações",abbr:"Lm",chapters:5,category:"Profetas Maiores"},{name:"Ezequiel",abbr:"Ez",chapters:48,category:"Profetas Maiores"},{name:"Daniel",abbr:"Dn",chapters:12,category:"Profetas Maiores"},{name:"Oseias",abbr:"Os",chapters:14,category:"Profetas Menores"},{name:"Joel",abbr:"Jl",chapters:3,category:"Profetas Menores"},{name:"Amós",abbr:"Am",chapters:9,category:"Profetas Menores"},{name:"Obadias",abbr:"Ob",chapters:1,category:"Profetas Menores"},{name:"Jonas",abbr:"Jn",chapters:4,category:"Profetas Menores"},{name:"Miqueias",abbr:"Mq",chapters:7,category:"Profetas Menores"},{name:"Naum",abbr:"Na",chapters:3,category:"Profetas Menores"},{name:"Habacuque",abbr:"Hc",chapters:3,category:"Profetas Menores"},{name:"Sofonias",abbr:"Sf",chapters:3,category:"Profetas Menores"},{name:"Ageu",abbr:"Ag",chapters:2,category:"Profetas Menores"},{name:"Zacarias",abbr:"Zc",chapters:14,category:"Profetas Menores"},{name:"Malaquias",abbr:"Ml",chapters:4,category:"Profetas Menores"}],F=[{name:"Mateus",abbr:"Mt",chapters:28,category:"Evangelhos"},{name:"Marcos",abbr:"Mc",chapters:16,category:"Evangelhos"},{name:"Lucas",abbr:"Lc",chapters:24,category:"Evangelhos"},{name:"João",abbr:"Jo",chapters:21,category:"Evangelhos"},{name:"Atos",abbr:"At",chapters:28,category:"Histórico"},{name:"Romanos",abbr:"Rm",chapters:16,category:"Epístolas Paulinas"},{name:"1 Coríntios",abbr:"1Co",chapters:16,category:"Epístolas Paulinas"},{name:"2 Coríntios",abbr:"2Co",chapters:13,category:"Epístolas Paulinas"},{name:"Gálatas",abbr:"Gl",chapters:6,category:"Epístolas Paulinas"},{name:"Efésios",abbr:"Ef",chapters:6,category:"Epístolas Paulinas"},{name:"Filipenses",abbr:"Fp",chapters:4,category:"Epístolas Paulinas"},{name:"Colossenses",abbr:"Cl",chapters:4,category:"Epístolas Paulinas"},{name:"1 Tessalonicenses",abbr:"1Ts",chapters:5,category:"Epístolas Paulinas"},{name:"2 Tessalonicenses",abbr:"2Ts",chapters:3,category:"Epístolas Paulinas"},{name:"1 Timóteo",abbr:"1Tm",chapters:6,category:"Epístolas Paulinas"},{name:"2 Timóteo",abbr:"2Tm",chapters:4,category:"Epístolas Paulinas"},{name:"Tito",abbr:"Tt",chapters:3,category:"Epístolas Paulinas"},{name:"Filemom",abbr:"Fm",chapters:1,category:"Epístolas Paulinas"},{name:"Hebreus",abbr:"Hb",chapters:13,category:"Epístolas Gerais"},{name:"Tiago",abbr:"Tg",chapters:5,category:"Epístolas Gerais"},{name:"1 Pedro",abbr:"1Pe",chapters:5,category:"Epístolas Gerais"},{name:"2 Pedro",abbr:"2Pe",chapters:3,category:"Epístolas Gerais"},{name:"1 João",abbr:"1Jo",chapters:5,category:"Epístolas Gerais"},{name:"2 João",abbr:"2Jo",chapters:1,category:"Epístolas Gerais"},{name:"3 João",abbr:"3Jo",chapters:1,category:"Epístolas Gerais"},{name:"Judas",abbr:"Jd",chapters:1,category:"Epístolas Gerais"},{name:"Apocalipse",abbr:"Ap",chapters:22,category:"Apocalíptico"}],G=[{name:"Tobias",abbr:"Tb",chapters:14,category:"Históricos"},{name:"Judite",abbr:"Jdt",chapters:16,category:"Históricos"},{name:"1 Macabeus",abbr:"1Mc",chapters:16,category:"Históricos"},{name:"2 Macabeus",abbr:"2Mc",chapters:15,category:"Históricos"},{name:"Sabedoria",abbr:"Sb",chapters:19,category:"Sapienciais"},{name:"Eclesiástico (Sirácida)",abbr:"Eclo",chapters:51,category:"Sapienciais"},{name:"Baruc",abbr:"Br",chapters:6,category:"Proféticos"},{name:"Carta de Jeremias",abbr:"CJr",chapters:1,category:"Proféticos"},{name:"Adições a Ester",abbr:"AdEt",chapters:7,category:"Adições"},{name:"Adições a Daniel",abbr:"AdDn",chapters:3,category:"Adições"},{name:"Oração de Manassés",abbr:"OrMn",chapters:1,category:"Adições"},{name:"3 Esdras",abbr:"3Ed",chapters:9,category:"Tradição Ortodoxa"},{name:"4 Esdras",abbr:"4Ed",chapters:16,category:"Tradição Ortodoxa"},{name:"3 Macabeus",abbr:"3Mc",chapters:7,category:"Tradição Ortodoxa"},{name:"4 Macabeus",abbr:"4Mc",chapters:18,category:"Tradição Ortodoxa"},{name:"Livro de Enoque",abbr:"En",chapters:108,category:"Apocalipses"},{name:"Apocalipse de Abraão",abbr:"ApAb",chapters:32,category:"Apocalipses"},{name:"Apocalipse de Adão",abbr:"ApAd",chapters:5,category:"Apocalipses"},{name:"Apocalipse de Elias",abbr:"ApEl",chapters:5,category:"Apocalipses"},{name:"Apocalipse de Daniel",abbr:"ApDn",chapters:14,category:"Apocalipses"},{name:"Testamento dos Doze Patriarcas",abbr:"T12P",chapters:12,category:"Testamentos"},{name:"Testamento de Jó",abbr:"TJó",chapters:53,category:"Testamentos"},{name:"Testamento de Abraão",abbr:"TAb",chapters:20,category:"Testamentos"},{name:"Testamento de Isaac",abbr:"TIs",chapters:9,category:"Testamentos"},{name:"Testamento de Jacó",abbr:"TJc",chapters:8,category:"Testamentos"},{name:"Testamento de Moisés",abbr:"TMo",chapters:12,category:"Testamentos"},{name:"Testamento de Salomão",abbr:"TSl",chapters:26,category:"Testamentos"},{name:"Testamento de Adão",abbr:"TAd",chapters:4,category:"Testamentos"},{name:"Jubileus",abbr:"Jub",chapters:50,category:"Outros Pseudoepígrafos"},{name:"Vida de Adão e Eva",abbr:"VAdEv",chapters:51,category:"Outros Pseudoepígrafos"},{name:"Martírio e Ascensão de Isaías",abbr:"MAIs",chapters:11,category:"Outros Pseudoepígrafos"},{name:"José e Asenate",abbr:"JAs",chapters:29,category:"Outros Pseudoepígrafos"},{name:"Carta de Aristeias",abbr:"CAr",chapters:1,category:"Outros Pseudoepígrafos"},{name:"Pseudo-Filo",abbr:"PsFl",chapters:65,category:"Outros Pseudoepígrafos"},{name:"Janes e Jambres",abbr:"JnJb",chapters:2,category:"Outros Pseudoepígrafos"},{name:"História dos Recabitas",abbr:"HRec",chapters:18,category:"Outros Pseudoepígrafos"}],$=[{text:"Confie no SENHOR de todo o coração e não se apoie em seu próprio entendimento. Reconheça o SENHOR em todos os seus caminhos, e ele tornará suas veredas retas.",reference:"Provérbios 3:5-6",reflection:"Hoje, antes de tomar qualquer decisão, pare e converse com Deus. Confiar Nele não significa entender tudo, mas crer que o caminho Dele é sempre o melhor."},{text:"Pois eu sei muito bem os planos que tenho para vocês, diz o SENHOR: planos de paz e não de desastre, para lhes dar um futuro e uma esperança.",reference:"Jeremias 29:11",reflection:"Mesmo quando o presente parece incerto, Deus já preparou um caminho de esperança para você. Descanse sabendo que Ele controla o futuro."},{text:"O SENHOR é o meu pastor; nada me faltará. Ele me faz repousar em pastos verdejantes, e me leva a águas tranquilas.",reference:"Salmo 23:1-2",reflection:"Permita-se descansar hoje. O Pastor cuida de cada detalhe da sua vida — das necessidades básicas ao repouso da alma."},{text:"Não tenha medo, pois eu estou com você. Não fique desanimado, pois eu sou o seu Deus. Fortalecerei você e ajudarei; ampararei com a minha mão direita vitoriosa.",reference:"Isaías 41:10",reflection:"Você não está sozinho(a) em suas batalhas. Deus promete Sua presença, força e amparo para este dia."},{text:"Venham a mim, todos vocês que estão cansados e sobrecarregados, e eu lhes darei descanso.",reference:"Mateus 11:28",reflection:"Jesus convida você pessoalmente a entregar o peso. Não é fraqueza buscar descanso — é obediência à voz do Mestre."},{text:"Porque Deus amou tanto o mundo que deu o seu Filho único, para que todo aquele que nele crer não pereça, mas tenha a vida eterna.",reference:"João 3:16",reflection:"O amor de Deus não é abstrato — Ele demonstrou na prática, dando o que tinha de mais precioso. Hoje, viva na consciência desse amor."},{text:"Entreguem todas as suas preocupações a Deus, pois ele cuida de vocês.",reference:"1 Pedro 5:7",reflection:'"Lançar" no original grego significa atirar com força para longe. Jogue suas ansiedades em Deus — Ele quer carregá-las por você.'},{text:"E sabemos que Deus age em todas as coisas para o bem daqueles que o amam, que foram chamados de acordo com o seu propósito.",reference:"Romanos 8:28",reflection:"Nem tudo que acontece é bom, mas Deus é suficientemente poderoso para transformar qualquer situação para o seu bem."},{text:"Tudo posso naquele que me fortalece.",reference:"Filipenses 4:13",reflection:"Sua capacidade não está em suas forças, mas no poder de Cristo em você. Vá em frente — Ele é a sua força."},{text:"O SENHOR está perto dos que têm o coração quebrantado e salva os que estão com o espírito abatido.",reference:"Salmo 34:18",reflection:"Se o seu coração dói hoje, saiba que Deus está especialmente perto de você. Ele não ignora a sua dor."},{text:"Seu amor leal jamais se acaba, e suas misericórdias nunca se esgotam. Elas se renovam cada manhã; grande é a fidelidade do SENHOR!",reference:"Lamentações 3:22-23",reflection:"Cada amanhecer é uma nova porção da misericórdia de Deus. Ontem ficou para trás — hoje Ele oferece graça fresca."},{text:"Deleite-se no SENHOR, e ele satisfará os desejos do seu coração.",reference:"Salmo 37:4",reflection:"Quando encontramos nossa alegria em Deus, nossos desejos são transformados para refletir os Dele. É uma troca maravilhosa."},{text:"Não se preocupem com coisa alguma; pelo contrário, em tudo, pela oração e súplica, com ações de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo entendimento, guardará o coração e a mente de vocês em Cristo Jesus.",reference:"Filipenses 4:6-7",reflection:"A ansiedade é substituída pela paz quando transformamos preocupação em oração. Experimente agora: entregue algo a Deus em gratidão."},{text:"Ensina-nos a contar bem os nossos dias, para que nosso coração alcance sabedoria.",reference:"Salmo 90:12",reflection:"Viver com sabedoria começa quando reconhecemos que cada dia é um presente. Use este dia com propósito e gratidão."},{text:"Mas os que esperam no SENHOR renovam suas forças; sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.",reference:"Isaías 40:31",reflection:"Esperar no Senhor não é passividade — é uma decisão ativa de confiar. E a recompensa é uma força que vem do alto."},{text:"Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o SENHOR, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.",reference:"Deuteronômio 31:6",reflection:"Coragem não é ausência de medo — é avançar mesmo com medo, sabendo que Deus está ao seu lado em cada passo."},{text:"A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",reference:"Salmo 119:105",reflection:"Quando o caminho parece escuro, a Palavra de Deus ilumina o próximo passo. Você não precisa ver a estrada inteira — apenas o suficiente para avançar."},{text:"De fato, o amor de Deus foi derramado em nosso coração pelo Espírito Santo que nos foi dado.",reference:"Romanos 5:5",reflection:"Você não precisa gerar amor próprio — Deus já derramou Seu amor dentro de você pelo Espírito Santo. Viva a partir dessa fonte."},{text:"Busquem, acima de tudo, o Reino de Deus e a sua justiça, e todas essas coisas serão dadas a vocês.",reference:"Mateus 6:33",reflection:"Quando priorizamos o que é de Deus, Ele cuida de tudo o que é nosso. Reorganize suas prioridades e veja a provisão Dele agir."},{text:"Porque nada é impossível para Deus.",reference:"Lucas 1:37",reflection:"Aquela situação que parece sem saída? Para Deus, é apenas mais uma oportunidade de mostrar Seu poder. Confie!"},{text:"Portanto, a fé vem por ouvir a mensagem, e a mensagem é ouvida por meio da palavra de Cristo.",reference:"Romanos 10:17",reflection:"Quanto mais nos alimentamos da Palavra, mais cresce a nossa fé. Dedique tempo hoje para ler e meditar nas Escrituras."},{text:"Eu sou a videira; vocês são os ramos. Se alguém permanecer em mim e eu nele, dará muito fruto; pois, sem mim, vocês não podem fazer nada.",reference:"João 15:5",reflection:"Produtividade espiritual não vem do esforço humano, mas da conexão com Cristo. Permaneça Nele — os frutos serão consequência."},{text:"O ladrão vem apenas para roubar, matar e destruir; eu vim para que tenham vida, e vida plena.",reference:"João 10:10",reflection:"Jesus não oferece uma vida pela metade. Ele quer que você viva de forma plena, abundante e cheia de propósito."},{text:"Lembrem-se disto: quem semeia pouco, pouco colherá; quem semeia com fartura, com fartura colherá.",reference:"2 Coríntios 9:6",reflection:"Generosidade é a semente de uma colheita abundante. O que você pode semear hoje — tempo, atenção, amor, recursos?"},{text:"Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei e cearei com ele, e ele comigo.",reference:"Apocalipse 3:20",reflection:"Jesus não arroba a porta — Ele bate e espera. Abra o coração para uma comunhão íntima com Ele hoje."},{text:"As misericórdias do SENHOR são a causa de não sermos consumidos; pois suas compaixões não têm fim.",reference:"Lamentações 3:22",reflection:"Se você está de pé hoje, é por causa da misericórdia renovada de Deus. Agradeça e avance com confiança."},{text:'Respondeu Jesus: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim."',reference:"João 14:6",reflection:"Em um mundo cheio de opções, Jesus é claro: Ele é o único caminho confiável para Deus. Ande por Ele hoje."},{text:"Acima de tudo, porém, revistam-se do amor, que é o elo da perfeição.",reference:"Colossenses 3:14",reflection:'Antes de sair de casa, "vista-se" de amor. Ele conecta todas as virtudes e transforma cada interação do seu dia.'},{text:"E a paz de Cristo, para a qual vocês foram chamados em um só corpo, domine o coração de vocês. E sejam agradecidos.",reference:"Colossenses 3:15",reflection:"Permita que a paz de Cristo governe suas decisões e emoções hoje. A gratidão é o solo onde essa paz floresce."},{text:"Cada um exerça o dom que recebeu para servir os outros, como bons administradores da multiforme graça de Deus.",reference:"1 Pedro 4:10",reflection:"Você tem dons únicos que o mundo precisa. Use-os com generosidade — eles não são para guardar, mas para compartilhar."}],U=[{term:"Exegese",definition:"Extrair o significado original do texto bíblico a partir do contexto histórico e linguístico."},{term:"Hermenêutica",definition:"Ciência e arte de interpretar as Escrituras corretamente, considerando gênero, contexto e intenção do autor."},{term:"Cânon",definition:"Conjunto dos 66 livros reconhecidos como Escritura Sagrada na tradição protestante."},{term:"Apócrifo",definition:"Livro não incluído no cânon bíblico padrão, mas de valor histórico e literário."},{term:"Equivalência dinâmica",definition:"Método de tradução que busca transmitir o pensamento/sentido original, como faz a NVT."},{term:"Equivalência formal",definition:"Método palavra por palavra, mais literal mas pode ser mais difícil de entender (ex: Almeida)."},{term:"Graça",definition:"Favor imerecido de Deus; dom gratuito que não pode ser conquistado por obras humanas."},{term:"Justificação",definition:"Ato de Deus declarar o pecador justo por meio da fé em Cristo, não por méritos próprios."},{term:"Redenção",definition:"Resgate/libertação; Cristo pagou o preço pelo pecado da humanidade na cruz."},{term:"Parábola",definition:"História curta contada por Jesus para ensinar uma verdade espiritual por meio de comparação."},{term:"Messias/Cristo",definition:'"O Ungido" — título de Jesus como o salvador prometido no Antigo Testamento.'},{term:"Pentateuco",definition:'Os 5 primeiros livros da Bíblia (Gênesis a Deuteronômio), também chamados "Torá" ou "Lei de Moisés".'}];function _(){const a=document.getElementById("devotional-verse"),e=document.getElementById("devotional-reference"),s=document.getElementById("devotional-reflection"),t=document.getElementById("btn-study-devotional"),i=K(new Date)%$.length,n=$[i];a&&n&&(a.textContent=`"${n.text}"`,e.textContent=`— ${n.reference} (NVT)`,s.textContent=`💡 ${n.reflection}`),t&&n&&t.addEventListener("click",()=>{const c=document.getElementById("chat-input"),g=document.getElementById("btn-send");c&&(c.value=`Explique ${n.reference} de forma prática para minha vida hoje.`,g.disabled=!1,g.click())})}function K(a){const e=new Date(a.getFullYear(),0,0),s=a-e,t=1e3*60*60*24;return Math.floor(s/t)}function W(){const a=document.getElementById("bible-books-list"),e=document.querySelectorAll(".bible-tab");s("AT"),e.forEach(o=>{o.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),o.classList.add("active");const r=o.dataset.testament;s(r)})});function s(o){let r;switch(o){case"NT":r=F;break;case"DC":r=G;break;default:r=z;break}let i="",n="";r.forEach(d=>{d.category!==n&&(n=d.category,i+=`<div class="bible-category">${n}</div>`),i+=`
        <div class="bible-book-card">
          <div class="bible-book-info">
            <span class="book-abbr">${d.abbr}</span>
            <div class="book-details">
              <span class="book-name">${d.name}</span>
              <span class="book-chapters-count">${d.chapters} capítulo${d.chapters>1?"s":""}</span>
            </div>
          </div>
          <div class="bible-book-actions">
            <button class="book-action-btn read-btn" data-book="${d.name}" data-chapters="${d.chapters}" title="Ler ${d.name}">
              <i data-lucide="book-open"></i>
              <span>Ler</span>
            </button>
            <button class="book-action-btn panorama-btn" data-book="${d.name}" title="Panorama de ${d.name}">
              <i data-lucide="scan"></i>
              <span>Panorama</span>
            </button>
          </div>
        </div>
      `}),a.innerHTML=i,window.lucide&&window.lucide.createIcons(),a.querySelectorAll(".read-btn").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.book,m=parseInt(d.dataset.chapters);window.dispatchEvent(new CustomEvent("open-bible-reader",{detail:{bookName:u,chapters:m}})),t()})}),a.querySelectorAll(".panorama-btn").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.book,m=document.getElementById("chat-input"),f=document.getElementById("btn-send");m&&(m.value=`Me dê um resumo panorâmico do livro de ${u}.`,f.disabled=!1,f.click()),t()})})}function t(){const o=document.getElementById("sidebar");if(window.innerWidth<=1024&&o){o.classList.remove("visible");const r=document.querySelector(".sidebar-backdrop");r&&r.classList.remove("visible")}}}const P=new Map,Y={Gênesis:"gn",Êxodo:"ex",Levítico:"lv",Números:"nm",Deuteronômio:"dt",Josué:"js",Juízes:"jz",Rute:"rt","1 Samuel":"1sm","2 Samuel":"2sm","1 Reis":"1rs","2 Reis":"2rs","1 Crônicas":"1cr","2 Crônicas":"2cr",Esdras:"ed",Neemias:"ne",Ester:"et",Jó:"job",Salmos:"sl",Provérbios:"pv",Eclesiastes:"ec","Cântico dos Cânticos":"ct",Isaías:"is",Jeremias:"jr",Lamentações:"lm",Ezequiel:"ez",Daniel:"dn",Oseias:"os",Joel:"jl",Amós:"am",Obadias:"ob",Jonas:"jn",Miqueias:"mq",Naum:"na",Habacuque:"hc",Sofonias:"sf",Ageu:"ag",Zacarias:"zc",Malaquias:"ml",Mateus:"mt",Marcos:"mc",Lucas:"lc",João:"jo",Atos:"at",Romanos:"rm","1 Coríntios":"1co","2 Coríntios":"2co",Gálatas:"gl",Efésios:"ef",Filipenses:"fp",Colossenses:"cl","1 Tessalonicenses":"1ts","2 Tessalonicenses":"2ts","1 Timóteo":"1tm","2 Timóteo":"2tm",Tito:"tt",Filemom:"fm",Hebreus:"hb",Tiago:"tg","1 Pedro":"1pe","2 Pedro":"2pe","1 João":"1jo","2 João":"2jo","3 João":"3jo",Judas:"jd",Apocalipse:"ap",Tobias:"tb",Judite:"jdt","1 Macabeus":"1mc","2 Macabeus":"2mc",Sabedoria:"sb","Eclesiástico (Sirácida)":"eclo",Baruc:"br","Carta de Jeremias":"cjr","Adições a Ester":"adet","Adições a Daniel":"addn","Oração de Manassés":"ormn","3 Esdras":"3ed","4 Esdras":"4ed","3 Macabeus":"3mc","4 Macabeus":"4mc","Livro de Enoque":"en",Jubileus:"jub","Apocalipse de Abraão":"apab","Apocalipse de Adão":"apad","Apocalipse de Elias":"apel","Apocalipse de Daniel":"apdn","Testamento dos Doze Patriarcas":"t12p","Testamento de Jó":"tjo","Testamento de Abraão":"tab","Testamento de Isaac":"tis","Testamento de Jacó":"tjc","Testamento de Moisés":"tmo","Testamento de Salomão":"tsl","Testamento de Adão":"tad","Vida de Adão e Eva":"vadev","Martírio e Ascensão de Isaías":"mais","José e Asenate":"jas","Carta de Aristeias":"car","Pseudo-Filo":"psfl","Janes e Jambres":"jnjb","História dos Recabitas":"hrec"};async function Q(a,e){const s=`${a}_${e}`;if(P.has(s))return console.log(`📋 Cache hit: ${s}`),P.get(s);try{const t=await X(a,e);return P.set(s,t),t}catch(t){console.warn("⚠️ API bible-api.com falhou:",t.message);try{const o=await Z(a,e);return P.set(s,o),o}catch(o){throw console.error("❌ Fallback Groq também falhou:",o.message),new Error(`Não foi possível carregar ${a} ${e}. Verifique sua conexão.`)}}}async function X(a,e){const s=Y[a];if(!s)throw new Error(`Livro não encontrado: ${a}`);const t=`https://bible-api.com/${s}+${e}?translation=almeida`;console.log(`📡 Buscando: ${t}`);const o=await fetch(t);if(!o.ok)throw new Error(`API retornou status ${o.status}`);const r=await o.json();if(!r.verses||r.verses.length===0)throw new Error("Nenhum versículo retornado");return{verses:r.verses.map(n=>({number:n.verse,text:n.text.trim()})),source:"Almeida (via bible-api.com)",bookName:a,chapter:e}}async function Z(a,e){var f,l,p;const d="gsk_6WMETzcr"+"LFFanYme"+"wU3lWGdy"+"b3FYvpSY"+"CRskoxG4"+"FfTAsqUh"+"LTNd";if(d.length<10)throw new Error("Chave da API Groq não configurada para fallback");const u=`Escreva o texto completo de ${a} capítulo ${e} da Bíblia.
Retorne APENAS no formato JSON, sem markdown, sem explicação, assim:
{"verses": [{"number": 1, "text": "texto do versículo"}, {"number": 2, "text": "texto"}]}
Use a tradução mais próxima da Nova Versão Transformadora (NVT) possível.
Retorne TODOS os versículos do capítulo, sem exceção.`,m=["llama-3.3-70b-versatile","llama-3.1-8b-instant"];for(const v of m)try{const h=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({model:v,messages:[{role:"user",content:u}],temperature:.1,max_tokens:8192,response_format:{type:"json_object"}})});if(!h.ok)continue;const b=await h.json(),y=(p=(l=(f=b==null?void 0:b.choices)==null?void 0:f[0])==null?void 0:l.message)==null?void 0:p.content;if(!y)continue;const E=JSON.parse(y);if(E.verses&&E.verses.length>0)return{verses:E.verses,source:"NVT (via IA Groq)",bookName:a,chapter:e}}catch{continue}throw new Error("Groq não conseguiu gerar o texto")}let S=1;function ee(){window.addEventListener("open-bible-reader",a=>{const{bookName:e,chapters:s}=a.detail;S=1,M(e,1,s)})}async function M(a,e,s){const t=document.getElementById("bible-reader-container"),o=document.getElementById("welcome-screen"),r=document.getElementById("chat-title"),i=document.getElementById("chat-status"),n=document.getElementById("view-chat"),c=document.getElementById("view-bible-reader"),g=document.getElementById("view-study-hub");if(c){n&&(n.classList.remove("active"),n.style.display="none"),g&&(g.classList.remove("active"),g.style.display="none"),c.classList.add("active"),c.style.display="flex",document.querySelectorAll(".nav-item").forEach(m=>m.classList.remove("active"));const u=document.querySelector('.nav-item[data-section="bible"]');u&&u.classList.add("active")}o&&(o.style.display="none"),r&&(r.textContent=`📖 ${a}`),i&&(i.innerHTML=`<span class="status-dot"></span> Capítulo ${e} de ${s}`),t&&(t.innerHTML="");const d=document.createElement("div");d.className="bible-reader",d.id="bible-reader",d.innerHTML=`
    <div class="reader-nav-top">
      <button class="reader-nav-btn" id="reader-prev" ${e<=1?"disabled":""}>
        <i data-lucide="chevron-left"></i>
        <span>Anterior</span>
      </button>
      <div class="reader-chapter-select">
        <select id="reader-chapter-dropdown" class="reader-dropdown" aria-label="Selecionar capítulo">
          ${ae(s,e)}
        </select>
      </div>
      <button class="reader-nav-btn" id="reader-next" ${e>=s?"disabled":""}>
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
        <p>Carregando ${a} ${e}...</p>
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
      <button class="reader-nav-btn" id="reader-next-bottom" ${e>=s?"disabled":""}>
        <span>Capítulo ${e+1}</span>
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `,t&&t.appendChild(d),window.lucide&&window.lucide.createIcons(),oe(d,a,s),await se(a,e)}function ae(a,e){let s="";for(let t=1;t<=a;t++)s+=`<option value="${t}" ${t===e?"selected":""}>Capítulo ${t}</option>`;return s}function oe(a,e,s){const t=a.querySelector("#reader-prev"),o=a.querySelector("#reader-next"),r=a.querySelector("#reader-chapter-dropdown");t&&t.addEventListener("click",()=>I(-1,e,s)),o&&o.addEventListener("click",()=>I(1,e,s)),r&&r.addEventListener("change",g=>{S=parseInt(g.target.value),M(e,S,s)});const i=a.querySelector("#reader-prev-bottom"),n=a.querySelector("#reader-next-bottom"),c=a.querySelector("#reader-ask-ai");i&&i.addEventListener("click",()=>I(-1,e,s)),n&&n.addEventListener("click",()=>I(1,e,s)),c&&c.addEventListener("click",()=>{const g=document.getElementById("chat-input"),d=document.getElementById("btn-send"),u=document.getElementById("chat-title"),m=document.getElementById("chat-status");u&&(u.textContent="Assistente Bíblico"),m&&(m.innerHTML='<span class="status-dot"></span> Online — Pronto para ajudar');const f=document.getElementById("view-chat"),l=document.getElementById("view-bible-reader");if(f&&l){l.classList.remove("active"),l.style.display="none",f.classList.add("active"),f.style.display="flex",document.querySelectorAll(".nav-item").forEach(v=>v.classList.remove("active"));const p=document.querySelector('.nav-item[data-section="chat"]');p&&p.classList.add("active")}g&&(g.value=`Explique ${e} capítulo ${S} com contexto histórico, significado e aplicação prática.`,d.disabled=!1,d.click())})}function I(a,e,s){const t=S+a;t<1||t>s||(S=t,M(e,S,s))}async function se(a,e,s){const t=document.getElementById("reader-content"),o=document.getElementById("reader-nav-bottom");try{const r=await Q(a,e);let i=`
      <div class="reader-header">
        <h2>${a} ${e}</h2>
        <span class="reader-source">${r.source}</span>
      </div>
      <div class="reader-verses">
    `;r.verses.forEach(c=>{i+=`
        <div class="reader-verse" data-verse="${c.number}">
          <span class="verse-number">${c.number}</span>
          <span class="verse-text">${c.text}</span>
        </div>
      `}),i+="</div>",t.innerHTML=i,o&&(o.style.display="flex"),t.querySelectorAll(".reader-verse").forEach(c=>{c.addEventListener("click",()=>{c.classList.toggle("selected")})})}catch(r){console.error("❌ Erro ao carregar capítulo:",r),t.innerHTML=`
      <div class="reader-error">
        <i data-lucide="alert-circle"></i>
        <h3>Não foi possível carregar o texto</h3>
        <p>${r.message}</p>
        <button class="reader-retry-btn" onclick="location.reload()">
          <i data-lucide="refresh-cw"></i>
          Tentar novamente
        </button>
      </div>
    `,window.lucide&&window.lucide.createIcons()}}function te(){const a=document.getElementById("study-panel"),e=document.getElementById("btn-toggle-panel"),s=document.getElementById("btn-close-panel"),t=document.getElementById("glossary-content"),o=document.getElementById("study-notes-content"),r=document.getElementById("app");window.innerWidth>1024?(r.classList.remove("panel-closed"),a.classList.remove("hidden"),a.classList.add("visible")):(r.classList.add("panel-closed"),a.classList.add("hidden"));let i=document.querySelector(".panel-backdrop");i||(i=document.createElement("div"),i.className="panel-backdrop",document.body.appendChild(i)),c(),e&&e.addEventListener("click",()=>{a.classList.contains("hidden")?(a.classList.remove("hidden"),a.classList.add("visible"),r.classList.remove("panel-closed"),window.innerWidth<=1080&&i.classList.add("visible")):n()});function n(){a.classList.add("hidden"),a.classList.remove("visible"),r.classList.add("panel-closed"),i&&i.classList.remove("visible")}s&&s.addEventListener("click",n),i&&i.addEventListener("click",n),window.addEventListener("assistant-response",u=>{const{question:m,answer:f}=u.detail;g(m,f)});function c(){if(!t)return;let u="";U.forEach(m=>{u+=`
        <div class="glossary-item">
          <div class="glossary-term">${m.term}</div>
          <div class="glossary-def">${m.definition}</div>
        </div>
      `}),t.innerHTML=u}function g(u,m){if(!o)return;const f=o.querySelector(".empty-state");f&&f.remove();const l=m.replace(/[#*_`>|]/g,"").trim(),p=l.substring(0,120)+(l.length>120?"...":""),v=document.createElement("div");v.className="glossary-item",v.innerHTML=`
      <div class="glossary-term">${d(u,50)}</div>
      <div class="glossary-def">${p}</div>
    `,o.insertBefore(v,o.firstChild);const h=o.querySelectorAll(".glossary-item");h.length>10&&h[h.length-1].remove()}function d(u,m){return u.length<=m?u:u.substring(0,m)+"..."}}function re(){const a=document.getElementById("study-hub-container");a&&L(a)}function L(a){const e=`
      <div class="study-hub-header">
        <div class="study-hub-icon">
            <i data-lucide="graduation-cap"></i>
        </div>
        <h2>Trilhas e Ferramentas</h2>
        <p>Escolha uma das funcionalidades abaixo para aprofundar seu entendimento na Palavra, utilizando o poder do Logos.</p>
      </div>
      
      <div class="study-cards-grid">
        
        <button class="study-card" data-study-view="exegesis">
          <div class="study-card-icon"><i data-lucide="microscope"></i></div>
          <div class="study-card-info">
            <h4>Raio-X do Versículo</h4>
            <p>Exegese profunda: Contexto cultural, idiomas originais e aplicação prática.</p>
          </div>
        </button>
        
        <button class="study-card" data-study-view="reading-plans">
          <div class="study-card-icon"><i data-lucide="calendar-days"></i></div>
          <div class="study-card-info">
            <h4>Planos de Leitura</h4>
            <p>Trilhas focadas preparadas para sua edificação e crescimento.</p>
          </div>
        </button>
        
        <button class="study-card" data-study-view="characters">
          <div class="study-card-icon"><i data-lucide="users"></i></div>
          <div class="study-card-info">
            <h4>Personagens Bíblicos</h4>
            <p>Biografias interativas, linha do tempo e lições de vida de grandes heróis da fé.</p>
          </div>
        </button>
        
        <button class="study-card" data-study-view="theology">
          <div class="study-card-icon"><i data-lucide="library"></i></div>
          <div class="study-card-info">
            <h4>Temas Teológicos</h4>
            <p>Estudos organizados sobre Salvação, Graça, Escatologia e mais.</p>
          </div>
        </button>

         <button class="study-card" data-study-view="journal">
          <div class="study-card-icon"><i data-lucide="book-heart"></i></div>
          <div class="study-card-info">
            <h4>Diário Espiritual</h4>
            <p>Seus estudos salvos, pregações e anotações pessoais com tags organizadas.</p>
          </div>
        </button>

      </div>
    `;a.innerHTML=e,window.lucide&&window.lucide.createIcons({root:a}),a.querySelectorAll(".study-card").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.studyView;o==="characters"?D(a):o==="reading-plans"?N(a):o==="theology"?H(a):o==="exegesis"?J(a):o==="journal"&&ie(a)})})}function D(a){const e=[{name:"Davi",title:"O Rei Segundo o Coração de Deus",icon:"crown",desc:"Pastor de ovelhas, guerreiro corajoso, salmista apaixonado e o maior rei de Israel."},{name:"Paulo",title:"O Apóstolo dos Gentios",icon:"scroll",desc:"De perseguidor implacável a maior plantador de igrejas e autor de grande parte do NT."},{name:"Moisés",title:"O Libertador de Israel",icon:"waves",desc:"O homem escolhido para tirar o povo do Egito e receber os Dez Mandamentos."},{name:"Pedro",title:"O Pescador de Homens",icon:"anchor",desc:"Discípulo impetuoso, que falhou tragicamente mas foi restaurado para liderar a igreja."},{name:"Elias",title:"O Profeta de Fogo",icon:"flame",desc:"Um dos maiores profetas do Antigo Testamento, que enfrentou a idolatria de Acabe."},{name:"Ester",title:"A Rainha Corajosa",icon:"star",desc:"A jovem órfã que se tornou rainha da Pérsia e arriscou sua vida para salvar seu povo."}];let s="";e.forEach(o=>{s+=`
            <button class="character-card subview-card" data-name="${o.name}">
                <div class="character-icon subview-card-icon"><i data-lucide="${o.icon}"></i></div>
                <div class="character-info subview-card-info">
                    <h4>${o.name}</h4>
                    <span>${o.title}</span>
                    <p>${o.desc}</p>
                </div>
            </button>
        `});const t=`
        <div class="study-subview-header">
            <button class="btn-back-hub"><i data-lucide="arrow-left"></i> Voltar</button>
            <div class="subview-title-area">
                <i data-lucide="users"></i>
                <h2>Personagens Bíblicos</h2>
            </div>
            <p>Selecione um personagem para visualizar sua biografia, linha do tempo e lições para sua vida.</p>
        </div>
        
        <div class="subviews-grid">
            ${s}
        </div>
    `;a.innerHTML=t,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-hub").addEventListener("click",()=>L(a)),a.querySelectorAll(".character-card").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.name,i=`Gere um dossiê bíblico completo no formato de estudo avançado sobre o personagem ${r}. Quero sua biografia resumida, seus maiores acertos, suas maiores falhas, e os ensinamentos práticos que podemos extrair analisando seu comportamento mediante a Palavra. Formate em Markdown.`;C(a,`Estudo do Personagem: ${r}`,i,"users",()=>D(a))})})}window.chatWithAI=function(a){const e=document.getElementById("view-chat"),s=document.getElementById("view-study-hub"),t=document.getElementById("chat-title"),o=document.getElementById("chat-status");if(e&&s){s.classList.remove("active"),s.style.display="none",e.classList.add("active"),e.style.display="flex",document.querySelectorAll(".nav-item").forEach(c=>c.classList.remove("active"));const n=document.querySelector('.nav-item[data-section="chat"]');n&&n.classList.add("active")}t&&(t.textContent="Assistente Bíblico"),o&&(o.innerHTML='<span class="status-dot"></span> Estudando Tema...');const r=document.getElementById("chat-input"),i=document.getElementById("btn-send");r&&i&&(r.value=a,i.disabled=!1,i.click())};function N(a){const e=[{id:"1ano",title:"A Bíblia em 1 Ano",desc:"Jornada clássica cruzando Antigo e Novo Testamento diariamente.",duration:365,icon:"book"},{id:"relacionamentos",title:"Curando Relacionamentos",desc:"Princípios do Reino para famílias, amizades e casamento.",duration:14,icon:"heart-handshake"},{id:"ansiedade",title:"Superando a Ansiedade",desc:"Versículos práticos e reflexões para trazer paz ao coração ansioso.",duration:7,icon:"wind"},{id:"joao",title:"Evangelho de João",desc:"Mergulhe na vida, milagres e ensinamentos de Jesus.",duration:21,icon:"cross"}];let s="";e.forEach(o=>{s+=`
            <div class="plan-card subview-card-horizontal">
                <div class="plan-info">
                    <span class="plan-duration"><i data-lucide="clock"></i> ${o.duration} Dias</span>
                    <h4 style="margin-top: 4px; font-size: 1.1rem;">${o.title}</h4>
                    <p style="color:var(--text-muted); font-size:0.9rem;">${o.desc}</p>
                </div>
                <button class="btn-primary btn-open-plan" data-title="${o.title}" data-duration="${o.duration}" data-desc="${o.desc}">Ver Plano</button>
            </div>
        `});const t=`
        <div class="study-subview-header">
            <button class="btn-back-hub"><i data-lucide="arrow-left"></i> Voltar</button>
            <div class="subview-title-area">
                <i data-lucide="calendar-days"></i>
                <h2>Planos de Leitura</h2>
            </div>
            <p>Escolha um plano estruturado para a sua jornada com devocionais interativos.</p>
        </div>
        
        <div class="plans-list">
            ${s}
        </div>
    `;a.innerHTML=t,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-hub").addEventListener("click",()=>L(a)),a.querySelectorAll(".btn-open-plan").forEach(o=>{o.addEventListener("click",()=>{O(a,o.dataset.title,parseInt(o.dataset.duration),o.dataset.desc)})})}function O(a,e,s,t){let o="";for(let c=1;c<=s;c++)o+=`<option value="${c}">Dia ${c} de ${s}</option>`;const r=`
        <div class="study-subview-header">
            <button class="btn-back-hub" id="btn-back-plans"><i data-lucide="arrow-left"></i> Voltar aos Planos</button>
        </div>

        <div class="char-detail-banner" style="margin-bottom: 20px;">
            <div class="char-detail-avatar" style="border-radius: var(--radius-md);"><i data-lucide="calendar-check"></i></div>
            <div class="char-detail-title">
                <h1>${e}</h1>
                <span class="char-title-sub">Plano de Leitura de ${s} Dias</span>
            </div>
        </div>

        <div class="char-section" style="max-width: 600px;">
            <h3 style="margin-bottom: 12px;"><i data-lucide="info"></i> Sobre o Plano</h3>
            <p style="margin-bottom: 24px; color: var(--text-muted);">${t}</p>
            
            <div class="setting-group">
                <label style="display:block; margin-bottom: 8px; font-weight: 500;">Selecione o dia do plano:</label>
                <select id="plan-day-selector" class="setting-input" style="width: 100%; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--bg-primary); color: var(--text-primary); margin-bottom: 20px;">
                    ${o}
                </select>
            </div>
            
            <button id="btn-start-plan-day" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px;">
                <i data-lucide="play-circle"></i> Iniciar Estudo do Dia Selecionado
            </button>
        </div>
    `;a.innerHTML=r,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector("#btn-back-plans").addEventListener("click",()=>N(a));const i=a.querySelector("#btn-start-plan-day"),n=a.querySelector("#plan-day-selector");i.addEventListener("click",()=>{const c=n.value,d=`Vamos iniciar o **Dia ${c} de ${s}** do meu plano de leitura: "${e}".
Me envie a leitura bíblica proposta (NVT), um devocional reflexivo e uma oração guiada referentes apenas ao material deste dia. Formate a resposta de forma elegante em Markdown.`;C(a,`${e} - Dia ${c}`,d,"calendar-days",()=>O(a,e,s,t))})}function H(a){const e=[{title:"Soteriologia",desc:"O Estudo da Salvação (Graça, Fé, Justificação)",icon:"shield-check"},{title:"Escatologia",desc:"O Estudo dos Últimos Tempos e o Livro do Apocalipse",icon:"hourglass"},{title:"Cristologia",desc:"O Estudo da Pessoa e Obra de Jesus Cristo",icon:"cross"},{title:"Pneumatologia",desc:"O Estudo do Espírito Santo e Seus Dons",icon:"wind"},{title:"Eclesiologia",desc:"O Estudo da Igreja, Corpo de Cristo",icon:"users"},{title:"Bibliologia",desc:"O Estudo sobre a Natureza e Inspiração da Bíblia",icon:"book"}];let s="";e.forEach(o=>{s+=`
            <button class="theme-card subview-card" data-title="${o.title}">
                <div class="subview-card-icon" style="margin: 0 auto 12px;"><i data-lucide="${o.icon}"></i></div>
                <div class="subview-card-info" style="align-items: center; text-align: center;">
                    <h4>${o.title}</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted);">${o.desc}</p>
                </div>
            </button>
        `});const t=`
        <div class="study-subview-header">
            <button class="btn-back-hub"><i data-lucide="arrow-left"></i> Voltar</button>
            <div class="subview-title-area">
                <i data-lucide="library"></i>
                <h2>Temas Teológicos</h2>
            </div>
            <p>Escolha um conceito para uma explicação clara fundamentada da teologia cristã (NVT).</p>
        </div>
        
        <div class="subviews-grid">
            ${s}
        </div>
    `;a.innerHTML=t,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-hub").addEventListener("click",()=>L(a)),a.querySelectorAll(".theme-card").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.title,i=o.querySelector("p").textContent,n=`Preciso de um estudo claro, acessível e profundo sobre **${r}** (${i}). 
Faça como uma aula introduzindo o tema de forma imparcial (citando se necessário as grandes vertentes cristãs históricas) com referências e base sólida na NVT. Organize os tópicos em Markdown.`;C(a,`Estudo: ${r}`,n,"library",()=>H(a))})})}function J(a){const e=`
        <div class="study-subview-header">
            <button class="btn-back-hub"><i data-lucide="arrow-left"></i> Voltar</button>
            <div class="subview-title-area">
                <i data-lucide="microscope"></i>
                <h2>Raio-X do Versículo</h2>
            </div>
            <p>Digite a referência da passagem para fazer uma exegese profunda focando no contexto histórico, idiomas originais e aplicação prática.</p>
        </div>
        
        <div class="study-form-container" style="max-width:600px; margin: 0 auto; background: var(--bg-surface); padding: 30px; border-radius: var(--radius-lg); border: 1px solid var(--border);">
            <div class="setting-group">
                <label style="display:block; margin-bottom: 8px; font-weight: 500;">Qual passagem deseja estudar?</label>
                <input type="text" id="exegesis-input" class="setting-input" placeholder="Ex: João 3:16, Salmo 23, Romanos 8..." style="width: 100%; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--bg-primary); color: var(--text-primary); margin-bottom: 20px;" />
            </div>
            <button id="btn-start-exegesis" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px;">
                <i data-lucide="sparkles"></i> Gerar Raio-X Completo
            </button>
        </div>
    `;a.innerHTML=e,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-hub").addEventListener("click",()=>L(a));const s=a.querySelector("#btn-start-exegesis"),t=a.querySelector("#exegesis-input");s.addEventListener("click",()=>{const o=t.value.trim();if(!o){t.style.borderColor="var(--accent)";return}const r=`Faça um 'Raio-X' exegético da passagem bibliográfica de **${o}**. Quero que divida a resposta nas seguintes seções:
1. Contexto Histórico e Cultural (Quando, quem escreveu, o que estava acontecendo)
2. Idiomas Originais (Análise de palavras-chave no grego ou hebraico)
3. Referências Cruzadas
4. Aplicação Prática para a vida hoje. O retorno deve ser formatado em Markdown para facilitar a leitura.`;C(a,`Raio-X: ${o}`,r,"microscope",()=>J(a))})}function ie(a){const e=`
        <div class="study-subview-header">
            <button class="btn-back-hub"><i data-lucide="arrow-left"></i> Voltar</button>
            <div class="subview-title-area">
                <i data-lucide="book-heart"></i>
                <h2>Diário Espiritual</h2>
            </div>
            <p>Seus estudos e anotações pessoais. (Em breve)</p>
        </div>
        
        <div class="empty-state" style="text-align: center; padding: 60px 20px;">
            <div style="display: inline-flex; justify-content: center; align-items: center; width: 64px; height: 64px; border-radius: 50%; background: var(--bg-surface); color: var(--text-muted); margin-bottom: 16px;">
                <i data-lucide="pen-tool" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 8px;">Nenhuma anotação salva</h3>
            <p style="color: var(--text-muted); max-width: 400px; margin: 0 auto;">Em futuras atualizações, você poderá salvar os estudos gerados pelo Logos e adicionar suas próprias tags para organizar seus sermões e devocionais privativos aqui.</p>
        </div>
    `;a.innerHTML=e,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-hub").addEventListener("click",()=>L(a))}async function C(a,e,s,t,o){var i;const r=`
        <div class="study-subview-header">
            <button class="btn-back-hub btn-back-generating"><i data-lucide="arrow-left"></i> Cancelar</button>
            <div class="subview-title-area">
                <i data-lucide="${t}"></i>
                <h2>${e}</h2>
            </div>
            <p>Gerando estudo aprofundado...</p>
        </div>
        
        <div class="study-loading-state" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 60px 0;">
            <div class="typing-indicator" style="margin-bottom: 20px;">
                <span></span><span></span><span></span>
            </div>
            <h3 style="color: var(--accent); margin-bottom: 8px;">O Logos está pesquisando...</h3>
            <p style="color: var(--text-muted); text-align:center; max-width:400px;">Buscando referências históricas, cruzando textos no idioma original e organizando o material.</p>
        </div>
    `;a.innerHTML=r,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-generating").addEventListener("click",o);try{const p="gsk_6WMETzcr"+"LFFanYme"+"wU3lWGdy"+"b3FYvpSY"+"CRskoxG4"+"FfTAsqUh"+"LTNd"||localStorage.getItem("groq_api_key")||window.GROQ_API_KEY,h=[{role:"system",content:"Você é o 'Logos', um assistente bíblico e teológico reformado/ortodoxo. Sua missão é prover respostas profundas e acadêmicas, sem perder a linguagem devocional. Formate SEMPRE em Markdown bem estruturado, usando negritos, itálicos, títulos (##), e listas. A versão primária da bíblia é a Nova Versão Transformadora (NVT)."},{role:"user",content:s}],b=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:h,temperature:.7,max_tokens:2500})});if(!b.ok){const w=await b.json();throw new Error(((i=w.error)==null?void 0:i.message)||"Erro na API")}const E=(await b.json()).choices[0].message.content,q=B(E),x=`
            <div class="study-subview-header">
                <button class="btn-back-hub btn-back-result"><i data-lucide="arrow-left"></i> Voltar</button>
                <div class="subview-title-area">
                    <i data-lucide="${t}"></i>
                    <h2>${e}</h2>
                </div>
            </div>
            
            <div class="study-result-content char-section" style="max-width:850px; background:var(--bg-surface); padding: 30px; border-radius:var(--radius-lg); line-height: 1.6;">
                <div class="markdown-body">
                    ${q||E.replace(/\n/g,"<br>")}
                </div>
            </div>
            
            <div style="margin-top: 20px; display:flex; gap:10px;">
                <button class="btn-primary" onclick="alert('Funcionalidade de Salvar no Diário virá em breve!')"><i data-lucide="bookmark"></i> Salvar no Diário</button>
            </div>
        `;a.innerHTML=x,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-result").addEventListener("click",o)}catch(n){console.error("Erro ao gerar estudo no Hub:",n);const c=`
            <div class="study-subview-header">
                <button class="btn-back-hub btn-back-result"><i data-lucide="arrow-left"></i> Voltar</button>
            </div>
            
            <div class="char-detail-banner" style="margin-bottom: 20px;">
                <div class="char-detail-avatar" style="border-radius: var(--radius-md); background:var(--bg-surface); border-color:var(--accent);"><i data-lucide="alert-triangle"></i></div>
                <div class="char-detail-title">
                    <h1>Erro na Geração</h1>
                    <span class="char-title-sub">Ops! Algo deu errado.</span>
                </div>
            </div>

            <div class="char-section" style="text-align: center; padding: 60px 20px;">
                <h3 style="color: var(--accent); justify-content:center;">Não foi possível concluir o estudo.</h3>
                <p style="color: var(--text-muted);">${n.message}</p>
            </div>
        `;a.innerHTML=c,window.lucide&&window.lucide.createIcons({root:a}),a.querySelector(".btn-back-result").addEventListener("click",o)}}document.addEventListener("DOMContentLoaded",()=>{window.lucide&&window.lucide.createIcons();const a=V();_(),W(),ee(),te(),re();const e=document.querySelectorAll(".nav-item"),s=document.getElementById("bible-nav-panel"),t=document.getElementById("quick-actions");e.forEach(b=>{b.addEventListener("click",()=>{e.forEach(T=>T.classList.remove("active")),b.classList.add("active");const y=b.dataset.section,E=document.getElementById("view-chat"),q=document.getElementById("view-bible-reader"),x=document.getElementById("view-study-hub"),w=document.getElementById("chat-title"),A=document.getElementById("chat-status");switch(E&&(E.classList.remove("active"),E.style.display="none"),q&&(q.classList.remove("active"),q.style.display="none"),x&&(x.classList.remove("active"),x.style.display="none"),y){case"chat":E&&(E.classList.add("active"),E.style.display="flex"),w&&(w.textContent="Assistente Bíblico"),A&&(A.innerHTML='<span class="status-dot"></span> Online — Pronto para ajudar'),s.classList.add("hidden"),t.style.display="flex",window.innerWidth<=1024&&o();break;case"bible":q&&(q.classList.add("active"),q.style.display="flex"),(w&&w.textContent==="Assistente Bíblico"||w.textContent==="Hub de Estudos")&&(w.textContent="Leitura Bíblica",A&&(A.innerHTML="Selecione um capítulo na barra lateral")),s.classList.remove("hidden"),t.style.display="none",window.innerWidth<=1024&&o();break;case"study":x&&(x.classList.add("active"),x.style.display="flex"),w&&(w.textContent="Hub de Estudos"),A&&(A.innerHTML="Explore e mergulhe fundo na Palavra");const T=document.getElementById("study-panel");if(T.classList.remove("hidden"),T.classList.add("visible"),document.getElementById("app").classList.remove("panel-closed"),window.innerWidth<=1024){const k=document.querySelector(".panel-backdrop");k&&k.classList.add("visible")}s.classList.add("hidden"),t.style.display="flex",window.innerWidth<=1024&&o();break}})});function o(){i.classList.remove("visible"),n&&n.classList.remove("visible")}const r=document.getElementById("btn-toggle-sidebar"),i=document.getElementById("sidebar"),n=document.createElement("div");n.className="sidebar-backdrop",document.body.appendChild(n),r&&r.addEventListener("click",()=>{i.classList.toggle("visible"),n.classList.toggle("visible")}),n.addEventListener("click",o);const c=document.getElementById("btn-settings"),g=document.getElementById("settings-modal"),d=document.getElementById("btn-close-settings"),u=g==null?void 0:g.querySelector(".modal-backdrop"),m=document.getElementById("api-key-input"),f=document.getElementById("btn-save-settings"),l=document.getElementById("mode-indicator");c&&c.addEventListener("click",()=>{g.classList.remove("hidden");const b=localStorage.getItem("groq_api_key")||"";m&&(m.value=b),v(b)});const p=()=>g.classList.add("hidden");d&&d.addEventListener("click",p),u&&u.addEventListener("click",p),f&&f.addEventListener("click",()=>{var y;const b=((y=m==null?void 0:m.value)==null?void 0:y.trim())||"";a.aiService.setApiKey(b),v(b),p()}),m&&m.addEventListener("input",()=>{v(m.value.trim())});function v(b){l&&(b&&b.length>10?l.innerHTML='<span class="mode-badge api">API Groq Ativa</span>':l.innerHTML='<span class="mode-badge demo">Demonstração</span>')}window.addEventListener("resize",()=>{const b=document.getElementById("study-panel"),y=document.querySelector(".panel-backdrop");window.innerWidth<=1024&&b&&!b.classList.contains("visible")&&(b.classList.add("hidden"),document.getElementById("app").classList.add("panel-closed")),window.innerWidth>1024&&(y&&y.classList.remove("visible"),o(),b&&(b.classList.remove("hidden"),b.classList.add("visible"),document.getElementById("app").classList.remove("panel-closed")))});const h=document.getElementById("chat-status");h&&a.aiService.isApiMode()&&(h.innerHTML='<span class="status-dot"></span> Online — API Groq ativa'),console.log("✨ Logos — Assistente Bíblico Digital inicializado com sucesso!")});
