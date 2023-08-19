import './page.css';
import { checkEnteredValue } from '../features/checkEnteredValue/model/checkEnteredValue';
import Footer from '../widgets/footer/footer';
import Header from '../widgets/header/header';
import Main from '../widgets/main/main';
import Sidebar from '../widgets/sidebar/sidebar';
import { winPopUp } from '../shared/ui/gameWinPopUp/gameWinPopUp';
import { connectItemWithCode } from './model/connectItemsWithCode';

export default class Page {
    constructor() {
        this.configureView();
        connectItemWithCode();
        checkEnteredValue();
    }

    configureView(): void {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        document.body.append(wrapper);

        const header = new Header();
        const main = new Main();
        const sidebar = new Sidebar();
        const footer = new Footer();

        wrapper.append(
            winPopUp,
            header.getHtmlElement(),
            main.getHtmlElement(),
            sidebar.getHtmlElement(),
            footer.getHtmlElement()
        );
    }
}
