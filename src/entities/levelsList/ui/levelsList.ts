import View from '../../../shared/utils/view';
import ElementCreator from '../../../shared/utils/elements-creator';
import { ElementParams } from '../../../shared/types/types';

export default class LevelsList extends View {
    constructor() {
        const levelsList: ElementParams = {
            tag: 'div',
            classNames: ['levels__list'],
            textContent: '',
        };
        super(levelsList);
        this.createLevelsList();
    }

    createLevelsList(): void {
        const levelsCreated: number = 6;
        for (let i = 1; i <= levelsCreated; i++) {
            const levelLinks = new ElementCreator({
                tag: 'div',
                classNames: ['level__link'],
                textContent: `Level ${i}`,
            });
            this.elementCreator.addInnerElement(levelLinks);
        }
    }
}
