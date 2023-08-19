import { changeLevel } from '../../entities/levelsList/model/changeLevel';
import { showLevelsCode } from '../../entities/levelsList/model/showLevelsCode';
import { highlightCodeAndItems } from '../../shared/utils/highlight';
import { loadLevelNeeded } from '../../shared/utils/loadLevelNeeded';

export function connectItemWithCode(): void {
    changeLevel();

    const room: HTMLDivElement | null = document.querySelector('.room');
    const levelSaved = JSON.parse(localStorage.getItem('level') as string);
    const task: HTMLDivElement | null = document.querySelector('.game-block__game-task');
    const levelLinks: HTMLDivElement | null = document.querySelector('.levels__list');
    const inputField: HTMLInputElement | null = document.querySelector('.css-block__input');
    const background: HTMLImageElement | null = document.querySelector('.table-background');

    if (levelLinks && inputField && task && background && room) {
        if (!levelSaved) {
            loadLevelNeeded(levelSaved, levelLinks, room, task, background);

            showLevelsCode(levelSaved);
        } else {
            loadLevelNeeded(levelSaved, levelLinks, room, task, background, Number(levelSaved) - 1);

            showLevelsCode(levelSaved);
        }
    }

    highlightCodeAndItems();
}
