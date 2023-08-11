const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const regesterLink = document.querySelector(".register-link");
const btnPop = document.querySelector(".log-btn");
const closeIcon = document.querySelector(".close-icon");

regesterLink.addEventListener("click", (e) => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
  wrapper.classList.remove("active");
});

btnPop.addEventListener("click", (e) => {
  wrapper.classList.add("active-popup");
});

closeIcon.addEventListener("click", (e) => {
  wrapper.classList.remove("active-popup");
});

//reveal on scroll 
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}