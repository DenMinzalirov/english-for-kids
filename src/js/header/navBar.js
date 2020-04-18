const toggleBtn = document.getElementById('toggle-menu');
const appNavigation = document.querySelector('.app-navigation');
const toggleSwitch = document.querySelector('.toggle');
const toggleSwitchBtn = document.querySelector('.toggle-button');
const navLinlBtn = document.querySelectorAll('.nav-link');


appNavigation.addEventListener("click", e => {
    if (e.target.className === "nav-link") {
        navLinlBtn.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.classList.add('active');
    }
});

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('on');
    appNavigation.classList.toggle('active')
});

toggleSwitch.addEventListener('click', (e) => {
    // const start = document.querySelector('.start');
    toggleSwitch.classList.toggle('toggle-on');
    toggleSwitchBtn.classList.toggle('green');

    if (e.target.parentElement.className.includes('toggle-on')) {
        localStorage.setItem('isTrain', false);
        // start.classList.add('active');
    } else {
        localStorage.setItem('isTrain', true);
        // start.classList.remove('active');
    }
})

appNavigation.addEventListener('click', () => {
    appNavigation.classList.toggle('active')
    toggleBtn.classList.remove('on');
})