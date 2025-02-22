/************ For the Mega-Menu Toggle ************/
let lastLi = document.querySelector("header .last-li");
let megaMenu = document.querySelector("header .menu"); // Returns Anchor tag

// On Click on the Other Links
lastLi.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents it from going to link
  megaMenu.classList.toggle("active"); // Toggles the Class Active to the Mega-Menu
})


/************ Latest Events Section ************/
let inputEmail = document.querySelector(".events input");

// check if There is input in Session Storage
if(window.sessionStorage.getItem("email")){
  inputEmail.value = window.sessionStorage.getItem("email");
}

// On input => the input will be stored in the session storage
inputEmail.addEventListener("input",(e) => {
  window.sessionStorage.setItem("email",e.currentTarget.value);
});

document.forms[0].addEventListener("submit", (e) => {
  // Check if input field is empty
  if(inputEmail.value === ""){
    e.preventDefault();
  }
  else {
    e.preventDefault();
    // => my Linkedin
    window.location.assign("https://www.linkedin.com/in/abdalrahman-gamal-0972202a4");
  }
})