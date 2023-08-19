import { getHighlightedClasses } from '../../../shared/utils/highlighter-js';
import { gameLevels } from '../../../shared/ui/gameLevels/gameLevels';

export default function showAnswerByClick(): void {
    const inputField: HTMLInputElement | null = document.querySelector('.css-block__input');
    const coloredInput: HTMLDivElement | null = document.querySelector('.language-css');
    const currentLevel: HTMLDivElement | null = document.querySelector('.active');

    const levelSaved = localStorage.getItem('level')
        ? +(localStorage.getItem('level') as string) - 1
        : 0;

    if (inputField && coloredInput) {
        inputField.classList.remove('help-used');
        inputField.value = '';
        coloredInput.innerHTML = '';

        const blockForHighlighter = document.createElement('div');
        const answerByLetters = gameLevels[levelSaved].solution[0].split('');

        for (let i = 0; i < answerByLetters.length; i++) {
            setTimeout(() => {
                inputField.value += answerByLetters[i];
                function colorInputValue(inputField: HTMLInputElement): void {
                    blockForHighlighter.innerHTML = getHighlightedClasses(inputField.value);
                    document.querySelector('.absolute-code')?.append(blockForHighlighter);
                }
                colorInputValue(inputField);
            }, 100 * i);
        }

        currentLevel?.classList.add('help-used');
        currentLevel?.classList.add('passed');
    }
}
