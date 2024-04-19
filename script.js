document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth scroll animation for navigation links
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const targetOffset = targetSection.offsetTop;

            window.scrollTo({
                top: targetOffset,
                behavior: "smooth"
            });
        });
    });

    // Hover effect on navigation links
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.2)"; // Enlarge on hover
        });

        navLink.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)"; // Reset on mouse leave
        });
    });
});
