export function highlightCodeAndItems(): void {
    const markup: NodeListOf<Element> = document.querySelectorAll('.room-code div');
    const room: HTMLElement | null = document.querySelector('.room');

    if (room) {
        highlightCode(room, markup);
        highlightItem(markup, room);
    }
}

function highlightCode(room: HTMLElement, markup: NodeListOf<Element>): void {
    [...room.children].forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('item-hover');
            [...markup].forEach((line) => {
                if (
                    line.hasAttribute('data-item') &&
                    item.id.trim() === line.getAttribute('data-item')?.trim()
                ) {
                    line.classList.add('line-hover');

                    item.addEventListener('mouseout', () => {
                        line.classList.remove('line-hover');
                        item.classList.remove('item-hover');
                    });
                }
            });
        });
    });
}

function highlightItem(markup: NodeListOf<Element>, room: HTMLElement): void {
    const toolTip = document.createElement('div');
    toolTip.className = 'tooltip';

    [...markup].forEach((line) => {
        line.addEventListener('mouseover', () => {
            line.getAttribute('data-item');
            line.classList.add('line-hover');
            [...room.children].forEach((item) => {
                if (
                    line.hasAttribute('data-item') &&
                    item.id.trim() === line.getAttribute('data-item')?.trim()
                ) {
                    toolTip.innerText = item.getAttribute('data-tooltip') as string;
                    item.classList.add('item-hover');
                    item.append(toolTip);

                    line.addEventListener('mouseout', () => {
                        line.classList.remove('line-hover');
                        item.classList.remove('item-hover');

                        toolTip.remove();
                    });
                }
            });
        });
    });
}
