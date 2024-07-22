const menu = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger-btn")
burgerBtn.addEventListener('click', function () {
    menu.classList.toggle("active__nav")
})

