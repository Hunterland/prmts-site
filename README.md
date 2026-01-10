# Primatas Clan – Landing Page

Landing page institucional do grupo de dança **Primatas Clan**, coletivo de breaking da cultura hip hop de Manaus (AM).  
O projeto apresenta o grupo, seus integrantes, eventos realizados, presença midiática e canais de contato.

> Projeto estático construído em HTML, CSS e JavaScript vanilla, focado em impacto visual e experiência imersiva para o público da cultura urbana.[3][4][5][6]

***

## ✨ Features

- Seção *hero* com vídeo em tela cheia destacando o slogan “Uma década de asfalto, suor e impacto!”.[3]
- Sessão “Sobre o Clan” com texto institucional explicando a história, missão e atuação do grupo na cena hip hop manauara.[3]
- Grade de **integrantes** com cards individuais (foto, nome, apelido e mini bio) apresentando os b-boys e artistas do coletivo.[6][3]
- Seção de **produção de eventos** destacando projetos como Circuito Utopia, Sul Cypher e Primatas Battle Kids, com cartazes e descrição detalhada.[6][3]
- Carrossel de **presença midiática** com conquistas em batalhas, participações em festivais e espetáculos.[5][3]
- Bloco de **apoio** e **contato** com links diretos para Instagram, e‑mail e WhatsApp do grupo.[3]
- Layout responsivo com uso de Flexbox e Grid, além de menu mobile com animação de hambúrguer.[4][6]

***

## 🧱 Tecnologias utilizadas

- **HTML5** – estrutura semântica com `header`, `main`, `section`, `article` e `footer` para melhor SEO e acessibilidade.[3]
- **CSS3** – estilização customizada com:
  - layout responsivo via Flexbox e CSS Grid  
  - cabeçalho fixo com efeito de blur  
  - cards, sobreposições e fundo escuro com textura para reforçar o clima de street/hip hop.[6]
- **JavaScript (vanilla)** – scripts enxutos para:
  - menu mobile (abrir/fechar e esconder ao clicar nos links)  
  - carrossel automático da seção de mídia com setas, dots e pausa ao passar o mouse.[4][5]
- **Google Fonts** – Poppins e Bebas Neue para reforçar a identidade visual do projeto.[3]
- **Font Awesome** – ícones sociais (Instagram, WhatsApp, e‑mail) e ícones de navegação.[3]

***

## 📂 Estrutura de pastas

```bash
PRMTS-SITE/
├── index.html
└── assets/
    ├── css/
    │   ├── reset.css
    │   └── styles.css
    ├── js/
    │   ├── menu.js
    │   └── slider.js
    ├── images/
    │   ├── home/
    │   ├── sobre/
    │   ├── integrantes/
    │   ├── eventos/
    │   ├── midia/
    │   ├── contato/
    │   └── logo/
    └── video/
        └── prmts-cypher.mp4
```

Essa organização separa claramente HTML, estilos, scripts, mídias e vídeos, facilitando manutenção e evolução do projeto.[2][5][4][6][3]

***

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/prmts-site.git
cd prmts-site
```

2. Abra o arquivo `index.html` diretamente no navegador  
   ou use um servidor simples, por exemplo 'liveserver' diretamente
   do vscode.


## 📌 Próximos passos / ideias de evolução

- Otimizar imagens e vídeo para melhorar desempenho em conexões móveis.  
- Transformar seções como Integrantes e Eventos em dados dinâmicos (JSON) para facilitar atualização do conteúdo.  
- Adicionar testes de acessibilidade (ex.: Lighthouse) e meta tags avançadas de SEO para melhorar descoberta do grupo em buscas.[4][5][6][3]

