/************ Event Count Down ************/
let dateEvent = new Date("Dec 31,2025").getTime();


let counter = setInterval(() => {

  let dateNow = new Date().getTime();
  let dateDiff = dateEvent - dateNow;


  let days = Math.floor(dateDiff /(1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

  document.querySelector(".days").textContent = days < 10 ? `00-${days}` : days < 100 ? `0-${days}` : days;
  document.querySelector(".hours").textContent = hours < 10 ? `00-${hours}` : hours < 100 ? `0-${hours}` : hours;
  document.querySelector(".minutes").textContent = minutes < 10 ? `00-${minutes}` : minutes < 100 ? `0-${minutes}` : minutes;
  document.querySelector(".seconds").textContent = seconds < 10 ? `00-${seconds}` : seconds < 100 ? `0-${seconds}` : seconds;
  

},1000)

/************ Check On Forms ************/
let forms = document.forms;
forms = Array.from(forms);

forms.forEach((form) => {

  // Get All inputs and text areas inside each form /* Except submit input */
  let inputFields = form.querySelectorAll("input:not([type='submit']) , textarea");

  checkSessionStorage(inputFields); // Check if there are inputs in session storage
  setSessionStorage(inputFields); // set values in session storage

  form.addEventListener("submit" , (event) => inputIsEmpty(inputFields,event));
});


function setSessionStorage(inputFields) {
  inputFields.forEach((input) => {
    input.addEventListener("input",(ele) => {
      // Setting Inputs in Session Storage
      window.sessionStorage.setItem(ele.currentTarget.dataset.name , ele.currentTarget.value);
    });
  })
}

function checkSessionStorage(inputFields){
  inputFields.forEach((input) => {
    if(window.sessionStorage.getItem(input.dataset.name)){
      // if Value in Session Storage => get in the Field
      input.value = window.sessionStorage.getItem(input.dataset.name);
    }
  })
}

function inputIsEmpty(inputFields,event){
  inputFields.forEach((input) => {
    // Check If any input is empty 
    if(input.value === ""){
      // the form won't sent
      event.preventDefault();
    }
  })
}

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
  if(window.scrollY >= ourSkills.offsetTop - 500){
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
