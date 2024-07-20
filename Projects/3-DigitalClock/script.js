const clock = document.getElementById('clock');
const themeSwitcher = document.getElementById('theme-switcher');

function updateTime() {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  themeSwitcher.textContent = document.body.classList.contains('dark-theme')
    ? 'Switch to Light Theme'
    : 'Switch to Dark Theme';
});
