import { showWinMessage } from '../../../shared/ui/gameWinPopUp/gameWinPopUp';
import { gameLevels } from '../../../shared/ui/gameLevels/gameLevels';
import { openNextLevel } from '../../../entities/levelsList/model/openNextLevel';

export function checkOnKeyUp(): void {
    document.addEventListener('keyup', (event) => {
        if (event.code == 'Enter') {
            checkEnteredValue();
        }
    });
}

export function checkEnteredValue(): void {
    const editorContainer: HTMLDivElement | null = document.querySelector('.container__editor');
    const inputField: HTMLInputElement | null = document.querySelector('.css-block__input');
    const inputValue: string | undefined = inputField?.value.trim().toLocaleLowerCase();
    const allLevels = document.querySelectorAll('.level__link');
    const lastLevelPassed = allLevels[allLevels.length - 1];
    const passedLevels = document.querySelectorAll('.passed');

    const levelSaved = localStorage.getItem('level')
        ? +(localStorage.getItem('level') as string) - 1
        : 0;

    if (inputField && inputValue) {
        if (gameLevels[levelSaved].solution?.includes(inputValue)) {
            const currentLevel: HTMLDivElement | null = document.querySelector('.active');
            if (!currentLevel?.classList.contains('help-used')) {
                currentLevel?.classList.add('without-help');
                currentLevel?.classList.add('passed');
            }

            const animatedItems = document.querySelectorAll('.animation');
            animatedItems.forEach((item) => {
                item.classList.add('hidden');
            });

            allLevels.length === passedLevels.length || lastLevelPassed.classList.contains('active')
                ? setTimeout(showWinMessage, 1500)
                : setTimeout(openNextLevel, 1700);
        } else {
            if (editorContainer) {
                editorContainer.style.animation = 'shake .7s';
                editorContainer.addEventListener('animationend', () => {
                    editorContainer.style.animation = '';
                });
            }
        }
    }
}
