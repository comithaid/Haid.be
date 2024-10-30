// Fonction pour le menu principal en mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Fonction pour activer/désactiver les sous-menus en mobile au clic
document.querySelectorAll(".menu ul > li > a").forEach(link => {
    link.addEventListener("click", function(event) {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
            event.preventDefault();
            submenu.classList.toggle("active");

            // Ferme les autres sous-menus actifs
            document.querySelectorAll('.submenu.active').forEach(sm => {
                if (sm !== submenu) sm.classList.remove('active');
            });
        }
    });
});
