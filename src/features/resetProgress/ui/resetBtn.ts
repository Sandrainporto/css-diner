import View from '../../../shared/utils/view';
import { ElementParams } from '../../../shared/types/types';
import { resetProgress } from '../model/resetProgress';

export default class ProgressReset extends View {
    constructor() {
        const resetButton: ElementParams = {
            tag: 'button',
            classNames: ['reset-btn'],
            textContent: 'Reset Levels',
        };
        super(resetButton);
        this.resetLevels();
    }

    resetLevels(): void {
        this.getHtmlElement().addEventListener('click', resetProgress);
    }
}
