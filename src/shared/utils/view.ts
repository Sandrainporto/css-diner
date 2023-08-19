import { ElementParams } from '../types/types';
import ElementCreator from './elements-creator';

export default class View {
    elementCreator: ElementCreator;

    constructor(params: ElementParams) {
        this.elementCreator = this.createView(params);
    }

    getHtmlElement(): HTMLElement {
        return this.elementCreator.getElement();
    }

    createView(params: ElementParams): ElementCreator {
        const elementParams: ElementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: params.textContent,
        };

        const elementCreator = new ElementCreator(elementParams);

        return elementCreator;
    }
}
