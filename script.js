document.addEventListener('DOMContentLoaded', () => {
    const createStars = (containerId, count, size) => {
        const container = document.getElementById(containerId);
        let boxStyles = '';
        
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            boxStyles += `${x}px ${y}px #FFF${i < count - 1 ? ',' : ''}`;
        }
        
        container.style.boxShadow = boxStyles;
        container.style.width = `${size}px`;
        container.style.height = `${size}px`;
    };

    // Generate different layers of stars for parallax effect
    createStars('stars', 700, 1);
    createStars('stars2', 200, 2);
    createStars('stars3', 100, 3);

    // Subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const card = document.getElementById('main-card');
        const planet = document.getElementById('hero-planet');
        
        if (card) {
            card.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        }
        
        if (planet) {
            planet.style.transform = `translate(${x * -20}px, ${y * -20}px) rotate(${x * 5}deg)`;
        }
    });
});
