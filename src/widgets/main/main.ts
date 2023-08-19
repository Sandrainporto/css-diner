import './main.css';
import { ElementParams } from '../../shared/types/types';
import View from '../../shared/utils/view';
import ElementCreator from '../../shared/utils/elements-creator';
import GameBlock from '../../entities/gameBlock/game-block';
import CssBlock from '../../entities/cssBlock/css-block';
import HtmlBlock from '../../entities/htmlBlock/htmlBlock';

export default class Main extends View {
    constructor() {
        const page: ElementParams = {
            tag: 'main',
            classNames: ['page'],
        };
        super(page);
        this.configureView();
    }

    configureView(): void {
        const pageContainer = new ElementCreator({
            tag: 'div',
            classNames: ['page__container', 'container'],
        });
        this.elementCreator.addInnerElement(pageContainer);

        const editorBlock = new ElementCreator({
            tag: 'div',
            classNames: ['container__editor', 'editor'],
        });

        const gameBlock = new GameBlock();
        pageContainer.getElement().append(gameBlock.getHtmlElement(), editorBlock.getElement());

        const cssBlock = new CssBlock();
        const htmlBlock = new HtmlBlock();
        editorBlock.getElement().append(cssBlock.getHtmlElement(), htmlBlock.getHtmlElement());
    }
}
