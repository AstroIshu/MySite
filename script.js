// Music
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const container = document.querySelector('.container');
    const backgroundMusic = document.getElementById('background-music');
    const hiddenButton = document.getElementById('hidden-button');

    const minimumLoadTime = 1000; // Minimum load time in milliseconds
    const loadStartTime = performance.now();

    window.addEventListener('load', () => {
        const elapsedTime = performance.now() - loadStartTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

        setTimeout(() => {
            loader.style.opacity = '0';
            container.classList.add('loaded');

            // Simulate a click event to trigger audio playback
            hiddenButton.click();

            // Remove loader from DOM after fade out
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, remainingTime);
    });

    // Play audio when the hidden button is clicked
    hiddenButton.addEventListener('click', () => {
        backgroundMusic.play().catch(error => {
            console.error('Failed to play background music:', error);
        });
    });
});
  

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Loader
document.addEventListener('DOMContentLoaded', () => {

    // Enhanced loader handling
    const loader = document.querySelector('.loader');
    const container = document.querySelector('.container');

    // Ensure animation plays for at least 5 seconds
    const minimumLoadTime = 5000;
    const loadStartTime = performance.now();

    window.addEventListener('load', () => {
        const elapsedTime = performance.now() - loadStartTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

        // Wait for minimum time before hiding loader
        setTimeout(() => {
            loader.style.opacity = '0';
            container.classList.add('loaded');

            // Remove loader from DOM after fade out
            setTimeout(() => {
                loader.remove();
            }, 2000);
        }, remainingTime);
    });
});
