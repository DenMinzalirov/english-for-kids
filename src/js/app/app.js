import '../header/navBar'
import './app.css'
// import '../mainPage/mainPageItem.css'
import { actionSetA, actionSetB, actionSetС, adjective, animalSetA, animalSetB, clothes, emotion, mainPages } from '../card/data';
import renderCard from '../card/card'
// import renderGroupItem from '../mainPage/mainPageItem'
import MainPageItem from '../mainPage/mainPageItem'

const isTrain = true;
const main = document.querySelector('main');

const clickRender = (e) => {
    if (e.target.closest('.main-card')) {
        console.log(e.target.closest('.main-card').name)
    }
    if (e.target.closest('.main-card').name === 'actionSetA') {
        main.innerHTML = ''
        actionSetA.map((el) => {
            return main.append(renderCard(el))
        })
    }
    if (e.target.closest('.main-card').name === 'actionSetB') {
        main.innerHTML = ''
        actionSetB.map((el) => {
            return main.append(renderCard(el))
        })
    }
    if (e.target.closest('.main-card').name === 'actionSetC') {
        main.innerHTML = ''
        actionSetС.map((el) => {
            return main.append(renderCard(el))
        })
    }
    if (e.target.closest('.main-card').name === 'adjective') {
        main.innerHTML = ''
        adjective.map((el) => {
            return main.append(renderCard(el))
        })
    }
    if (e.target.closest('.main-card').name === 'animalSetA') {
        main.innerHTML = ''
        animalSetA.map((el) => {
            return main.append(renderCard(el))
        })
    }
    if (e.target.closest('.main-card').name === 'animalSetB') {
        main.innerHTML = ''
        animalSetB.map((el) => {
            return main.append(renderCard(el))
        })
    }
    if (e.target.closest('.main-card').name === 'clothes') {
        main.innerHTML = ''
        clothes.map((el) => {
            return main.append(renderCard(el))
        })
    }
    if (e.target.closest('.main-card').name === 'emotion') {
        main.innerHTML = ''
        emotion.map((el) => {
            return main.append(renderCard(el))
        })
    }

    main.removeEventListener('click', clickRender)
}

main.addEventListener('click', clickRender)

const setStateApp = () => {
    localStorage.setItem('isTrain', isTrain);
    // console.log('setStateApp');
    // localStorage.test = JSON.stringify({
    //     word: 'fish',
    //     translation: 'ловить рыбу',
    //     image: './img/fish.jpg',
    //     audioSrc: './audio/fish.mp3',
    // });
    console.log(JSON.parse(localStorage.getItem('isTrain')))
}

const renderMainPageItem = (el) => {
    const item = new MainPageItem(el);
    const mainPageElement = item.generateGroup();
    return mainPageElement
}

const init = () => {
    setStateApp();


    // render()

    mainPages.map((el) => {
        return main.append(renderMainPageItem(el))
    })

    // cards.map((el) => {
    //     return main.append(renderCard(el))
    // })
}



export default init