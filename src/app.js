const humbergerMenu = document.getElementById("menu");
const secondNav = document.getElementById("secondNav");
const closeBtn = document.getElementById("close")

humbergerMenu.addEventListener("click", () => {
    secondNav.classList.remove("hidden");
})

closeBtn.addEventListener("click", () => {
    secondNav.classList.add("hidden")
})