import './header.css';
import { ElementParams } from '../../shared/types/types';
import View from '../../shared/utils/view';
import ElementCreator from '../../shared/utils/elements-creator';
import HelpButton from '../../features/helpUser/ui/helpBtn';
import showAnswerByClick from '../../features/helpUser/model/showAnswerByClick';

export default class Header extends View {
    constructor() {
        const headerBlock: ElementParams = {
            tag: 'header',
            classNames: ['header'],
        };
        super(headerBlock);
        this.configureView();
    }

    configureView(): void {
        const title = new ElementCreator({
            tag: 'h1',
            classNames: ['header__title', 'title'],
            textContent: 'CSS Diner',
        });
        this.elementCreator.addInnerElement(title);

        const helpBtn = new HelpButton();
        this.elementCreator.addInnerElement(helpBtn.getHtmlElement());

        helpBtn.getHtmlElement().addEventListener('click', showAnswerByClick);
    }
}
