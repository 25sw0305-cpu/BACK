var myName = "김시온";
var myAge = 18;

var themeInputs = document.querySelectorAll('input[name="theme"]');

var fontInputs = document.querySelectorAll('input[name="fontsize"]');

themeInputs.forEach(function (input) {
   input.addEventListener("change", function () {
      // html 태그의 data-theme 값을 다크(dark) 모드로 바꿔라!
      document.documentElement.setAttribute("data-theme", input.value);
   });
});

fontInputs.forEach(function (input) {
   input.addEventListener("change", function () {
      document.documentElement.setAttribute("data-fontsize", input.value);
   });
});
