<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<html lang="pt-BR" class="fonts-loading">
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"
    />

    <!-- Meta Tags SEO Premium -->
    <title>Plural Criativo — Produção Audiovisual Premium</title>
    <meta
      name="description"
      content="Estúdio de produção audiovisual criativa. Vídeos institucionais, motion graphics, design e estratégia de conteúdo para marcas inovadoras."
    />
    <meta
      name="keywords"
      content="produção audiovisual, vídeos institucionais, motion graphics, design gráfico, estratégia de conteúdo"
    />

    <!-- Open Graph / Social Media -->
    <meta
      property="og:title"
      content="Plural Criativo — Produção Audiovisual"
    />
    <meta
      property="og:description"
      content="Transformamos ideias em experiências visuais impactantes."
    />
    <meta
      property="og:image"
      content="https://pluralcriativo.com.br/img/og-image.jpg"
    />
    <meta property="og:url" content="https://pluralcriativo.com.br" />
    <meta property="og:type" content="website" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Plural Criativo" />
    <meta
      name="twitter:description"
      content="Estúdio criativo de produção audiovisual"
    />
    <meta
      name="twitter:image"
      content="https://pluralcriativo.com.br/img/twitter-image.jpg"
    />

    <!-- Favicon & App Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#2f7be6" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />

    <!-- Preload critical assets -->
 <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/videos/video.mp4" as="video" type="video/mp4" />
<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/img/hero-poster.jpg" as="image" />

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

    <header class="site-header" id="mainHeader">
      <div class="container">
        <div class="header-inner">
          <a href="<?php echo esc_url( home_url('/') ); ?>" class="brand">
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/img/logoplu.png"
              alt="Plural Criativo"
              class="brand-logo"
              width="200"
              height="50"
            />
          </a>

         
          <nav class="main-nav" aria-label="Navegação principal">
            <button
              id="navToggleSticky"
              class="nav-toggle"
              aria-expanded="false"
              aria-label="Abrir/fechar menu"
            >
              <i class="fas fa-bars"></i>
              <i class="fas fa-times"></i>
            </button>
            <ul id="navListSticky" class="nav-list">
              <li><a href="#top" class="active">Início</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#gallery">Artes</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li>
                <a href="#contato" class="btn btn-primary btn-sm">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>