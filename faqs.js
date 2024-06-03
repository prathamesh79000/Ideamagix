document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll(".toggle-faq");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var content = this.parentElement.nextElementSibling;
      var icon = this.querySelector("img");

      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        content.style.marginLeft = "50px";
        icon.src = "public/minus.png";
      } else {
        content.style.display = "none";
        content.style.marginLeft = "0";
        icon.src = "public/add.png";
      }
    });
  });
});
