var myName = "김시온";
var myAge = 18;

var themeInputs = document.querySelectorAll('input[name="theme"]');

var fontInputs = document.querySelectorAll('input[name="fontsize"]');

var widthInputs = document.querySelectorAll('input[name="width"]');

themeInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    document.documentElement.setAttribute("data-theme", input.value);
  });
});

fontInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    document.documentElement.setAttribute("data-fontsize", input.value);
  });
});

widthInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    document.documentElement.setAttribute("data-width", input.value);
  });
});
