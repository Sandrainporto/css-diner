import { getHighlightedClasses } from '../../../../shared/utils/highlighter-js';
const textToHighlight = document.createElement('div');

export function colorInputValue(inputField: HTMLInputElement): void {
    textToHighlight.innerHTML = getHighlightedClasses(inputField.value);
    document.querySelector('.absolute-code')?.append(textToHighlight);
}
