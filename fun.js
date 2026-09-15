// =============================================
// SCRIPT PROFISSIONAL - PLURAL CRIATIVO - COMPLETO
// =============================================

document.addEventListener("DOMContentLoaded", function () {
  // =============================================
  // 1. INICIALIZAÇÃO
  // =============================================

  console.log("🔵 Plural Criativo - Site inicializado");

  // =============================================
  // 2. CONFIGURAÇÕES GLOBAIS
  // =============================================

  const config = {
    smoothScrollDuration: 800,
    revealThreshold: 0.1,
    headerTransitionThreshold: 50,
    videoModalTransition: 300,
  };

  // =============================================
  // 3. FUNÇÕES UTILITÁRIAS
  // =============================================

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // =============================================
  // 4. BOTÃO VOLTAR AO TOPO (ADICIONADO AQUI)
  // =============================================

  function initBackToTop() {
    console.log("🔼 Inicializando botão Voltar ao Topo");

    const backToTopButton = document.getElementById("backToTop");

    if (!backToTopButton) {
      console.error(
        '❌ Botão "Voltar ao Topo" não encontrado! Criando manualmente...'
      );

      // Criar botão manualmente se não existir
      const button = document.createElement("button");
      button.id = "backToTop";
      button.className = "back-to-top";
      button.setAttribute("aria-label", "Voltar ao topo da página");
      button.setAttribute("title", "Voltar ao topo");
      button.innerHTML = '<i class="fas fa-chevron-up"></i>';
      document.body.appendChild(button);

      // Atualizar referência
      window.backToTopButton = button;
    } else {
      window.backToTopButton = backToTopButton;
      console.log('✅ Botão "Voltar ao Topo" encontrado');
    }

    // Elementos de referência
    const clientsSection = document.querySelector(".clients-section");
    const heroSection = document.querySelector(".hero");

    console.log(
      "📍 Seção de clientes:",
      clientsSection ? "Encontrada" : "Não encontrada"
    );
    console.log(
      "📍 Seção hero:",
      heroSection ? "Encontrada" : "Não encontrada"
    );

    // Função para verificar se deve mostrar o botão
    function checkScrollPosition() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      console.log(
        "📏 Scroll position:",
        scrollY,
        "Window height:",
        windowHeight
      );

      // Mostrar botão quando passar 50px da seção de clientes
      let shouldShow = false;

      if (clientsSection) {
        const clientsRect = clientsSection.getBoundingClientRect();
        const clientsBottom = clientsRect.bottom + scrollY;

        console.log("📊 Clients bottom:", clientsBottom);
        console.log("📊 Clients visible:", clientsRect.bottom > 0);

        // Se a seção de clientes já saiu da tela (bottom < 0) OU se scrollou mais de 500px
        if (clientsRect.bottom < -50 || scrollY > 500) {
          shouldShow = true;
          console.log("👁️ Mostrar botão: Passou da seção de clientes");
        }
      } else {
        // Fallback: mostrar após 500px de scroll
        shouldShow = scrollY > 500;
        console.log(
          "👁️ Mostrar botão (fallback):",
          shouldShow,
          "Scroll:",
          scrollY
        );
      }

      // Esconder no topo da página
      if (scrollY < 100) {
        shouldShow = false;
        console.log("🙈 Esconder botão: No topo da página");
      }

      // Aplicar classe visible
      if (shouldShow) {
        window.backToTopButton.classList.add("visible");
      } else {
        window.backToTopButton.classList.remove("visible");
      }
    }

    // Função para rolar suavemente ao topo
    function scrollToTop() {
      console.log("🚀 Rolando para o topo...");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Focar no header para acessibilidade
      setTimeout(() => {
        const header = document.getElementById("mainHeader");
        if (header) {
          header.focus();
        }
      }, 500);
    }

    // Adicionar event listeners
    window.backToTopButton.addEventListener("click", scrollToTop);

    // Permitir tecla Enter para acessibilidade
    window.backToTopButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTop();
      }
    });

    // Verificar posição inicial após carregamento
    setTimeout(() => {
      checkScrollPosition();
      console.log("🔍 Verificação inicial concluída");
    }, 500);

    // Verificar posição ao rolar (com throttle para performance)
    window.addEventListener("scroll", throttle(checkScrollPosition, 100));

    // Atualizar ao redimensionar
    window.addEventListener("resize", checkScrollPosition);

    // Forçar verificação adicional após 2 segundos
    setTimeout(checkScrollPosition, 2000);

    console.log('✅ Botão "Voltar ao Topo" inicializado com sucesso');
  }

  // =============================================
  // 5. HEADER INTERATIVO
  // =============================================

  const header = document.getElementById("mainHeader");
  const heroSection = document.querySelector(".hero");

  function updateHeader() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection ? heroSection.offsetHeight : 0;

    if (scrollY > config.headerTransitionThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Atualizar navegação ativa
    updateActiveNav();
  }

  // =============================================
  // 6. NAVEGAÇÃO SMOOTH SCROLL
  // =============================================

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href === "#" || href === "#top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = header.offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Fechar menu mobile se aberto
      closeMobileMenu();
    });
  });

  // =============================================
  // 7. MENU MOBILE
  // =============================================

  // VERSÃO SIMPLIFICADA
  const navToggle = document.getElementById("navToggleSticky");
  const navList = document.getElementById("navListSticky");

  function toggleMobileMenu() {
    const isOpen = navList.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function closeMobileMenu() {
    navList.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (navToggle && navList) {
    navToggle.addEventListener("click", toggleMobileMenu);

    // Fechar ao clicar nos links
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Fechar ao clicar fora (somente mobile)
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth <= 768 &&
        !navToggle.contains(e.target) &&
        !navList.contains(e.target) &&
        navList.classList.contains("active")
      ) {
        closeMobileMenu();
      }
    });
  }

  // =============================================
  // 8. SCROLL REVEAL - SIMPLIFICADO
  // =============================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // =============================================
  // 9. PORTFOLIO INTERATIVO
  // =============================================

  function initPortfolio() {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach((item) => {
      // Remove efeito de tilt 3D que pode causar problemas
      item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-12px)";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0)";
      });

      // Abrir modal ao clicar
      item.addEventListener("click", () => {
        const videoSrc = item.dataset.video;
        if (videoSrc) {
          openVideoModal(videoSrc);
        }
      });

      // Permitir tecla Enter para acessibilidade
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const videoSrc = item.dataset.video;
          if (videoSrc) {
            openVideoModal(videoSrc);
          }
        }
      });
    });
  }

  // =============================================
  // 10. MODAL DE VÍDEO (CORRIGIDO PARA WORDPRESS)
  // =============================================

  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modalVideo");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");

  function getThemePath() {
    // Tenta obter o caminho do tema do WordPress
    const themePathElement = document.querySelector('meta[name="theme-path"]');
    if (themePathElement) {
      return themePathElement.getAttribute("content");
    }

    // Fallback: tenta detectar automaticamente
    const scripts = document.querySelectorAll('script[src*="fun.js"]');
    if (scripts.length > 0) {
      const scriptSrc = scripts[0].src;
      const themeMatch = scriptSrc.match(/(\/wp-content\/themes\/[^/]+)/);
      if (themeMatch) {
        return themeMatch[1];
      }
    }

    return "/wp-content/themes/seu-tema";
  }

  function openVideoModal(src) {
    if (!modal || !modalVideo) return;

    console.log("🎬 Abrindo vídeo modal:", src);

    // Corrigir caminho para WordPress
    let videoSrc = src;

    // Se o src for relativo (não começa com http ou /)
    if (videoSrc && !videoSrc.startsWith("http") && !videoSrc.startsWith("/")) {
      const themePath = getThemePath();
      videoSrc = themePath + "/" + videoSrc;
      console.log("📁 Caminho corrigido:", videoSrc);
    } else if (videoSrc && videoSrc.startsWith("/")) {
      // Se começar com /, adicionar o domínio
      videoSrc = window.location.origin + videoSrc;
    }

    modalVideo.src = videoSrc;
    modalVideo.load();

    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Tenta reproduzir automaticamente
    const playPromise = modalVideo.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log(
          "⚠️ Reprodução automática bloqueada, aguardando clique do usuário"
        );
        // Adiciona controles visíveis
        modalVideo.setAttribute("controls", "true");
      });
    }

    // Focar no modal para acessibilidade
    setTimeout(() => {
      modal.focus();
    }, 100);
  }

  function closeVideoModal() {
    if (!modal || !modalVideo) return;

    console.log("❌ Fechando modal de vídeo");

    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    modalVideo.removeAttribute("controls");
    document.body.style.overflow = "";

    // Focar em algo seguro após fechar
    setTimeout(() => {
      if (document.activeElement === modalVideo) {
        document.body.focus();
      }
    }, 50);
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeVideoModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeVideoModal);
  }

  // Fechar com ESC
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      modal &&
      modal.getAttribute("aria-hidden") === "false"
    ) {
      closeVideoModal();
    }
  });

  // =============================================
  // 11. FORMULÁRIO DE CONTATO (ATUALIZADO PARA ENVIO VIA FORMSPREE)
  // =============================================

  const contactForm = document.getElementById("contactForm");
  // ⚠️ SEU ENDPOINT FORMSPREE: SUBSTITUI O SCRIPT PHP ⚠️
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgebgyj";

  if (contactForm) {
    // Remove autocomplete dos campos
    const inputs = contactForm.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.setAttribute("autocomplete", "off");
      input.setAttribute("autocorrect", "off");
      input.setAttribute("autocapitalize", "off");
      input.setAttribute("spellcheck", "false");
    });

    // Validação em tempo real
    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => clearError(input));
    });

    // Contador de caracteres para textarea
    const messageTextarea = contactForm.querySelector("#message");
    const charCounter = contactForm.querySelector("#charCounter");

    if (messageTextarea && charCounter) {
      messageTextarea.addEventListener("input", function () {
        const currentLength = this.value.length;
        const maxLength = 1000;
        charCounter.textContent = `${currentLength}/${maxLength}`;

        if (currentLength > maxLength) {
          this.value = this.value.substring(0, maxLength);
          charCounter.textContent = `${maxLength}/${maxLength}`;
          charCounter.style.color = "#ef4444";
        } else if (currentLength > 900) {
          charCounter.style.color = "#f59e0b";
        } else {
          charCounter.style.color = "#64748b";
        }
      });
    }

    function validateField(field) {
      const value = field.value.trim();
      const fieldName = field.getAttribute("name");

      if (field.hasAttribute("required") && !value) {
        showError(field, "Este campo é obrigatório");
        return false;
      }

      if (fieldName === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          showError(field, "Por favor, insira um email válido");
          return false;
        }
      }

      return true;
    }

    function showError(field, message) {
      clearError(field);

      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = message;
      errorDiv.style.color = "#ef4444";
      errorDiv.style.fontSize = "0.875rem";
      errorDiv.style.marginTop = "0.25rem";

      field.parentNode.appendChild(errorDiv);
      field.style.borderColor = "#ef4444";
    }

    function clearError(field) {
      const errorDiv = field.parentNode.querySelector(".error-message");
      if (errorDiv) {
        errorDiv.remove();
      }
      field.style.borderColor = "";
    }

    // Envio do formulário (LÓGICA ATUALIZADA PARA ENVIO VIA FORMSPREE/AJAX)
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      let isValid = true;
      inputs.forEach((input) => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (!isValid) {
        showNotification("Por favor, corrija os erros no formulário.", "error");
        return;
      }

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Enviando...';

      showNotification("Enviando mensagem...", "loading");

      // Coletar dados do formulário e formatar como JSON para Formspree
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get("name"),
        _replyto: formData.get("email"), // Campo especial do Formspree para e-mail de resposta
        company: formData.get("company"),
        project: formData.get("project"),
        message: formData.get("message"),
        _subject: `Novo Contato Plural Criativo - ${formData.get("name")}`, // Campo especial para Assunto
      };

      try {
        // Envio da requisição POST para o Formspree
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        // O Formspree não retorna JSON em caso de sucesso (HTTP 200/204), apenas em caso de erro (HTTP 4xx)
        if (response.ok) {
          console.log("✅ SUCESSO: Mensagem enviada via Formspree.");
          showNotification(
            "Mensagem enviada com sucesso! Em breve entraremos em contato.",
            "success"
          );
          contactForm.reset();

          // Resetar contador de caracteres
          if (charCounter) {
            charCounter.textContent = "0/1000";
            charCounter.style.color = "#64748b";
          }
        } else {
          // Tenta ler a mensagem de erro do Formspree
          let result = {};
          try {
            result = await response.json();
          } catch (e) {
            // Ignora se não for JSON válido
          }

          const errorMessage =
            result?.error ||
            `Erro de Servidor (${response.status}). Tente novamente mais tarde.`;

          console.error("❌ FALHA:", errorMessage);
          showNotification(`Falha no envio: ${errorMessage}`, "error");
        }
      } catch (error) {
        console.error("❌ Erro de rede:", error);
        showNotification(
          "Ocorreu um erro de rede. Verifique sua conexão e tente novamente.",
          "error"
        );
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }

  // =============================================
  // 12. NOTIFICAÇÕES
  // =============================================

  function showNotification(message, type = "info") {
    // Remover notificação existente
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Criar nova notificação
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close" aria-label="Fechar">&times;</button>
      </div>
    `;

    // Estilos inline para garantir funcionamento
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      background:
        type === "error"
          ? "#ef4444"
          : type === "success"
          ? "#10b981"
          : type === "loading"
          ? "#3b82f6"
          : "#1e293b",
      color: "white",
      padding: "1rem 1.5rem",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      zIndex: "99999",
      animation: "slideIn 0.3s ease",
      maxWidth: "400px",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.95rem",
    });

    const content = notification.querySelector(".notification-content");
    Object.assign(content.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
    });

    const closeBtn = notification.querySelector(".notification-close");
    Object.assign(closeBtn.style, {
      background: "none",
      border: "none",
      color: "white",
      fontSize: "1.5rem",
      cursor: "pointer",
      padding: "0",
      lineHeight: "1",
      marginLeft: "0.5rem",
    });

    closeBtn.addEventListener("click", () => {
      notification.style.animation = "slideOut 0.3s ease";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    });

    document.body.appendChild(notification);

    // Remover automaticamente após 5 segundos (exceto loading)
    if (type !== "loading") {
      setTimeout(() => {
        if (notification.parentNode) {
          notification.style.animation = "slideOut 0.3s ease";
          setTimeout(() => notification.remove(), 300);
        }
      }, 5000);
    }

    return notification;
  }

  // =============================================
  // 13. ANIMAÇÃO DO MARQUEE
  // =============================================

  function initMarquee() {
    const marqueeTracks = document.querySelectorAll(".marquee-track");

    marqueeTracks.forEach((track) => {
      // Duplicar conteúdo para loop contínuo
      const content = track.innerHTML;
      track.innerHTML += content;
    });
  }

  // =============================================
  // 14. LAZY LOADING DE IMAGENS
  // =============================================

  function initLazyLoading() {
    const lazyImages = document.querySelectorAll("img[data-src]");

    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const dataSrc = img.getAttribute("data-src");

              // Corrigir caminho para WordPress se necessário
              let src = dataSrc;
              if (
                src &&
                !src.startsWith("http") &&
                !src.startsWith("/") &&
                !src.startsWith("data:")
              ) {
                const themePath = getThemePath();
                src = themePath + "/" + src;
              }

              img.src = src;
              img.removeAttribute("data-src");
              imageObserver.unobserve(img);

              // Adicionar classe quando carregado
              img.addEventListener("load", () => {
                img.classList.add("loaded");
              });
            }
          });
        },
        {
          rootMargin: "50px 0px",
          threshold: 0.1,
        }
      );

      lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback para navegadores antigos
      lazyImages.forEach((img) => {
        let src = img.getAttribute("data-src");
        if (src && !src.startsWith("http") && !src.startsWith("/")) {
          const themePath = getThemePath();
          src = themePath + "/" + src;
        }
        img.src = src;
      });
    }
  }

  // =============================================
  // 15. NAVEGAÇÃO ATIVA
  // =============================================

  function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-list a[href^='#']");

    let current = "";
    const scrollPos = window.scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${current}` || (current === "" && href === "#top")) {
        link.classList.add("active");
      }
    });
  }

  // =============================================
  // 16. ANIMAÇÃO DO TÍTULO HERO
  // =============================================

  function initHeroTitleAnimation() {
    const title = document.querySelector(".hero-title.fill-words");

    if (title) {
      // Adicionar classe para iniciar animação
      setTimeout(() => {
        title.classList.add("animating");
      }, 500);

      // Verificar se a animação foi concluída
      const spans = title.querySelectorAll("span");
      let completedSpans = 0;

      spans.forEach((span, index) => {
        span.addEventListener("animationend", function () {
          completedSpans++;
          if (completedSpans === spans.length) {
            title.classList.add("animation-complete");
            title.classList.remove("animating");
            console.log("✅ Animação do título concluída!");
          }
        });
      });

      // Fallback: forçar conclusão após 6 segundos
      setTimeout(() => {
        if (!title.classList.contains("animation-complete")) {
          title.classList.add("animation-complete");
          title.classList.remove("animating");
          console.log("🔄 Fallback: animação forçada para estado final");
        }
      }, 6000);
    }
  }

  // =============================================
  // 17. INICIALIZAÇÃO COMPLETA
  // =============================================

  function init() {
    console.log("🚀 Iniciando aplicação...");

    // Elementos básicos
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Inicializar componentes
    updateHeader();
    initScrollReveal();
    initPortfolio();
    initMarquee();
    initLazyLoading();
    updateActiveNav();
    initHeroTitleAnimation();

    // INICIALIZAR BOTÃO VOLTAR AO TOPO (CRÍTICO)
    initBackToTop();

    // Garantir que tudo esteja visível
    document.querySelectorAll("section").forEach((section) => {
      section.style.opacity = "1";
      section.style.visibility = "visible";
    });

    // Remover skeletons após carregamento
    document.querySelectorAll(".skeleton").forEach((el) => {
      el.classList.remove("skeleton");
    });

    console.log("✅ Aplicação inicializada com sucesso!");
  }

  // =============================================
  // 18. EVENT LISTENERS GLOBAIS
  // =============================================

  // Scroll otimizado
  window.addEventListener("scroll", throttle(updateHeader, 100));
  window.addEventListener("scroll", debounce(updateActiveNav, 50));

  // Resize handler
  window.addEventListener(
    "resize",
    debounce(() => {
      updateHeader();
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    }, 250)
  );

  // Load handler
  window.addEventListener("load", () => {
    // Garantir que o vídeo do hero esteja visível
    const heroVideo = document.querySelector(".hero-video");
    if (heroVideo) {
      heroVideo.style.opacity = "1";
    }

    // Adicionar classe loaded para possíveis animações
    setTimeout(() => {
      document.body.classList.add("loaded");
      console.log("📦 Página completamente carregada");
    }, 300);
  });

  // =============================================
  // 19. INICIALIZAR TUDO
  // =============================================

  init();

  // =============================================
  // 20. DEPURAÇÃO E TESTES
  // =============================================

  setTimeout(() => {
    console.log("=== DEBUG INFO ===");

    // Verificar elementos críticos
    const criticalElements = {
      "Botão Voltar ao Topo": document.getElementById("backToTop"),
      "Modal de Vídeo": document.getElementById("modal"),
      "Formulário de Contato": document.getElementById("contactForm"),
      "Menu Mobile": document.getElementById("navToggleSticky"),
      "Vídeo Hero": document.querySelector(".hero-video"),
    };

    Object.entries(criticalElements).forEach(([name, element]) => {
      console.log(`${name}:`, element ? "✅ Encontrado" : "❌ Não encontrado");
    });

    // Verificar imagens quebradas
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", function () {
        console.warn(`⚠️ Imagem quebrada: ${this.src}`);
        this.style.border = "2px solid #ef4444";
      });
    });
  }, 3000);

  // =============================================
  // 21. EXPORTAR FUNÇÕES PARA DEBUG
  // =============================================

  window.PluralCriativo = {
    openVideoModal,
    closeVideoModal,
    showNotification,
    updateHeader,
    updateActiveNav,
    forceShowBackToTop: () => {
      const btn = document.getElementById("backToTop");
      if (btn) {
        btn.classList.add("visible");
        btn.style.opacity = "1";
        btn.style.visibility = "visible";
        btn.style.transform = "translateY(0)";
        console.log("✅ Botão forçado a aparecer");
      }
    },
    testFormSubmission: () => {
      if (contactForm) {
        const testData = {
          name: "Teste",
          email: "teste@exemplo.com",
          message: "Esta é uma mensagem de teste",
        };

        contactForm.querySelector("#name").value = testData.name;
        contactForm.querySelector("#email").value = testData.email;
        contactForm.querySelector("#message").value = testData.message;

        console.log("📝 Formulário preenchido para teste:", testData);
        showNotification("Formulário preenchido para teste!", "info");
      }
    },
  };

  console.log("🎉 Script carregado completamente!");
});

// Animação de preenchimento do título (compatibilidade)
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".hero-title.fill-words");

  if (title) {
    // Adicionar evento para cada span
    const spans = title.querySelectorAll("span");
    spans.forEach((span) => {
      // Garantir que cada span tenha o atributo data-text
      if (!span.hasAttribute("data-text")) {
        span.setAttribute("data-text", span.textContent);
      }
    });
  }
});
