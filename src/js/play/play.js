const playSound = (arr) => {
    arr[0].play();
}
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

const playGame = (isTrain) => {
    const playDiv = document.createElement('div');
    playDiv.classList.add('start');
    playDiv.textContent = 'Start Game';

    if (!isTrain) {
        playDiv.classList.add('active');
    }

    const startListener = () => {
        const allCardAudio = document.querySelectorAll('.audio');
        const allCardImg = document.querySelectorAll('.gameImg');
        const correct = document.getElementById('correct');
        const error = document.getElementById('error');
        const success = document.getElementById('success');
        const failure = document.getElementById('failure');
        const playArr = [];
        playArr.push(...allCardAudio);
        shuffle(playArr);
        playSound(playArr);
        playDiv.textContent = 'Repeat';
        playDiv.removeEventListener('click', startListener);
        playDiv.addEventListener('click', () => {
            playSound(playArr);
        })

        const gameListener = (e) => {
            if (playArr.length === 1) {
                const main = document.querySelector('main');
                main.innerHTML = `
                <img class="vin" src='./img/success.jpg' alt="">`;
                success.play();
                // localStorage.setItem('activePage', 'mainPage');
                // localStorage.setItem('isTrain', 'true');
                // setTimeout(() => {
                //     init();
                // }, 1000);
                console.log('vin');
            }
            const rating = document.querySelector('.rating');
            const star = document.createElement('div');
            star.classList.add('star');
            if (e.target.id === playArr[0].id && playArr.length > 0) {
                e.target.removeEventListener('click', gameListener)
                playArr.splice(0, 1);
                e.target.classList.add('guessed');
                correct.play();
                rating.append(star);
                setTimeout(() => {
                    if (playArr.length !== 0) {
                        playSound(playArr);
                    }
                }, 500);
            } else {
                error.play();
                star.classList.add('black');
                rating.append(star);
            }
        }

        allCardImg.forEach((el) => {
            el.addEventListener('click', gameListener);
        })
    }

    playDiv.addEventListener('click', startListener);

    return playDiv;
}

export default playGame