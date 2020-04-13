const toggleBtn = document.getElementById('toggle-menu');
const appNavigation = document.querySelector('.app-navigation');
const toggleSwitch = document.querySelector('.toggle');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('on');
    appNavigation.classList.toggle('active')
});

toggleSwitch.addEventListener('click', () => {
    toggleSwitch.classList.toggle('toggle-on');
})