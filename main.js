var $myForm = document.querySelector("#myForm");

var $nameOne = document.querySelector("#nameOne");
var $nameTwo = document.querySelector("#nameTwo");

var $disappear = document.querySelector("#disappear");
var $number = document.querySelector("#number");

window.onload = main();

function main() {
  $myForm.addEventListener("submit", checkValue);

  function checkValue() {
    event.preventDefault();

    var $alphabet = /^[A-Za-z]+$/;

    if ($nameOne.value.match($alphabet) && $nameTwo.value.match($alphabet)) {
      console.log("True");
      calculateNum();
      return true;
    } else if ($nameOne.value || $nameTwo.value === "") {
      console.log("Error1");
      errorMessage();
      return false;
    }
  }
}

function calculateNum() {
  $disappear.innerHTML = "";
  $number.innerHTML = Math.floor(Math.random() * 100) + "%";
}

function errorMessage() {
  var $error = document.getElementById("error");
  $error.style.visibility = "visible";
  $error.innerHTML = "Please Enter Valid Name";

  setTimeout(function (hidden) {
    $error.style.display = "none";
  }, 3000);
}
