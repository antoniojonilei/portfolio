const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")
const home = document.querySelector("#clicou")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active")
    navMenu.classList.toggle("active")
    home.classList.toggle("active")
})