const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    const menuIcon = document.querySelector(".header-menu-mobile .material-symbols-outlined");

    menu.classList.toggle("active");

    // Changer l'icône du bouton
    if (menu.classList.contains("active")) {
        menuIcon.textContent = "close"; // Icône de fermeture
    } else {
        menuIcon.textContent = "menu"; // Icône de menu
    }
};

// Fonction pour ajuster le défilement avec offset
const scrollToSection = (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut du lien

    const targetId = event.target.getAttribute("href"); // Récupérer l'ID de la section cible
    const targetSection = document.querySelector(targetId); // Sélectionner la section cible

    if (targetSection) {
        let targetPosition;

        // Cas spécial pour "Accueil" (défilement vers le haut de la page)
        if (targetId === "#accueil") {
            targetPosition = 0; // Défilement vers le haut
        } else {
            // Pour les autres sections, appliquer l'offset de la hauteur du header
            const headerHeight = document.querySelector("header").offsetHeight;
            targetPosition = targetSection.offsetTop - headerHeight;
        }

        // Défilement fluide vers la section cible
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        // Fermer le menu mobile après le clic
        const menu = document.querySelector(".header-menu");
        const menuIcon = document.querySelector(".header-menu-mobile .material-symbols-outlined");
        menu.classList.remove("active");
        menuIcon.textContent = "menu";
    }
};

// Ajouter un écouteur d'événement à chaque lien du menu
document.querySelectorAll(".header-menu a").forEach(link => {
    link.addEventListener("click", scrollToSection);
});

// Ajouter un écouteur d'événement à chaque lien du menu
document.querySelectorAll(".header-menu a").forEach(link => {
    link.addEventListener("click", scrollToSection);
});

// Fermer le menu après un clic sur un lien
document.querySelectorAll(".header-menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".header-menu");
        const menuIcon = document.querySelector(".header-menu-mobile .material-symbols-outlined");

        // Fermer le menu
        menu.classList.remove("active");
        menuIcon.textContent = "menu"; // Revenir à l'icône "menu"
    });
});

// Affichage des compétences (texte animé)
document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        "Data & AI Engineer",
        "Data Analyst",
        "Administrateur de Base de Données",
        "Administrateur Réseaux",
        "Développeur Python, PHP, Laravel, ..."
    ];

    const typedText = document.getElementById("typed-text");
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typedText.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            typedText.textContent = currentPhrase.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length + 1) {
            isDeleting = true;
            speed = 1500; // Pause avant de supprimer
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 500; // Pause avant d'écrire la prochaine phrase
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});