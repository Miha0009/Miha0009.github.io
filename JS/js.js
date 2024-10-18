const asideMenu = document.getElementById('aside-menu');
const asideToggle = document.getElementById('aside-toggle');
asideToggle.addEventListener('click', () => {
    asideMenu.classList.toggle('open');
});
