/* =========================================================
   우리반 백과 - script.js
   지금은 비어 있습니다.
   2차시부터 이 파일에 '외관' 패널을 움직이는 코드를 넣습니다.
   ========================================================= */

var myName = "김시온";
var myAge = 18;

input.addEventListener("change", function (){ ... });

var themeInputs = document.querySelectorAll('input[name="theme"]');

var fontInputs = document.querySelectorAll('input[name="fontsize"]');

fontInputs.forEach(function (input) {
   input.addEventListener("change", function () {
      document.documentElement.setAttribute("data-fontsize", input.value);
   });
});

// html 태그의 data-theme 값을 다크(dark) 모드로 바꿔라!
document.documentElement.setAttribute("data-theme", input.value);
