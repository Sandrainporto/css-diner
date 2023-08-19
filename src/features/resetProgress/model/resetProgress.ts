import { openNextLevel } from '../../../entities/levelsList/model/openNextLevel';

export function resetProgress(): void {
    const allLevelsLinks: NodeListOf<Element> = document.querySelectorAll('.level__link');
    const coloredInput: HTMLDivElement | null = document.querySelector('.language-css');
    const markup: HTMLElement | null = document.querySelector('.markup');

    if (coloredInput && markup) {
        coloredInput.innerHTML = '';
        markup.innerHTML = '';
    }

    const passedLevels = Array.from(allLevelsLinks).filter((item) =>
        item.classList.contains('passed')
    );

    passedLevels.forEach((level) => {
        const classesToRemove = ['passed', 'help-used', 'without-help'];

        for (let i = 0; i < classesToRemove.length; i++) {
            if (level.classList.contains(classesToRemove[i])) {
                level.classList.remove(classesToRemove[i]);
            }
        }
    });

    openNextLevel();
}
