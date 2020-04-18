alert("Please Enter Name");

function main() {

const name = document.getElementById("yourName")
const name2 = document.getElementById("otherName")
const form = document.getElementById("myForm")
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    
    e.preventDefault()

    
    if (name.value === '' || name.value == null) {
        //errorElement.innerText = ("Please Enter Name");
        //alert("Please Enter Name");
        return
    }
}

function btn() {
  document.getElementById("disappear").innerHTML = "";
  document.getElementById("number").innerHTML =
    Math.floor(Math.random() * 100) + "%";
}

}

document.onload = main