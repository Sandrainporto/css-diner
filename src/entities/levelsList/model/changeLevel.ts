import { gameLevels } from '../../../shared/ui/gameLevels/gameLevels';
import { highlightCodeAndItems } from '../../../shared/utils/highlight';
import { showLevelsCode } from './showLevelsCode';
import { clearFields } from '../../../shared/utils/clearFields';

export function changeLevel(): void {
    const background: HTMLImageElement = document.createElement('img');
    background.classList.add('table-background');
    background.alt = 'table-backgroung';
    document.querySelector('.table')?.append(background);

    const room: HTMLDivElement = document.createElement('div');
    room.classList.add('room');

    const table = document.querySelector('.table');
    table?.append(room);

    const markupPre: HTMLElement = document.createElement('pre');
    markupPre.classList.add('html-block__markup');

    const markupCode: HTMLElement = document.createElement('code');
    markupCode.classList.add('markup');

    document.querySelector('.html-block__code-block')?.append(markupPre);
    markupPre.append(markupCode);

    const levelLinks: HTMLDivElement | null = document.querySelector('.levels__list');
    const task: HTMLTitleElement | null = document.querySelector('.game-block__game-task');
    const inputField: HTMLInputElement | null = document.querySelector('.css-block__input');
    const coloredInput: HTMLDivElement | null = document.querySelector('.language-css');

    if (levelLinks && inputField) {
        [...levelLinks.children].forEach((link) => {
            link.addEventListener('click', () => {
                if (inputField && coloredInput && room && markupCode && levelLinks) {
                    clearFields(inputField, room, markupCode, background, coloredInput, levelLinks);
                }

                const levelChosen: number = +link.innerHTML.split(' ').slice(1).join();
                localStorage.setItem('level', `${levelChosen}`);

                link.classList.add('active');
                room.innerHTML = gameLevels[levelChosen - 1].roomItems;
                markupCode.innerHTML = '';
                if (task) {
                    task.innerText = gameLevels[levelChosen - 1].task;
                }
                background.src = gameLevels[levelChosen - 1].background;

                showLevelsCode(levelChosen);
                highlightCodeAndItems();
            });
        });
    }
}
