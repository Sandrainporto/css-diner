import './game-block.css';
import ElementCreator from '../../shared/utils/elements-creator';
import { ElementParams } from '../../shared/types/types';
import View from '../../shared/utils/view';

export default class GameBlock extends View {
    constructor() {
        const gameBlockParams: ElementParams = {
            tag: 'div',
            classNames: ['container__game-block', 'game-block'],
        };
        super(gameBlockParams);
        this.configureView();
    }

    configureView(): void {
        const task = new ElementCreator({
            tag: 'h2',
            classNames: ['game-block__game-task'],
            textContent: 'Select the couch',
        });
        this.elementCreator.addInnerElement(task);

        const table = new ElementCreator({
            tag: 'div',
            classNames: ['table'],
        });
        this.elementCreator.addInnerElement(table);
    }
}
