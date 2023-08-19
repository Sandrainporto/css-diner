import { gameLevels } from '../ui/gameLevels/gameLevels';

export function loadLevelNeeded(
    levelSaved: object,
    levelLinks: HTMLDivElement,
    room: HTMLDivElement,
    task: HTMLDivElement,
    background: HTMLImageElement,
    level: number = Number(levelSaved)
): void {
    [...levelLinks.children][level].classList.add('active');
    room.innerHTML = gameLevels[level].roomItems;
    task.innerHTML = gameLevels[level].task;
    background.src = gameLevels[level].background;
}
