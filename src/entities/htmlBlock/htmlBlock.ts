import './htmlBlock.css';
import ElementCreator from '../../shared/utils/elements-creator';
import { ElementParams } from '../../shared/types/types';
import View from '../../shared/utils/view';

export default class HtmlBlock extends View {
    constructor() {
        const htmlBlockParams: ElementParams = {
            tag: 'div',
            classNames: ['container__html-block', 'html-block', 'block_editor'],
        };
        super(htmlBlockParams);
        this.configureView();
    }

    configureView(): void {
        const HtnlBlockTitle = new ElementCreator({
            tag: 'p',
            classNames: ['html-block__title', 'title_editor'],
            textContent: 'HTML Viewer',
        });
        this.elementCreator.addInnerElement(HtnlBlockTitle);

        const codeBlock = new ElementCreator({
            tag: 'div',
            classNames: ['html-block__code-block'],
        });
        this.elementCreator.addInnerElement(codeBlock);

        const lineNumber = new ElementCreator({
            tag: 'div',
            classNames: ['html-block__lines'],
        });
        codeBlock.getElement().append(lineNumber.getElement());

        const linesAmount: number = 15;
        for (let i = 1; i <= linesAmount; i++) {
            const line = document.createElement('li');
            line.innerHTML = `${i}`;
            lineNumber.getElement().append(line);
        }
    }
}
