var counterValue1 = document.getElementById("counter-value-1");
var counterValue2 = document.getElementById("counter-value-2");
var counterValue3 = document.getElementById("counter-value-3");
var counterValue4 = document.getElementById("counter-value-4");

var btnPlus = document.querySelectorAll(".btn-plus");
var btnMinus = document.querySelectorAll(".btn-minus");

var initialValue = 1;
counterValue1.innerText = initialValue;
counterValue2.innerText = initialValue;
counterValue3.innerText = initialValue;
counterValue4.innerText = initialValue;

btnPlus.forEach(function(button) {
  button.addEventListener("click", function() {
    var currentValue = parseInt(this.previousElementSibling.innerText);
    var newValue = currentValue + 1;
    this.previousElementSibling.innerText = newValue;
  });
});

btnMinus.forEach(function(button) {
  button.addEventListener("click", function() {
    var currentValue = parseInt(this.nextElementSibling.innerText);
    if (currentValue > 1) {
      var newValue = currentValue - 1;
      this.nextElementSibling.innerText = newValue;
    }
  });
});