import View from '../../shared/utils/view';
import ElementCreator from '../../shared/utils/elements-creator';
import { ElementParams, schoolLink } from '../../shared/types/types';

export default class SchoolBlock extends View {
    constructor() {
        const schoolBlock: ElementParams = {
            tag: 'div',
            classNames: ['footer__rs-school'],
        };
        super(schoolBlock);
        this.configureView();
    }

    configureView(): void {
        const gitLink = new ElementCreator({
            tag: 'a',
            classNames: ['github__link', 'link'],
            href: schoolLink,
        });
        this.elementCreator.addInnerElement(gitLink);

        const gitHubImg = new ElementCreator({
            tag: 'img',
            classNames: ['school__image', 'image'],
            alt: 'rs-school-icon',
            urlImage: require('../../assets/img/rs_school_js.svg'),
        });

        gitLink.getElement().append(gitHubImg.getElement());
    }
}
