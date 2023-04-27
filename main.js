const menu = document.getElementById('menu')
const openBtn = document.getElementById('open')

openBtn.addEventListener('click', function () {
    menu.classList.toggle ('active')
    console.log('here')
})