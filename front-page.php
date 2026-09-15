<?php get_header(); ?>
<?php $theme = get_template_directory_uri(); ?>
<!DOCTYPE html>
<html lang="pt-BR" class="fonts-loading">
  <body>
    <!-- Hero Section -->
    <section class="hero" id="top" aria-label="Hero section">
      <video autoplay muted loop playsinline poster="<?php echo $template_url; ?>/assets/img/hero-poster.jpg" class="hero-video">
          <source src="<?php echo $theme; ?>/assets/videos/video.mp4" type="video/mp4" />
        </video>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title fill-words">
          <div class="line-1">
            <span data-text="Criamos">Criamos</span>
            <span data-text="experiências">experiências</span>
          </div>
          <div class="line-2">
            <span data-text="visuais">visuais</span>
            <span data-text="que">que</span>
            <span data-text="emocionam">emocionam</span>
          </div>
        </h1>
        <p class="hero-subtitle">Conectando pessoas às suas histórias</p>

        <div class="btn-group">
          <a href="#portfolio" class="btn btn-primary">
            <i class="fas fa-play-circle"></i>
            Ver Portfólio
          </a>
          <a href="#contato" class="btn btn-outline">
            <i class="fas fa-comment"></i>
            Fale Conosco
          </a>
        </div>
      </div>

      <a
        href="#portfolio"
        class="scroll-indicator"
        aria-label="Scroll para mais conteúdo"
      >
        <i class="fas fa-chevron-down"></i>
      </a>
    </section>

    <!-- Clients Marquee -->
    <section class="clients-section" aria-label="Nossos clientes">
      <div class="container">
        <div class="marquee-container">
          <div class="marquee-track">
            <img
              src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 1"
              class="client-logo"
              width="120"
              height="40"
            />
            <img
              src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 2"
              class="client-logo"
              width="120"
              height="40"
            />
            <img
              src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 3"
              class="client-logo"
              width="120"
              height="40"
            />
            <img
              src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 4"
              class="client-logo"
              width="120"
              height="40"
            />
            <img
             src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 5"
              class="client-logo"
              width="120"
              height="40"
            />
            <img
             src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 6"
              class="client-logo"
              width="120"
              height="40"
            />
            <img
             src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 7"
              class="client-logo"
              width="120"
              height="40"
            />
            <img
             src="<?php echo $theme; ?>/assets/img/logo-cliente-adidas.jpg"
              alt="Cliente 8"
              class="client-logo"
              width="120"
              height="40"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section reveal">
      <div class="container">
        <div class="section-title">
          <h2>Nossos Destaques</h2>
          <p class="section-subtitle">
            Projetos selecionados que mostram nossa paixão por contar histórias
            visuais
          </p>
        </div>

        <div class="portfolio-grid">
          <!-- Projeto 1 -->
          <article
            class="portfolio-item"
            data-video="<?php echo $theme; ?>/assets/videos/video.mp4"
            tabindex="0"
          >
            <div class="thumb">
              <img
                src="<?php echo $theme; ?>/assets/img/Imagem 1.png"
                alt="Projeto Institucional"
                loading="lazy"
              />
              <div class="portfolio-overlay">
                <span class="portfolio-category">Vídeo Institucional</span>
                <h3>TechCorp Brand Story</h3>
                <p>
                  Narrativa visual que transformou a comunicação corporativa
                </p>
              </div>
            </div>
          </article>

          <!-- Projeto 2 -->
          <article
            class="portfolio-item"
            data-video="<?php echo $theme; ?>/assets/videos/project-2.mp4"
            tabindex="0"
          >
            <div class="thumb">
              <img
                src="<?php echo $theme; ?>/assets/img/portfolio/project-2.jpg"
                alt="Campanha Digital"
                loading="lazy"
              />
              <div class="portfolio-overlay">
                <span class="portfolio-category">Campanha Digital</span>
                <h3>Fashion Forward 2024</h3>
                <p>Conteúdo viral para redes sociais com engajamento recorde</p>
              </div>
            </div>
          </article>

          <!-- Projeto 3 -->
          <article
            class="portfolio-item"
            data-video="<?php echo $theme; ?>/assets/videos/project-3.mp4"
            tabindex="0"
          >
            <div class="thumb">
              <img
                src="<?php echo $theme; ?>/assets/img/project-3.jpg"
                alt="Documentário"
                loading="lazy"
              />
              <div class="portfolio-overlay">
                <span class="portfolio-category">Documentário</span>
                <h3>Vozes da Amazônia</h3>
                <p>Histórias reais que inspiram mudanças e conscientização</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="section alt reveal">
      <div class="container">
        <div class="section-title">
          <h2>Serviços Especializados</h2>
          <p class="section-subtitle">
            Soluções completas para sua presença audiovisual
          </p>
        </div>

        <div class="services-grid">
          <!-- Serviço 1 -->
          <div class="service-card reveal">
            <div class="service-icon">🎬</div>
            <h3>Produção de Vídeo</h3>
            <p>
              Da concepção à finalização, entregamos vídeos que contam histórias
              e geram resultados.
            </p>
            <ul class="service-features">
              <li>Roteiro e direção</li>
              <li>Filmagem profissional</li>
              <li>Edição e color grading</li>
            </ul>
          </div>

          <!-- Serviço 2 -->
          <div class="service-card reveal">
            <div class="service-icon">✨</div>
            <h3>Motion Graphics</h3>
            <p>
              Animações criativas que explicam, engajam e encantam seu público.
            </p>
            <ul class="service-features">
              <li>Animações 2D/3D</li>
              <li>Infográficos animados</li>
              <li>Vinhetas personalizadas</li>
            </ul>
          </div>

          <!-- Serviço 3 -->
          <div class="service-card reveal">
            <div class="service-icon">🎨</div>
            <h3>Design Visual</h3>
            <p>
              Identidade visual e recursos gráficos que fortalecem sua marca.
            </p>
            <ul class="service-features">
              <li>Branding completo</li>
              <li>Social media design</li>
              <li>Materiais promocionais</li>
            </ul>
          </div>

          <!-- Serviço 4 -->
          <div class="service-card reveal">
            <div class="service-icon">🚀</div>
            <h3>Estratégia Digital</h3>
            <p>
              Planejamento e análise para maximizar o impacto do seu conteúdo.
            </p>
            <ul class="service-features">
              <li>Plano de conteúdo</li>
              <li>Análise de performance</li>
              <li>Otimização para plataformas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Arts Section -->
    <section id="gallery" class="gallery section">
      <div class="container">
        <h2 class="section-title">Artes Visuais</h2>
        <p class="section-subtitle">
          Inspire-se nos projetos que ganharam vida e forma com a nossa equipe.
        </p>

        <div class="gallery-grid">
          <!-- Card de Arte 1 -->
          <div class="art-card reveal">
            <a
              href="#"
              class="art-link"
              aria-label="Ver Projeto: Projeto Alpha"
            >
              <div class="art-image-container">
                <img src="<?php echo $theme; ?>/assets/img/Imagem 1.png" alt="Imagem 1" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/800x600/1e293b/f8fafc?text=ARTE+VISUAL+4:3'" />
              </div>
              <div class="art-info">
                <h3>Projeto</h3>
                <p>Estratégia completa de vídeo marketing e motion graphics.</p>
              </div>
            </a>
          </div>

          <!-- Card de Arte 2 -->
          <div class="art-card reveal">
            <a
              href="#"
              class="art-link"
              aria-label="Ver Projeto: Vídeo Institucional"
            >
              <div class="art-image-container">
                <img src="<?php echo $theme; ?>/assets/img/Imagem 2.png" alt="Imagem 2" loading="lazy" />
              </div>
              <div class="art-info">
                <h3>Projeto 2</h3>
                <p>
                  Documentário de marca focado em cultura e valores internos.
                </p>
              </div>
            </a>
          </div>

          <!-- Card de Arte 3 -->
          <div class="art-card reveal">
            <a href="#" class="art-link" aria-label="Ver Projeto: Animação 3D">
              <div class="art-image-container">
                <img src="<?php echo $theme; ?>/assets/img/Imagem 3.png" alt="Imagem 3" loading="lazy" />
              </div>
              <div class="art-info">
                <h3>Projeto 3</h3>
                <p>
                  Modelagem e animação de um produto complexo para fácil
                  compreensão.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="equipe" class="section alt reveal">
      <div class="container">
        <div class="section-title">
          <h2>Nossa Equipe</h2>
          <p class="section-subtitle">
            Especialistas apaixonados por transformar ideias em realidade
          </p>
        </div>

        <div class="team-grid">
          <!-- Membro 1 -->
          <div class="team-member reveal">
            <div class="member-photo">
              <img
                src="<?php echo $theme; ?>/assets/img/"
                alt="Carlos Varela"
                loading="lazy"
              />
            </div>
            <h3>Carlos Varela</h3>
            <p class="muted">Diretor Criativo</p>
            <p>+ anos de experiência em produção audiovisual</p>
            <div class="social-links">
              <a href="https://www.instagram.com/carlosvarela.pro/" aria-label="Instagram"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>

          <!-- Membro 2 -->
          <div class="team-member reveal">
            <div class="member-photo">
              <img
                src="<?php echo $theme; ?>/assets/img/imagem-eqp-2.jpg"
                alt="Maria Santos"
                loading="lazy"
              />
            </div>
            <h3>Pessoa 2</h3>
            <p class="muted">Designer</p>
            <p>Especialista em animações 3D e efeitos visuais</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>

          <!-- Membro 3 -->
          <div class="team-member reveal">
            <div class="member-photo">
              <img
                src="<?php echo $theme; ?>/assets/img/imagem-eqp-3.jpg"
                alt="Pedro Oliveira"
                loading="lazy"
              />
            </div>
            <h3>Pessoa 3</h3>
            <p class="muted">Editor</p>
            <p>Expert em color grading e storytelling visual</p>
            <div class="social-links">
             <a href="#" aria-label="Instagram"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="section reveal">
      <div class="container">
        <div class="section-title">
          <h2>Vamos Conversar</h2>
          <p class="section-subtitle">
            Pronto para transformar sua visão em conteúdo impactante?
          </p>
        </div>

        <div class="contact-grid">
          <!-- Formulário -->
          <form id="contactForm" class="contact-form">
            <!-- Campo Nome -->
            <div class="form-group">
              <label for="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                placeholder="Seu nome"
                required
                autocomplete="name"
              />
            </div>

            <!-- Campo Email -->
            <div class="form-group">
              <label for="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="seu@email.com"
                required
                autocomplete="email"
              />
            </div>

            <!-- Campo Empresa -->
            <div class="form-group">
              <label for="company">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                class="form-control"
                placeholder="(opcional)"
                autocomplete="organization"
              />
            </div>

            <!-- Campo Tipo de Projeto -->
            <div class="form-group">
              <label for="project">Tipo de Projeto</label>
              <select id="project" name="project" class="form-control">
                <option value="">Selecione uma opção</option>
                <option value="Producao de Video">🎬 Produção de Vídeo</option>
                <option value="Motion Graphics">✨ Motion Graphics</option>
                <option value="Design Grafico">🎨 Design Gráfico</option>
                <option value="Estrategia de Conteudo">
                  🚀 Estratégia de Conteúdo
                </option>
                <option value="Outro">💡 Outro</option>
              </select>
            </div>

            <!-- Campo Mensagem -->
            <div class="form-group">
              <label for="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                class="form-control"
                placeholder="Conte-nos sobre seu projeto, ideias, orçamento e prazos..."
                rows="6"
                required
              ></textarea>
              <div class="char-counter" id="charCounter">0/1000</div>
            </div>

            <button type="submit" class="btn btn-primary">
              <i class="fas fa-paper-plane"></i>
              Enviar Mensagem
            </button>
          </form>

          <!-- Informações de Contato -->
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Nossa Localização</h3>
                <p>Rua. Presidente Vargas<br />Parte de cima do burundangas<br />63250-000</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h3>Telefone</h3>
                <p><a href="tel:+5588994462677">(88) 99446-2677</a></p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div>
                <h3>Horário Comercial</h3>
                <p>Segunda - Sexta: 8h às 18h<br />Sábado: às </p>
              </div>
            </div>

            <div class="social-links-large">
              <a
                href="https://instagram.com/pluralcriativo"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/+558894462677"
                target="_blank"
                aria-label="WhatsApp"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <div
      id="modal"
      class="modal"
      aria-hidden="true"
      role="dialog"
      aria-label="Player de vídeo"
    >
      <div class="modal-backdrop" id="modalBackdrop"></div>
      <div class="modal-content">
        <button class="modal-close" id="modalClose" aria-label="Fechar vídeo">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-video">
          <video id="modalVideo" controls playsinline preload="metadata">
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </div>
    <!-- Botão Voltar ao Topo -->
    <button
      class="back-to-top"
      id="backToTop"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <i class="fas fa-chevron-up"></i>
    </button>


    <!-- Google Analytics (exemplo) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-X"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-XXXXX-X");
    </script>
  </body>
</html>

<?php get_footer(); ?>
