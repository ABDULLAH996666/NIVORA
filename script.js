// NIVORA smooth button navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Product button demo
document.querySelectorAll(".product-card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("NIVORA product page coming soon.");
    });
});