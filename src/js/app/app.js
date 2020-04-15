import '../header/navBar'
import './app.css'
import cards from '../card/data';
import renderCard from '../card/card'

const init = () => {
    const main = document.querySelector('main');
    cards.map((el) => {
        return main.append(renderCard(el))
    })
}

export default init