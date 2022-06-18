// Hamburger menu should only render on smaller screen sizes < 800px
// To hide or show hamburger menu toggle .show-menu on the .hamburger-menu element
//HTML and CSS already set up, but look over documents

//Requirements
//1. When button.hamburger-btn is clicked on smaller screens, menu should open and close. Again, toggling .show-menu class on .hamburger-menu element should show & hide menu.

//2. Clicking outside .hamburger-menu should close it.

//3. Clicking inside .hamburger-menu should NOT close it.

//4. Pressing Escape key should close menu and focus button.hamburger-btn

//5. When menu is open, aria-expanded is set to true on button.hamburger-btn, and false when closed. 

var menu = document.querySelector('.menu')
var icon = document.querySelector('.hamburger-btn')
var mainMenu = document.querySelector('.hamburger-menu')
var bannerImg = document.querySelector('.banner')
var main = document.querySelector('main')
var section = document.querySelector('section')
var footer = document.querySelector('footer')

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

// icon.onclick = function(e) {
//     if (mainMenu.contains(e.target)) 
//         launchMenu()
// }

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











