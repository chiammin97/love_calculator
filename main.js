function $(el) {
  return document.getElementById(el);
}

//document.getElemenById(el) gets the elements with id "el"
//el used to generate DOM elements
//$ used so that it wont clash with other codes in the page

function main() {
  $("myForm").addEventListener(
    "submit",
    (e) => {
      e.preventDefault();

      if (!$("yourName").value || !$("otherName").value) {
        alert("Please Enter Name");
        return false;
      }

      $("disappear").innerHTML = "";
      $("number").innerHTML = Math.floor(Math.random() * 100) + "%";
    },
    false
  );
}

// => means transform from _ to _ ??

// Ensure document is loaded before the script executes.
window.onload = main;

//must make the only alphabets in the search box
