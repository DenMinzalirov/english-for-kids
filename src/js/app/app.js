import '../header/navBar'
import renderCard from '../card/card'

const init = () => {
    console.log(renderCard());
    const main = document.querySelector('main');
    main.append(renderCard())
}

export default init