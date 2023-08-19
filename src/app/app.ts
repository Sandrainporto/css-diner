import Page from '../pages/page';
import View from '../shared/utils/view';
import { ElementParams } from '../shared/types/types';

export default class App extends View {
    constructor() {
        const wrapper: ElementParams = {
            tag: 'div',
            classNames: ['wrapper'],
        };

        super(wrapper);
        this.configureView();
    }

    configureView(): void {
        new Page();
    }
}
