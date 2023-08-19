import { ElementParams } from '../types/types';

export default class ElementCreator {
    element: HTMLElement | null;

    constructor(param: ElementParams) {
        this.element = null;
        this.createElement(param);
    }

    getElement(): HTMLElement | never {
        if (this.element === null) {
            throw new Error('Method getElement: element === null');
        }
        return this.element;
    }

    createElement(params: ElementParams): void {
        this.element = document.createElement(params.tag);
        this.setCssClasses(params.classNames);
        this.setTextContent(params.textContent);
        this.setAtributes(
            params.alt,
            params.urlImage,
            params.href,
            params.target,
            params.type,
            params.placeholder,
            params.value
        );
    }

    setCssClasses(cssClasses: string[]): void {
        cssClasses.forEach((cssClass: string) => this.element?.classList.add(cssClass));
    }

    setTextContent(text: string = ''): void | never {
        if (this.element === null) {
            throw new Error('Method setTextContent: element === null');
        }
        this.element.textContent = text;
    }

    addInnerElement(element: HTMLElement | ElementCreator): void {
        if (element instanceof ElementCreator) {
            this.element?.append(element.getElement());
        } else {
            this.element?.append(element);
        }
    }

    setAtributes(
        alt: string = '',
        urlImage: string = '',
        href: string = '',
        target: string = '_blank',
        type: string = 'text',
        placeholder: string = '',
        value: string = ''
    ): void | never {
        if (this.element === null) {
            throw new Error('Method setAltAtribute: element === null');
        }
        if (this.element instanceof HTMLImageElement) {
            this.element.alt = alt;
            this.element.src = urlImage;
        }
        if (this.element instanceof HTMLLinkElement) {
            this.element.href = href;
            this.element.target = target;
        }
        if (this.element instanceof HTMLInputElement) {
            this.element.type = type;
            this.element.placeholder = placeholder;
            this.element.value = value;
        }
    }
}
