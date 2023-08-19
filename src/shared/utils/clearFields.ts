export function clearFields(
    inputField: HTMLInputElement,
    room: HTMLDivElement,
    markup: HTMLElement,
    background: HTMLImageElement,
    inputColored: HTMLDivElement,
    levelsList: HTMLDivElement
): void {
    if (inputField && room && markup && background && inputColored) {
        inputField.value = '';
        room.innerHTML = '';
        markup.innerHTML = '';
        background.src = '';
        inputColored.innerHTML = '';

        if (levelsList) {
            [...levelsList.children].forEach((link) => {
                link.classList.remove('active');
            });
        }
    }
}
