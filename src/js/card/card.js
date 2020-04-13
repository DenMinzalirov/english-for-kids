import cards from './data';
import './card.css'



class Card {
    constructor({ word, translation, image, audioSrc }) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;
    }

    generateCard() {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card-container');
        cardItem.innerHTML =
            `<figure class="card card-flip">
            <div class="card">
               <img class="card-img-top img-fluid" src=${this.image} alt="">
               <div class="card-footer bg-aqua">
                    ${this.word}
                    <div class="rotate"></div>
               </div>
            </div>
            <div class="card">
                <img class="card-img-top img-fluid" src=${this.image} alt="">
                <div class="card-footer bg-aqua">
                    ${this.translation}
                </div>
            </div>
         </figure>`;
        const rotateNod = cardItem.querySelector('.rotate');
        const cardFlip = cardItem.querySelector('.card-flip');
        console.log('rotateNod', rotateNod);
        rotateNod.addEventListener('click', () => {
            cardFlip.classList.add('activeRotate');
            console.log('click', cardFlip);
        })
        cardFlip.addEventListener('mouseleave', () => {
            cardFlip.classList.remove('activeRotate');
        })
        return cardItem
    }
}

const renderCard = () => {
    console.log('cards data', cards)
    const item = new Card(cards)
    return item.generateCard()
}

export default renderCard