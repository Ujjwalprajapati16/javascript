document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;

    projectLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#f39c12';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = body.classList.contains('dark-mode') ? '#444' : '#ddd';
        });
    });

    themeSwitcher.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeSwitcher.innerText = 'Switch to Dark Theme';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeSwitcher.innerText = 'Switch to Light Theme';
        }
    });

    // Initialize theme based on preference or default to dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        body.classList.add('light-mode');
        themeSwitcher.innerText = 'Switch to Dark Theme';
    } else {
        body.classList.add('dark-mode');
        themeSwitcher.innerText = 'Switch to Light Theme';
    }
});
