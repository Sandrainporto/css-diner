import './burger.css';
import { ElementParams } from '../../../shared/types/types';
import View from '../../../shared/utils/view';
import ElementCreator from '../../../shared/utils/elements-creator';
import showBurger from '../model/showBurger';

export default class Burger extends View {
    constructor() {
        const burger: ElementParams = {
            tag: 'div',
            classNames: ['burger'],
            textContent: '',
        };
        super(burger);
        this.configureView();
    }

    configureView(): void {
        const burgerLine = new ElementCreator({
            tag: 'span',
            classNames: ['burger-icon'],
            textContent: '',
        });
        this.elementCreator.addInnerElement(burgerLine);
        this.elementCreator.getElement().addEventListener('click', showBurger);
    }
}
