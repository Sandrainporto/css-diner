import { highlightCodeAndItems } from '../../../shared/utils/highlight';
import { gameLevels } from '../../../shared/ui/gameLevels/gameLevels';
import { showLevelsCode } from './showLevelsCode';
import { clearFields } from '../../../shared/utils/clearFields';

export function openNextLevel(): void {
    const allLevels: NodeListOf<Element> = document.querySelectorAll('.level__link');
    const inputField: HTMLInputElement | null = document.querySelector('.css-block__input');
    const levelsList: HTMLDivElement | null = document.querySelector('.levels__list');
    const task: HTMLTitleElement | null = document.querySelector('.game-block__game-task');
    const room: HTMLDivElement | null = document.querySelector('.room');
    const markup: HTMLDivElement | null = document.querySelector('.markup');
    const inputColored: HTMLDivElement | null = document.querySelector('.language-css');
    const background: HTMLImageElement | null = document.querySelector('.table-background');

    if (inputField && inputColored && room && markup && levelsList && background) {
        clearFields(inputField, room, markup, background, inputColored, levelsList);

        const notPassedLevel = Array.from(allLevels).find(
            (item) => !item.classList.contains('passed')
        );
        if (notPassedLevel) {
            const levelChosen: number = +notPassedLevel.innerHTML.split(' ').slice(1).join();
            localStorage.setItem('level', `${levelChosen}`);

            document.querySelectorAll('.level__link')[levelChosen - 1].classList.add('active');
            room.innerHTML = gameLevels[levelChosen - 1].roomItems;
            markup.innerHTML = '';
            if (task) {
                task.innerText = gameLevels[levelChosen - 1].task;
            }
            background.src = gameLevels[levelChosen - 1].background;

            showLevelsCode(levelChosen);
            highlightCodeAndItems();
        }
    }
}
