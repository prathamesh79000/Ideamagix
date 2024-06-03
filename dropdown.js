document.addEventListener("DOMContentLoaded", function () {
  const selectedFlag = document.getElementById("selected-flag");
  const selectElement = document.getElementById("country");

  selectElement.addEventListener("change", function () {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const flag = selectedOption.getAttribute("data-flag");
    selectedFlag.src = flag;
  });
});
