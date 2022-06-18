var menu = document.querySelector('.menu')
var icon = document.querySelector('.hamburger-btn')
var mainMenu = document.querySelector('.hamburger-menu')

function closeMenu() {
    mainMenu.classList.remove('show-menu')
}

function launchMenu() {
    if (mainMenu.classList.contains('show-menu')) {
        closeMenu()
        icon.ariaExpanded = 'false'
        
    } else {
        mainMenu.classList.add('show-menu') 
        icon.ariaExpanded = 'true'
    }
}

icon.onclick = launchMenu

document.body.onclick = function(e) {
    if (!menu.contains(e.target)) {
        closeMenu()
    }
}

document.onkeyup = function(e) {
    if (e.key === 'Escape')
    closeMenu()
    icon.focus()
}











