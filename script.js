// script.js

// Fonction pour afficher / masquer le menu en mode mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Fonction pour afficher / masquer les sous-menus au clic
function toggleSubMenu(event) {
    event.preventDefault(); // Empêche le lien de se comporter comme un lien classique
    const submenu = event.target.nextElementSibling;

    // On vérifie si le sous-menu existe
    if (submenu && submenu.classList.contains("submenu")) {
        submenu.classList.toggle("active");
    }
}
