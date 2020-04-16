import './mainPageItem.css'

class MainPageItem {
    constructor({ wordGroup, imgGroup, name }) {
        this.wordGroup = wordGroup;
        this.imgGroup = imgGroup;
        this.name = name;
    }

    generateGroup() {
        const groupdItem = document.createElement('div');
        groupdItem.classList.add('card-container');
        groupdItem.innerHTML = `
            <a class="main-card" name=${this.name}>
                <img src=${this.imgGroup} alt=${this.wordGroup}>${this.wordGroup}
            </a>
        `
        // groupdItem.addEventListener('click', (e) => {
        //     if (e.target.closest('.main-card')) {
        //         console.log(e.target.closest('.main-card').innerText)
        //     }
        //     const main = document.querySelector('main');
        //     // main.innerHTML = ''
        // })
        return groupdItem
    }
}

// const renderGroupItem = (groupdItem) => {
//     const item = new MinPageItem(groupdItem)
//     return item.generateGroup()
// }

export default MainPageItem