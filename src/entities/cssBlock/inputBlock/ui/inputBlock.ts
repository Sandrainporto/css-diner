import './inputBlock.css';
import { ElementParams } from '../../../../shared/types/types';
import View from '../../../../shared/utils/view';
import ElementCreator from '../../../../shared/utils/elements-creator';
import { checkEnteredValue } from '../../../../features/checkEnteredValue/model/checkEnteredValue';
import { getHighlightedClasses } from '../../../../shared/utils/highlighter-js';

export default class InputBlock extends View {
    constructor() {
        const cssInputBlock: ElementParams = {
            tag: 'div',
            classNames: ['css-block__input-block'],
        };
        super(cssInputBlock);
        this.configureView();
    }

    configureView(): void {
        const input = new ElementCreator({
            tag: 'input',
            classNames: ['css-block__input'],
            placeholder: 'Write selector here',
        });
        this.elementCreator.addInnerElement(input);
        input.getElement().addEventListener('input', colorInputValue);

        const absolute = new ElementCreator({
            tag: 'div',
            classNames: ['absolute'],
        });
        this.elementCreator.addInnerElement(absolute);

        const pre = new ElementCreator({
            tag: 'pre',
            classNames: ['absolute-pre'],
        });
        absolute.getElement().append(pre.getElement());

        const code = new ElementCreator({
            tag: 'code',
            classNames: ['absolute-code', 'language-css'],
        });
        pre.getElement().append(code.getElement());

        absolute.getElement().addEventListener('click', () => {
            input.getElement().focus();
        });

        const EnterBtn = new ElementCreator({
            tag: 'input',
            classNames: ['css-block__submit-btn'],
            value: 'Enter',
            type: 'button',
        });
        this.elementCreator.addInnerElement(EnterBtn);

        EnterBtn.getElement().addEventListener('click', checkEnteredValue);
    }
}
const textToHighlight = document.createElement('div');
export function colorInputValue(this: HTMLInputElement): void {
    textToHighlight.innerHTML = getHighlightedClasses(this.value);
    document.querySelector('.absolute-code')?.append(textToHighlight);
}
