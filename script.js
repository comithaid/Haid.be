// Active / désactive le menu principal en mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Active / désactive les sous-menus en mobile au clic
function toggleSubMenu(event) {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;

    if (submenu && submenu.classList.contains("submenu")) {
        // Ferme les autres sous-menus ouverts
        document.querySelectorAll('.submenu.active').forEach(sm => {
            if (sm !== submenu) sm.classList.remove('active');
        });
        submenu.classList.toggle("active");
    }
}
