/**
 * Envio do formulário de contato via Web3Forms (https://web3forms.com).
 * Substitui assets/vendor/php-email-form/validate.js apenas em contact.html,
 * já que o backend passou de um script PHP para um endpoint que responde em
 * JSON. As mesmas classes (.loading, .error-message, .sent-message) e o
 * mesmo comportamento visual do formulário original são mantidos.
 */
(function () {
  "use strict";

  var form = document.querySelector(".php-email-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var action = form.getAttribute("action");
    if (!action) {
      displayError("A propriedade action do formulário não está definida!");
      return;
    }

    form.querySelector(".loading").classList.add("d-block");
    form.querySelector(".error-message").classList.remove("d-block");
    form.querySelector(".sent-message").classList.remove("d-block");

    var formData = new FormData(form);

    fetch(action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        return response.json().then(function (data) {
          return { ok: response.ok, data: data };
        });
      })
      .then(function (result) {
        form.querySelector(".loading").classList.remove("d-block");
        if (result.ok && result.data && result.data.success) {
          form.querySelector(".sent-message").classList.add("d-block");
          form.reset();
        } else {
          throw new Error((result.data && result.data.message) || "Não foi possível enviar a mensagem.");
        }
      })
      .catch(function (error) {
        displayError(error.message || error);
      });
  });

  function displayError(error) {
    form.querySelector(".loading").classList.remove("d-block");
    form.querySelector(".error-message").innerHTML = error;
    form.querySelector(".error-message").classList.add("d-block");
  }
})();
