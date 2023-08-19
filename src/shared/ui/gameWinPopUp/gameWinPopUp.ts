import './gameWinPopUp.css';
import { resetProgress } from '../../../features/resetProgress/model/resetProgress';

export const winPopUp = document.createElement('div');
winPopUp.classList.add('win-popup');

const winImage = document.createElement('img');
winImage.src = require('./../../../assets/img/win-image.png');
winImage.alt = 'you-win-image';

const closeBtn = document.createElement('div');
closeBtn.classList.add('win-popup__close-btn');
closeBtn.innerText = '✖';

winPopUp.append(winImage, closeBtn);

export function showWinMessage(): void {
    winPopUp.classList.add('open');
}

closeBtn.addEventListener('click', () => {
    winPopUp.classList.remove('open');
    resetProgress();
});
