emailjs.init("eNcYqnLmmdUyRMhG-");

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_rnagssp", "template_18sz2tk", this)
      .then(
        function () {
          alert("Ihre Nachricht wurde erfolgreich erfasst!");
        },
        function (error) {
          alert("Fehler: " + JSON.stringify(error));
        }
      );
  });
