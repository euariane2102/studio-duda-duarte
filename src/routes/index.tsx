import { createFileRoute } from "@tanstack/react-router";

const STYLE = `
    :root {
      --black: #11100f;
      --ink: #211c18;
      --paper: #f7f3ee;
      --soft: #ede4da;
      --line: #d9cab9;
      --gold: #b88a43;
      --gold-dark: #8b642b;
      --violet: #44205f;
      --white: #fffaf4;
      --muted: #74695e;
      --shadow: 0 24px 70px rgba(17, 16, 15, .18);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      background: var(--paper);
      color: var(--ink);
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      overflow-x: hidden;
    }

    img { display: block; width: 100%; height: auto; }
    img[src=""] { display: none; }
    a { color: inherit; text-decoration: none; }

    .container {
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
    }

    .eyebrow {
      color: var(--gold-dark);
      font-size: .78rem;
      font-weight: 800;
      letter-spacing: .14em;
      text-transform: uppercase;
    }

    h1, h2, h3 {
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 500;
      line-height: 1.02;
    }

    h1 {
      max-width: 760px;
      color: var(--white);
      font-size: clamp(3.25rem, 8vw, 7rem);
    }

    h2 {
      color: var(--black);
      font-size: clamp(2.15rem, 5vw, 4.2rem);
      margin-top: .7rem;
    }

    h3 { font-size: clamp(1.5rem, 3vw, 2.15rem); }

    .section-intro {
      max-width: 720px;
      margin-top: 1.1rem;
      color: var(--muted);
      font-size: 1.08rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      padding: .95rem 1.35rem;
      border: 1px solid var(--black);
      background: var(--black);
      color: var(--white);
      font-size: .78rem;
      font-weight: 800;
      letter-spacing: .1em;
      text-transform: uppercase;
      transition: transform .2s ease, background .2s ease, color .2s ease;
    }

    .btn:hover { transform: translateY(-2px); background: transparent; color: var(--black); }
    .btn.gold { border-color: var(--gold); background: var(--gold); color: var(--black); }
    .btn.gold:hover { background: transparent; color: var(--gold); }
    .btn.light { border-color: rgba(255,250,244,.55); background: rgba(255,250,244,.08); color: var(--white); }
    .btn.light:hover { background: var(--white); color: var(--black); }

    header {
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      padding: 22px 5vw;
      color: var(--white);
      background: linear-gradient(to bottom, rgba(17,16,15,.82), rgba(17,16,15,0));
    }

    .logo {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.15rem;
      letter-spacing: .12em;
      text-transform: uppercase;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      font-size: .76rem;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    nav a:hover { color: var(--gold); }

    .hero {
      position: relative;
      min-height: 96vh;
      display: grid;
      align-items: end;
      padding: 130px 0 64px;
      background:
        linear-gradient(90deg, rgba(17,16,15,.95) 0%, rgba(17,16,15,.78) 42%, rgba(17,16,15,.24) 78%),
        linear-gradient(135deg, #11100f 0%, #221516 45%, #4b2d65 100%);
      overflow: hidden;
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: 0 0 0 auto;
      width: min(56%, 760px);
      background:
        radial-gradient(circle at 52% 22%, rgba(255,250,244,.22), transparent 22%),
        linear-gradient(145deg, rgba(184,138,67,.24), rgba(75,45,101,.44));
      opacity: .72;
    }

    .hero-photo {
      position: absolute;
      inset: 0 0 0 auto;
      width: min(56%, 760px);
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: contrast(1.05) saturate(.92);
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    .hero-copy {
      max-width: 660px;
      margin-top: 1.3rem;
      color: #e5ded5;
      font-size: clamp(1.05rem, 2vw, 1.32rem);
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: .9rem;
      margin-top: 2rem;
    }

    .trust-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-bottom: 1px solid var(--line);
      background: var(--white);
    }

    .trust-item {
      padding: 1.35rem 1.6rem;
      border-right: 1px solid var(--line);
    }

    .trust-item:last-child { border-right: 0; }

    .trust-item strong {
      display: block;
      color: var(--black);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.45rem;
      line-height: 1;
    }

    .trust-item span {
      display: block;
      margin-top: .45rem;
      color: var(--muted);
      font-size: .83rem;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    section { padding: 96px 0; }

    .about-grid {
      display: grid;
      grid-template-columns: .86fr 1.14fr;
      gap: 56px;
      align-items: center;
    }

    .portrait-card {
      min-height: 620px;
      overflow: hidden;
      border: 1px solid var(--gold);
      background: linear-gradient(145deg, #11100f, #4b2d65);
      box-shadow: var(--shadow);
    }

    .portrait-card img {
      height: 100%;
      min-height: 620px;
      object-fit: cover;
      object-position: center top;
    }

    .about-copy {
      display: grid;
      gap: 1.05rem;
      color: #3b332d;
      font-size: 1.08rem;
    }

    .signature {
      margin-top: .9rem;
      color: var(--gold-dark);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.55rem;
      font-style: italic;
    }

    .services {
      background: var(--black);
      color: var(--white);
    }

    .services h2, .location h2 { color: var(--white); }
    .services .section-intro, .location .section-intro { color: #cfc4b8; }

    .menu-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-top: 42px;
    }

    .menu-card {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
      padding: 30px;
      border: 1px solid rgba(216,201,184,.28);
      background: #171514;
    }

    .menu-card.featured {
      border-color: var(--gold);
      background: #1d1914;
    }

    .menu-head {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: start;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(216,201,184,.18);
    }

    .menu-head h3 { color: var(--white); }

    .price {
      min-width: 112px;
      color: var(--gold);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.55rem;
      text-align: right;
      white-space: nowrap;
    }

    .menu-card p { color: #cfc4b8; }

    .mini-prices {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .8rem;
      margin-top: auto;
    }

    .mini-prices span {
      display: block;
      padding: .85rem;
      border: 1px solid rgba(216,201,184,.18);
      color: #d8c9b8;
      font-size: .83rem;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .course { background: var(--soft); }

    .course-grid {
      display: grid;
      grid-template-columns: .9fr 1.1fr;
      gap: 34px;
      align-items: start;
      margin-top: 42px;
    }

    .course-panel {
      position: sticky;
      top: 96px;
      padding: 34px;
      background: var(--black);
      color: var(--white);
      box-shadow: var(--shadow);
    }

    .course-panel h3 { color: var(--white); margin-top: .6rem; }
    .course-panel p { margin-top: 1rem; color: #d6cbc0; }

    .course-note {
      margin-top: 1.4rem;
      padding-top: 1.4rem;
      border-top: 1px solid rgba(216,201,184,.28);
      color: #d6cbc0;
      font-size: .94rem;
    }

    .benefit-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .benefit, .testimonial-card {
      padding: 22px;
      border: 1px solid var(--line);
      background: var(--white);
    }

    .benefit strong {
      display: block;
      color: var(--black);
      font-size: 1rem;
    }

    .benefit span {
      display: block;
      margin-top: .45rem;
      color: var(--muted);
      font-size: .93rem;
    }

    .premium {
      margin-top: 18px;
      padding: 28px;
      border: 1px solid var(--gold);
      background: #fbf6ef;
    }

    .premium h3 { margin-bottom: .8rem; }

    .premium-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .75rem;
      margin-top: 1.1rem;
      color: var(--muted);
    }

    .premium-list span {
      position: relative;
      display: block;
      padding-left: 1rem;
    }

    .premium-list span::before {
      content: "";
      position: absolute;
      top: .72em;
      left: 0;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--gold);
    }

    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 40px;
    }

    .testimonial-card {
      display: flex;
      flex-direction: column;
      min-height: 300px;
    }

    .rating {
      color: var(--gold-dark);
      font-size: .82rem;
      font-weight: 900;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    .testimonial-card p {
      margin-top: 1rem;
      color: #3b332d;
      font-style: italic;
    }

    .testimonial-card strong {
      margin-top: auto;
      padding-top: 1.1rem;
      color: var(--black);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.1rem;
    }

    .location {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0;
      background: var(--black);
      color: var(--white);
    }

    .location-photo {
      min-height: 680px;
      background: linear-gradient(145deg, #2f1744, #6b35a0);
    }

    .location-photo img {
      height: 100%;
      min-height: 680px;
      object-fit: cover;
      object-position: center;
    }

    .location-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 90px min(7vw, 86px);
    }

    .location-content p {
      margin-top: 1rem;
      color: #d6cbc0;
    }

    .location-actions {
      display: flex;
      flex-wrap: wrap;
      gap: .9rem;
      margin-top: 2rem;
    }

    footer {
      padding: 38px 20px;
      background: #050505;
      color: #d6cbc0;
      text-align: center;
    }

    footer strong {
      display: block;
      color: var(--white);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    footer span {
      display: block;
      margin-top: .75rem;
      font-size: .82rem;
    }

    .whatsapp-float {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 30;
      width: 62px;
      height: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #25d366;
      color: #fff;
      box-shadow: 0 18px 46px rgba(0,0,0,.28);
      transition: transform .2s ease;
    }
    .whatsapp-float:hover { transform: scale(1.08); }
    .whatsapp-float svg { width: 34px; height: 34px; fill: #fff; }

    .gallery { background: var(--soft); }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 42px;
    }
    .gallery-item {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--line);
      background: var(--black);
      aspect-ratio: 3/4;
    }
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .5s ease;
    }
    .gallery-item:hover img { transform: scale(1.05); }
    .gallery-item figcaption {
      position: absolute;
      left: 0; right: 0; bottom: 0;
      padding: 14px 16px;
      color: var(--white);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.1rem;
      letter-spacing: .04em;
      background: linear-gradient(to top, rgba(17,16,15,.85), rgba(17,16,15,0));
    }
    @media (max-width: 900px) { .gallery-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 560px) { .gallery-grid { grid-template-columns: 1fr; } }

    @media (max-width: 900px) {
      header { padding: 18px 20px; }
      nav { display: none; }
      .hero::after, .hero-photo { width: 100%; opacity: .58; }
      .trust-row, .about-grid, .menu-grid, .course-grid, .location, .testimonial-grid { grid-template-columns: 1fr; }
      .trust-item { border-right: 0; border-bottom: 1px solid var(--line); }
      .portrait-card, .portrait-card img, .location-photo, .location-photo img { min-height: 460px; }
      .course-panel { position: static; }
      .benefit-grid, .premium-list { grid-template-columns: 1fr; }
    }

    @media (max-width: 560px) {
      .container { width: min(100% - 28px, 1120px); }
      section { padding: 68px 0; }
      .hero-actions, .location-actions { flex-direction: column; }
      .btn { width: 100%; }
      .menu-head { flex-direction: column; }
      .price { text-align: left; }
      .mini-prices { grid-template-columns: 1fr; }
    }
  `;

const BODY = `
  <a class="whatsapp-float" href="https://wa.me/5541985081825?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Duda." target="_blank" aria-label="Agendar pelo WhatsApp"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.142-.34.197-.7.197-1.06 0-.726-.926-1.418-1.66-1.633zm-2.97 7.328a8.395 8.395 0 0 1-4.495-1.297l-3.225.83.86-3.111a8.347 8.347 0 0 1-1.62-4.945c0-4.616 3.762-8.378 8.38-8.378 4.62 0 8.38 3.762 8.38 8.38 0 4.62-3.76 8.38-8.38 8.38m0-18.418c-5.55 0-10.06 4.508-10.06 10.058 0 1.747.453 3.448 1.31 4.954L6.69 27.27l5.34-1.378a10.034 10.034 0 0 0 4.99 1.31c5.55 0 10.06-4.51 10.06-10.06 0-5.55-4.51-10.058-10.06-10.058"/></svg></a>

  <header>
    <a class="logo" href="#inicio">Duda Duarte</a>
    <nav aria-label="Menu principal">
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#galeria">Galeria</a>
      <a href="#curso">Curso</a>
      <a href="#avaliacoes">Avaliações</a>
      <a href="#local">Local</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <img class="hero-photo" src="/assets/perfil-duda.jpg" alt="Duda Duarte, especialista em extensão de cílios">
      <div class="container hero-content">
        <span class="eyebrow">Studio Duda Duarte</span>
        <h1>Extensão de cílios com técnica, agilidade e acabamento premium.</h1>
        <p class="hero-copy">Atendimento em Almirante Tamandaré para mulheres que querem realçar o olhar com naturalidade, segurança e um resultado pensado para a rotina real.</p>
        <div class="hero-actions">
          <a class="btn gold" href="https://wa.me/5541985081825?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Duda." target="_blank">Agendar horário</a>
          <a class="btn light" href="#curso">Conhecer cursos</a>
        </div>
      </div>
    </section>

    <div class="trust-row" aria-label="Diferenciais do studio">
      <div class="trust-item"><strong>4 anos</strong><span>de experiência</span></div>
      <div class="trust-item"><strong>1 hora</strong><span>procedimento otimizado</span></div>
      <div class="trust-item"><strong>30 a 45 dias</strong><span>linha capping</span></div>
      <div class="trust-item"><strong>Pós-curso</strong><span>assistência para alunas</span></div>
    </div>

    <section class="about" id="sobre">
      <div class="container about-grid">
        <div class="portrait-card">
          <img src="/assets/duda-nova.jpg" alt="Duda Duarte, especialista em extensão de cílios — Studio Duda Duarte">
        </div>
        <div>
          <span class="eyebrow">A especialista</span>
          <h2>Uma experiência feita para valorizar seu olhar.</h2>
          <div class="about-copy">
            <p>O Studio Duda Duarte nasceu do desejo de transformar a forma como as mulheres vivem a extensão de cílios: com mais praticidade, técnica e confiança no resultado.</p>
            <p>Há 4 anos no mercado, Duda se tornou referência na região por unir agilidade e acabamento refinado em procedimentos realizados em até 1 hora, sem abrir mão do cuidado com os fios naturais.</p>
            <p>A missão do studio é entregar beleza com conforto, orientação clara e um atendimento acolhedor. Cada detalhe é pensado para que você saia mais segura, mais prática e com o olhar em evidência.</p>
            <p class="signature">Seja bem-vinda ao Studio Duda Duarte.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery" id="galeria">
      <div class="container">
        <span class="eyebrow">Portfólio</span>
        <h2>Resultados reais do studio.</h2>
        <p class="section-intro">Conheça as principais técnicas aplicadas no Duda Duarte Beauty Studio.</p>
        <div class="gallery-grid">
          <figure class="gallery-item"><img src="/__l5e/assets-v1/ce6c6f21-95f0-4ed1-bc92-e457a4bf8e5f/volume-unica.jpg" alt="Volume Única" loading="lazy"><figcaption>Volume Única</figcaption></figure>
          <figure class="gallery-item"><img src="/__l5e/assets-v1/454ded8d-4f13-433d-89b4-e11d0544d789/volume-5d.jpg" alt="Volume 5D" loading="lazy"><figcaption>Volume 5D</figcaption></figure>
          <figure class="gallery-item"><img src="/__l5e/assets-v1/e6b2ee98-e1f5-4b71-bcf1-c315d89a5291/fox-new.jpg" alt="Fox Eyes" loading="lazy"><figcaption>Fox</figcaption></figure>
          <figure class="gallery-item"><img src="/__l5e/assets-v1/2f18ad83-ceba-4fc2-a724-ae035835f4b6/volume-brasileiro-new.jpg" alt="Volume Brasileiro" loading="lazy"><figcaption>Volume Brasileiro</figcaption></figure>
          <figure class="gallery-item"><img src="/__l5e/assets-v1/8ade43cb-6e97-4c22-9751-477ebb948fc6/fio-a-fio-new.jpg" alt="Fio a Fio" loading="lazy"><figcaption>Fio a Fio</figcaption></figure>
          <figure class="gallery-item"><img src="/__l5e/assets-v1/8d62579c-0157-4e33-aa80-d3a1a2c4672f/capping-5d-new.jpg" alt="Capping 5D" loading="lazy"><figcaption>Capping 5D</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="services" id="servicos">
      <div class="container">
        <span class="eyebrow">Menu de atendimentos</span>
        <h2>Design para diferentes estilos de olhar.</h2>
        <p class="section-intro">Técnicas indicadas conforme o resultado desejado, a estrutura dos seus fios naturais e a sua rotina de manutenção.</p>

        <div class="menu-grid">
          <article class="menu-card">
            <div class="menu-head"><h3>Volume Clássico Natural</h3><div class="price">R$ 150</div></div>
            <p>Aplicação de um fio sintético em cada fio natural para um efeito delicado, definido e sofisticado.</p>
            <div class="mini-prices"><span>Aplicação R$ 150</span><span>Manutenção R$ 110</span></div>
          </article>
          <article class="menu-card">
            <div class="menu-head"><h3>Volume Brasileiro</h3><div class="price">R$ 160</div></div>
            <p>Técnica com fios em formato Y para criar um olhar mais preenchido, leve e harmônico.</p>
            <div class="mini-prices"><span>Aplicação R$ 160</span><span>Manutenção R$ 110</span></div>
          </article>
          <article class="menu-card">
            <div class="menu-head"><h3>Volume Fox</h3><div class="price">R$ 170</div></div>
            <p>Mapeamento com fios mais longos no canto externo para um olhar alongado, moderno e marcante.</p>
            <div class="mini-prices"><span>Aplicação R$ 170</span><span>Manutenção R$ 120</span></div>
          </article>
          <article class="menu-card featured">
            <div class="menu-head"><h3>Capping 5D</h3><div class="price">R$ 220</div></div>
            <p>Técnica avançada para volume intenso, acabamento uniforme e boa durabilidade, mantendo leveza nos fios naturais.</p>
            <div class="mini-prices"><span>Durabilidade 30 a 45 dias</span><span>Sem manutenção</span></div>
          </article>
          <article class="menu-card featured">
            <div class="menu-head"><h3>Capping Volume Brasileiro</h3><div class="price">R$ 210</div></div>
            <p>Combina o efeito preenchido do volume brasileiro com a precisão do capping para um resultado denso e elegante.</p>
            <div class="mini-prices"><span>Durabilidade 30 a 45 dias</span><span>Sem manutenção</span></div>
          </article>
        </div>
      </div>
    </section>

    <section class="course" id="curso">
      <div class="container">
        <span class="eyebrow">Formação profissional</span>
        <h2>Curso completo de extensão de cílios.</h2>
        <p class="section-intro">Para quem quer começar do zero, aprender uma técnica ágil e construir uma base profissional para atender com segurança, organização e posicionamento.</p>

        <div class="course-grid">
          <aside class="course-panel">
            <span class="eyebrow">Método Duda Duarte</span>
            <h3>Da primeira aplicação aos seus primeiros atendimentos.</h3>
            <p>Em uma imersão prática, você aprende as principais técnicas, o raciocínio por trás dos mapeamentos e o passo a passo para realizar um atendimento em cerca de 1 hora.</p>
            <p>O curso também inclui orientação de precificação, divulgação e atendimento ao cliente para ajudar você a estruturar uma rotina profissional desde o início.</p>
            <div class="course-note">Potencial de faturamento depende de prática, agenda, divulgação, região e consistência. A formação entrega método e direcionamento para você construir esse caminho com mais clareza.</div>
          </aside>

          <div>
            <div class="benefit-grid">
              <div class="benefit"><strong>Do zero ao atendimento</strong><span>Conteúdo pensado para iniciantes que querem começar com base correta.</span></div>
              <div class="benefit"><strong>Técnicas em 1 dia</strong><span>Imersão objetiva com prática, demonstração e direcionamento.</span></div>
              <div class="benefit"><strong>Procedimento em 1 hora</strong><span>Método para ganhar agilidade sem perder organização e acabamento.</span></div>
              <div class="benefit"><strong>Mapeamentos e curvaturas</strong><span>Escolha de fios, efeitos e adaptações para diferentes tipos de olhar.</span></div>
              <div class="benefit"><strong>Isolamento e retenção</strong><span>Fundamentos para aplicação limpa, durabilidade e preservação dos fios naturais.</span></div>
              <div class="benefit"><strong>Precificação e captação</strong><span>Orientação para valorizar seu serviço e atrair clientes com mais segurança.</span></div>
              <div class="benefit"><strong>Apostila e certificado</strong><span>Material completo de apoio e certificado de conclusão.</span></div>
              <div class="benefit"><strong>Assistência pós-curso</strong><span>Acompanhamento para dúvidas e apoio nos primeiros passos.</span></div>
            </div>

            <div class="premium">
              <span class="eyebrow">Opção premium</span>
              <h3>Curso com estágio de 3 dias no studio.</h3>
              <p>Além da formação completa, você pode acompanhar a rotina profissional da Duda no studio, observando atendimentos reais e entendendo como a técnica se conecta à organização, experiência da cliente e segurança na prática.</p>
              <div class="premium-list">
                <span>Observação de atendimentos reais</span>
                <span>Organização de materiais e rotina</span>
                <span>Relacionamento com clientes</span>
                <span>Acompanhamento dos seus atendimentos reais</span>
                <span>Mais confiança para iniciar a carreira</span>
                <span>Vagas limitadas por turma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials" id="avaliacoes">
      <div class="container">
        <span class="eyebrow">Prova social</span>
        <h2>Clientes que confiam no trabalho.</h2>
        <div class="testimonial-grid">
          <article class="testimonial-card"><span class="rating">5 estrelas</span><p>"Faço cílios com a Duda há anos. Adoro o trabalho dela, principalmente por sair pronta em cerca de 1 hora com um resultado lindo."</p><strong>Tatty Cruz</strong></article>
          <article class="testimonial-card"><span class="rating">5 estrelas</span><p>"Atendimento incrível, profissional atenciosa e com um trabalho delicado. Deixa meu olhar lindo há mais de 3 anos."</p><strong>Mathyele Candido</strong></article>
          <article class="testimonial-card"><span class="rating">5 estrelas</span><p>"Meus cílios duram de 20 a 30 dias com facilidade. Amo o trabalho e indico pela qualidade e pelo cuidado."</p><strong>Vitoria Talissa</strong></article>
          <article class="testimonial-card"><span class="rating">5 estrelas</span><p>"Cheguei com medo por experiências anteriores, mas a Duda me fez pensar diferente desde o primeiro atendimento."</p><strong>Elisangela França</strong></article>
        </div>
      </div>
    </section>

    <section class="location" id="local">
      <div class="location-content">
        <span class="eyebrow">Novo espaço</span>
        <h2>Atendimento no Duda Duarte Beauty Studio.</h2>
        <p>O Studio Duda Duarte atende em um ambiente moderno, acolhedor e preparado para oferecer uma experiência completa de autocuidado.</p>
        <p><strong>Endereço:</strong> Av. Emílio Johnson, 1038, Sala 4 — Almirante Tamandaré, PR.</p>
        <p>Agendamentos e informações sobre cursos são feitos pelo WhatsApp.</p>
        <div class="location-actions">
          <a class="btn gold" href="https://wa.me/5541985081825?text=Olá,%20gostaria%20de%20agendar%20um%20horário." target="_blank">Agendar pelo WhatsApp</a>
          <a class="btn light" href="https://instagram.com/studiodudaduartec" target="_blank">Ver Instagram</a>
        </div>
      </div>
      <div class="location-photo">
        <img src="/assets/clinica.jpg" alt="Espaço de atendimento do Studio Duda Duarte">
      </div>
    </section>
  </main>

  <footer>
    <strong>Studio Duda Duarte</strong>
    <span>Extensão de cílios, cursos profissionais e atendimento no Duda Duarte Beauty Studio.</span>
    <span>Av. Emílio Johnson, 1038, Sala 4 — Almirante Tamandaré, PR.</span>
  </footer>
`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Duda Duarte | Extensão de Cílios e Cursos" },
      { name: "description", content: "Studio Duda Duarte em Almirante Tamandaré. Extensão de cílios em até 1 hora, atendimento especializado e cursos profissionais para lash designers." },
      { property: "og:title", content: "Studio Duda Duarte | Extensão de Cílios e Cursos" },
      { property: "og:description", content: "Studio Duda Duarte em Almirante Tamandaré. Extensão de cílios em até 1 hora, atendimento especializado e cursos profissionais para lash designers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  );
}
