document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;

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

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            document.body.style.backgroundColor = event.target.id;
        });
    });
});
