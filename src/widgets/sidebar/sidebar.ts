import './sidebar.css';
import { ElementParams } from '../../shared/types/types';
import View from '../../shared/utils/view';
import LevelsList from '../../entities/levelsList/ui/levelsList';
import Burger from '../../entities/burger/ui/burger';
import ProgressReset from '../../features/resetProgress/ui/resetBtn';

export default class Sidebar extends View {
    constructor() {
        const container: ElementParams = {
            tag: 'div',
            classNames: ['sidebar'],
        };
        super(container);
        this.configureView();
    }

    configureView(): void {
        const levesList = new LevelsList();
        const burger = new Burger();
        const resetBtn = new ProgressReset();

        this.getHtmlElement().append(
            levesList.getHtmlElement(),
            burger.getHtmlElement(),
            resetBtn.getHtmlElement()
        );
    }
}
