/**
 * Carrega dinamicamente o conteúdo de service-details.html a partir
 * do parâmetro ?service=<slug> na URL, usando assets/js/services-data.js
 * como fonte de dados. Apenas conteúdo é alterado — nenhum elemento,
 * classe ou id do template é criado, removido ou renomeado.
 */
(function () {
  "use strict";

  var DEFAULT_SLUG = "ui-ux-design";

  function getRequestedSlug() {
    return new URLSearchParams(window.location.search).get("service");
  }

  function findService(services, slug) {
    return services.find(function (service) {
      return service.slug === slug;
    });
  }

  function setText(el, text) {
    if (el) el.textContent = text || "";
  }

  function setMeta(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el && content) el.setAttribute("content", content);
  }

  function updateSidebarActive(activeSlug) {
    document.querySelectorAll(".services-list a").forEach(function (link) {
      var linkUrl = new URL(link.getAttribute("href"), window.location.href);
      var isActive = linkUrl.searchParams.get("service") === activeSlug;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function renderImage(service) {
    var img = document.querySelector("#service-details .services-img");
    if (!img) return;
    img.setAttribute("src", service.image.src);
    img.setAttribute("alt", service.image.alt || "");
  }

  function renderParagraphs(paragraphs) {
    var els = document.querySelectorAll("#service-details .col-lg-8 > p");
    els.forEach(function (el, index) {
      setText(el, paragraphs[index]);
    });
  }

  function renderBenefits(benefits) {
    var spans = document.querySelectorAll("#service-details .col-lg-8 ul li span");
    spans.forEach(function (span, index) {
      var text = benefits[index];
      setText(span, text);
      var li = span.closest("li");
      if (li) li.style.display = text ? "" : "none";
    });
  }

  function renderService(service) {
    document.title = service.seo.title;
    setMeta("description", service.seo.description);
    setMeta("keywords", service.technologies.join(", "));

    setText(document.querySelector(".page-title .mb-0"), service.pageDescription);
    setText(document.querySelector(".breadcrumbs .current"), service.title);

    setText(document.querySelector("#service-details .col-lg-4 > h4"), service.introTitle);
    setText(document.querySelector("#service-details .col-lg-4 > p"), service.introText);

    renderImage(service);
    setText(document.querySelector("#service-details .col-lg-8 h3"), service.mainTitle);
    renderParagraphs(service.mainParagraphs);
    renderBenefits(service.benefits);

    updateSidebarActive(service.slug);
  }

  function renderNotFound() {
    document.title = "Serviço não encontrado — Alice Almeida";
    setMeta("description", "O serviço solicitado não foi encontrado.");

    setText(document.querySelector(".page-title .mb-0"), "O serviço que você tentou acessar não existe ou não está mais disponível.");
    setText(document.querySelector(".breadcrumbs .current"), "Serviço não encontrado");

    setText(document.querySelector("#service-details .col-lg-4 > h4"), "Serviço não encontrado");
    setText(document.querySelector("#service-details .col-lg-4 > p"), "Verifique o link acessado ou volte para a lista completa de serviços.");

    setText(document.querySelector("#service-details .col-lg-8 h3"), "Não encontramos esse serviço");

    var paragraphs = document.querySelectorAll("#service-details .col-lg-8 > p");
    if (paragraphs[0]) {
      paragraphs[0].innerHTML = 'O serviço solicitado não está disponível. <a href="services.html">Voltar para todos os serviços</a>.';
    }
    if (paragraphs[1]) paragraphs[1].textContent = "";
    if (paragraphs[2]) paragraphs[2].textContent = "";

    renderBenefits([]);
    updateSidebarActive(null);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var services = window.SERVICES;
    if (!services || !services.length) return;

    var requestedSlug = getRequestedSlug();

    if (!requestedSlug) {
      renderService(findService(services, DEFAULT_SLUG) || services[0]);
      history.replaceState(null, "", "service-details.html?service=" + DEFAULT_SLUG);
      return;
    }

    var service = findService(services, requestedSlug);
    if (service) {
      renderService(service);
    } else {
      renderNotFound();
    }
  });
})();
