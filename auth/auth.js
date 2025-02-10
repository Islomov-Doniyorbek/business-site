const container = document.querySelector(".container");
const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
})
loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
})