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
});


/************ Pricing Plans Section ************/
let plans = document.querySelectorAll(".pricing .plan");

if(window.innerWidth >= 1200) { // Screen Width >= 1200px
  plans.forEach(plan => {
    
    plan.addEventListener("mouseenter",(e) => { // on Hover on Plan
      plans.forEach((ele) => {
        // Removing popular class from all plans
        ele.classList.remove("popular");
      });
      // Adding class to the Hovered one
      e.currentTarget.classList.add("popular");
    });
    
    // on Mouse leave => Back to Default 
    plan.addEventListener("mouseleave",(e) => {
      plans.forEach((ele) => {
        ele.classList.remove("popular");
      });
      plans[1].classList.add("popular");
    });
  });
  
}
else { // Screen Width < 1200px
  plans.forEach((plan) => {
    // All The Same
    plan.classList.remove("popular")
  })
}

/************ Our-Skills + Stats Sections ************/
let ourSkills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills span");

let stats = document.querySelector(".stats");
let statsAll = document.querySelectorAll(".stats .num");
let notExcuted = true;


window.addEventListener("scroll" , () => {
  // Skills Code
  if(window.scrollY >= ourSkills.offsetTop){
    spans.forEach((span) => {
      // Filling Levels
      span.style.width = span.dataset.progress;
    })
  }

  // Stats Code
  if(window.scrollY >= stats.offsetTop){
    if(notExcuted){
      statsAll.forEach((stat) => countUp(stat));
      notExcuted = false;
    }
  }
})


// Increamenting Statistics
function countUp(stat){
  let goal = stat.dataset.goal;
  
  let interval = setInterval(_ => {
    stat.textContent++; // Incrementing the value by 1

    if(stat.textContent === goal){ // Check If Reached goal => stop Incrementing
      clearInterval(interval);
    }
  }, 2000 / goal);
}
