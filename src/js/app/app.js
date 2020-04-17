import '../header/navBar'
import './app.css'
// import '../mainPage/mainPageItem.css'
import { actionSetA, actionSetB, actionSetС, adjective, animalSetA, animalSetB, clothes, emotion, mainPages } from '../card/data';
import renderCard from '../card/card'
// import renderGroupItem from '../mainPage/mainPageItem'
import MainPageItem from '../mainPage/mainPageItem'

// let isTrain = true;
// localStorage.setItem('isTrain', isTrain);

const main = document.querySelector('main');
const appNavigation = document.querySelector('.app-navigation');
const toggleSwitch = document.querySelector('.toggle');

const renderMainPageItem = (el, stateGame) => {
    const item = new MainPageItem(el);
    const mainPageElement = item.generateGroup(stateGame);
    return mainPageElement
}

const init = () => {
    main.innerHTML = '';
    const isTrain = JSON.parse(localStorage.getItem('isTrain'));
    const activePage = localStorage.getItem('activePage');

    if (activePage === 'mainPage') {
        mainPages.map((el) => {
            return main.append(renderMainPageItem(el, isTrain))
        })
    }
    if (activePage === 'actionSetA') {
        actionSetA.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'actionSetB') {
        actionSetB.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'actionSetC') {
        actionSetС.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'adjective') {
        adjective.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'animalSetA') {
        animalSetA.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'animalSetB') {
        animalSetB.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'clothes') {
        clothes.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'emotion') {
        emotion.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
}

toggleSwitch.addEventListener('click', () => { init() })

const clickRender = (e) => {
    const isTrain = JSON.parse(localStorage.getItem('isTrain'));
    const clickName = e.target.closest('.main-card') || e.target;

    switch (clickName.name) {
        case 'actionSetA':
            main.innerHTML = ''
            actionSetA.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'actionSetA');
            break;
        case 'actionSetB':
            main.innerHTML = ''
            actionSetB.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'actionSetB');
            break;
        case 'actionSetC':
            main.innerHTML = ''
            actionSetС.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'actionSetC');
            break;
        case 'adjective':
            main.innerHTML = ''
            adjective.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'adjective');
            break;
        case 'animalSetA':
            main.innerHTML = ''
            animalSetA.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'animalSetA');
            break;
        case 'animalSetB':
            main.innerHTML = ''
            animalSetB.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'animalSetB');
            break;
        case 'clothes':
            main.innerHTML = ''
            clothes.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'clothes');
            break;
        case 'emotion':
            main.innerHTML = ''
            emotion.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'emotion');
            break;

        default:
            break;
    }

    main.removeEventListener('click', clickRender);

    if (clickName.name === 'mainPage') {
        main.innerHTML = ''
        mainPages.map((el) => {
            return main.append(renderMainPageItem(el, isTrain))
        })
        localStorage.setItem('activePage', 'mainPage');
        main.addEventListener('click', clickRender);
    }
}

main.addEventListener('click', clickRender);
appNavigation.addEventListener('click', clickRender)

// const setStateApp = () => {
//     localStorage.setItem('isTrain', isTrain);
// console.log('setStateApp');
// localStorage.test = JSON.stringify({
//     word: 'fish',
//     translation: 'ловить рыбу',
//     image: './img/fish.jpg',
//     audioSrc: './audio/fish.mp3',
// });
// }

// setStateApp();

export default init