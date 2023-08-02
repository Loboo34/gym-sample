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
