const darkModeButton = document.getElementById('dark-mode');
const lightModeButton = document.getElementById('light-mode');
const systemModeButton = document.getElementById('system-mode');

function applyTheme(theme) {
    document.body.className = theme;
    const container = document.querySelector('.container');
    container.className = 'container ' + theme;
}

darkModeButton.addEventListener('click', () => applyTheme('dark-mode'));
lightModeButton.addEventListener('click', () => applyTheme('light-mode'));
systemModeButton.addEventListener('click', () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
        applyTheme('dark-mode');
    } else {
        applyTheme('light-mode');
    }
});