import View from '../../../shared/utils/view';
import { ElementParams } from '../../../shared/types/types';

export default class HelpButton extends View {
    constructor() {
        const helpBtn: ElementParams = {
            tag: 'button',
            classNames: ['header__help'],
            textContent: 'HELP',
        };
        super(helpBtn);
    }
}
