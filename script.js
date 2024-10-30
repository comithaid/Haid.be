// Contrôle l'affichage du menu en mode mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Contrôle l'affichage des sous-menus au clic en mobile
function toggleSubMenu(event) {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;

    if (submenu && submenu.classList.contains("submenu")) {
        document.querySelectorAll('.submenu.active').forEach(sm => {
            if (sm !== submenu) sm.classList.remove('active');
        });
        submenu.classList.toggle("active");
    }
}
