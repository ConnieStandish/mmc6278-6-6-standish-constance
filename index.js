// Hamburger menu should only render on smaller screen sizes < 800px
// To hide or show hamburger menu toggle .show-menu on the .hamburger-menu element
//HTML and CSS already set up, but look over documents

//Requirements
//1. When button.hamburger-btn is clicked on smaller screens, menu should open and close. Again, toggling .show-menu class on .hamburger-menu element should show & hide menu.

//2. Clicking outside .hamburger-menu should close it.

//3. Clicking inside .hamburger-menu should NOT close it.

//4. Pressing Escape key shoudl close menu and focus button.hamburger-btn

//5. When menu is open, aria-expanded is set to true on button.hamburger-btn, and false when closed. 

var hamMenu = document.querySelector('.menu')
var hamBtn = document.querySelector('.hamburger-btn button')
var showMenu = document.querySelector('.hamburger-menu')
var closeMenu = document.querySelector('#main-menu')
