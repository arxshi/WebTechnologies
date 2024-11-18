document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbar = document.querySelector(".navbar");
    const linksContainer = document.querySelector(".navbar .links-container");

    
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navbar.classList.toggle("active");       
    });

    
    linksContainer.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            hamburgerMenu.classList.remove("active");
            navbar.classList.remove("active");
        }
    });
});
