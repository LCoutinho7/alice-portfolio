/**
 * Carrega dinamicamente o conteúdo de portfolio-details.html a partir
 * do parâmetro ?project=<slug> na URL, usando assets/js/projects-data.js
 * como fonte de dados. Apenas conteúdo é alterado — nenhum elemento,
 * classe ou id do template é criado, removido ou renomeado.
 */
(function () {
  "use strict";

  function getRequestedSlug() {
    return new URLSearchParams(window.location.search).get("project");
  }

  function findProject(projects, slug) {
    return projects.find(function (project) {
      return project.slug === slug;
    });
  }

  function setMeta(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el && content) el.setAttribute("content", content);
  }

  function renderProject(project) {
    document.title = project.title + " — Alice Almeida";
    setMeta("description", project.pageDescription);
    setMeta("keywords", project.category);

    var heroText = document.querySelector(".page-title .mb-0");
    if (heroText) heroText.textContent = project.pageDescription;

    var infoItems = document.querySelectorAll(".portfolio-info ul li");
    if (infoItems.length >= 4) {
      infoItems[0].innerHTML = "<strong>Categoria</strong>: " + project.category;
      infoItems[1].innerHTML = "<strong>Cliente</strong>: " + project.client;
      infoItems[2].innerHTML = "<strong>Data do projeto</strong>: " + project.projectDate;
      infoItems[3].innerHTML = '<strong>URL do projeto</strong>: <a href="' + project.projectUrl + '" target="_blank" rel="noopener">' + project.projectUrlLabel + "</a>";
    }

    var descriptionHeading = document.querySelector(".portfolio-description h2");
    if (descriptionHeading) descriptionHeading.textContent = project.overviewTitle;

    var descriptionText = document.querySelector(".portfolio-description p");
    if (descriptionText) {
      descriptionText.textContent = [
        project.overview,
        project.challenge,
        project.process,
        project.solution,
        project.results
      ].filter(Boolean).join(" ");
    }

    var slideImages = document.querySelectorAll(".portfolio-details-slider .swiper-slide img");
    slideImages.forEach(function (img, index) {
      var image = project.images[index];
      if (!image) return;
      img.setAttribute("src", image.src);
      img.setAttribute("alt", image.alt || "");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var projects = window.PORTFOLIO_PROJECTS;
    if (!projects || !projects.length) return;

    var project = findProject(projects, getRequestedSlug()) || projects[0];
    renderProject(project);
  });
})();
