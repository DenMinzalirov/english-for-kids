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
            <audio id=${this.word} src=${this.audioSrc}></audio>
         </figure>`;
        const rotateNod = cardItem.querySelector('.rotate');
        const cardFlip = cardItem.querySelector('.card-flip');
        rotateNod.addEventListener('click', () => {
            cardFlip.classList.add('activeRotate');
        })
        cardFlip.addEventListener('mouseleave', () => {
            cardFlip.classList.remove('activeRotate');
        })
        cardItem.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                const play = document.getElementById(this.word)
                play.play();
            }
        })
        return cardItem
    }
}

const renderCard = (card) => {
    const item = new Card(card)
    return item.generateCard()
}

export default renderCard