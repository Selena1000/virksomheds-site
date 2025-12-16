document.addEventListener("DOMContentLoaded", function () {
  //
  const form = document.getElementById("kontaktFormular");
  const succesBesked = document.getElementById("succesBesked");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      form.style.display = "none";

      succesBesked.style.display = "block";

      form.reset();
    });
  }
});
