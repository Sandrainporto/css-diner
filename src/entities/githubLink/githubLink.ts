import View from '../../shared/utils/view';
import ElementCreator from '../../shared/utils/elements-creator';
import { ElementParams, gitHubLink } from '../../shared/types/types';

export default class GitHubBlock extends View {
    constructor() {
        const githubBlock: ElementParams = {
            tag: 'div',
            classNames: ['footer__github', 'github'],
        };
        super(githubBlock);
        this.configureView();
    }

    configureView(): void {
        const gitLink = new ElementCreator({
            tag: 'a',
            classNames: ['github__link', 'link'],
            href: gitHubLink,
        });
        this.elementCreator.addInnerElement(gitLink);

        const gitHubImg = new ElementCreator({
            tag: 'img',
            classNames: ['github__image', 'image'],
            alt: 'github-icon',
            urlImage: require('../../assets/img/github-logo.svg'),
        });
        gitLink.getElement().append(gitHubImg.getElement());
    }
}
