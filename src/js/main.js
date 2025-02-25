document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector('.nav').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetId === 'hero') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});