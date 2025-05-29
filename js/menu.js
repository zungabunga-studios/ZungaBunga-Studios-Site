function OpenMenu() {
    let menu = document.getElementById('itens')
    let icon = document.getElementById('menu-open')

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        icon.className = 'fa-solid fa-bars'
    } else {
        menu.style.display = 'block'
        icon.className = 'fa-solid fa-caret-down'
    }
}

function High() {
    let menu = document.getElementById('itens')

    if (window.innerWidth >= 760) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    }
}