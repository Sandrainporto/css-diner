import './footer.css';
import View from '../../shared/utils/view';
import { ElementParams } from '../../shared/types/types';
import ElementCreator from '../../shared/utils/elements-creator';
import GitHubBlock from '../../entities/githubLink/githubLink';
import SchoolBlock from '../../entities/schoolLink/schoolLink';

export default class Footer extends View {
    constructor() {
        const footer: ElementParams = {
            tag: 'footer',
            classNames: ['footer'],
        };
        super(footer);
        this.configureView();
    }

    configureView(): void {
        const footerContainer = new ElementCreator({
            tag: 'div',
            classNames: ['footer__container'],
        });
        this.elementCreator.addInnerElement(footerContainer);

        const gitHubBlock = new GitHubBlock();

        const yearBlock = new ElementCreator({
            tag: 'div',
            classNames: ['footer__year-of-creation'],
            textContent: '2023',
        });

        const schoolBlock = new SchoolBlock();

        footerContainer
            .getElement()
            .append(
                gitHubBlock.getHtmlElement(),
                yearBlock.getElement(),
                schoolBlock.getHtmlElement()
            );
    }
}
