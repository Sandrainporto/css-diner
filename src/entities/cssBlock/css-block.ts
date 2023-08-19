import './css-block.css';
import ElementCreator from '../../shared/utils/elements-creator';
import { ElementParams } from '../../shared/types/types';
import View from '../../shared/utils/view';
import InputBlock from './inputBlock/ui/inputBlock';

export default class CssBlock extends View {
    constructor() {
        const cssBlockParams: ElementParams = {
            tag: 'div',
            classNames: ['container__css-block', 'css-block', 'block_editor'],
        };
        super(cssBlockParams);
        this.configureView();
    }

    configureView(): void {
        const cssBlockTitle = new ElementCreator({
            tag: 'p',
            classNames: ['css-block__title', 'title_editor'],
            textContent: 'CSS Editor',
        });
        this.elementCreator.addInnerElement(cssBlockTitle);

        const cssInputBlock = new InputBlock();
        this.elementCreator.getElement().append(cssInputBlock.getHtmlElement());
    }
}
