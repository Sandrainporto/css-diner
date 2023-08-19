import { getHighlightedTags } from '../../../shared/utils/highlighter-js';

export function showLevelsCode(level: number): void {
    const markupCode = document.querySelector('.markup');

    const roomBlock: HTMLDivElement = document.createElement('div');
    roomBlock.classList.add('room-code');
    roomBlock.id = 'room';
    roomBlock.innerHTML = getHighlightedTags(`<div class="room"></div>`);
    markupCode?.append(roomBlock);

    const couch: HTMLDivElement = document.createElement('div');
    couch.setAttribute('data-item', 'couch');

    const curtain: HTMLDivElement = document.createElement('div');
    curtain.setAttribute('data-item', 'curtain-no-dots');

    const curtainDotted: HTMLDivElement = document.createElement('div');
    curtainDotted.setAttribute('data-item', 'curtain-dotted');

    const bedsideTable: HTMLDivElement = document.createElement('div');
    bedsideTable.setAttribute('data-item', 'bedside-table');
    bedsideTable.classList.add('bedside-table-code');

    const bedsideTable2: HTMLDivElement = document.createElement('div');
    bedsideTable2.setAttribute('data-item', 'bedside-table2');

    const phone: HTMLDivElement = document.createElement('div');
    phone.setAttribute('data-item', 'phone');

    const rack: HTMLDivElement = document.createElement('div');
    rack.setAttribute('data-item', 'rack');

    const bones: HTMLDivElement = document.createElement('div');
    bones.setAttribute('data-item', 'bones');

    const cage: HTMLDivElement = document.createElement('div');
    cage.classList.add('cage-html');
    cage.setAttribute('data-item', 'cage');

    const gingerRat: HTMLDivElement = document.createElement('div');
    gingerRat.setAttribute('data-item', 'ginger');

    const gingerRatAdd: HTMLDivElement = document.createElement('div');
    gingerRatAdd.setAttribute('data-item', 'ginger-on-floor');
    gingerRatAdd.classList.add('on-floor');

    const greyRat: HTMLDivElement = document.createElement('div');
    greyRat.setAttribute('data-item', 'grey');

    const greyRat2: HTMLDivElement = document.createElement('div');
    greyRat2.setAttribute('data-item', 'grey2');

    const greyRats: HTMLDivElement = document.createElement('div');
    greyRats.setAttribute('data-item', 'rats-grey');

    const coloredRats: HTMLDivElement = document.createElement('div');
    coloredRats.setAttribute('data-item', 'rats-colored');

    switch (level) {
        case null:
            couch.innerHTML = getHighlightedTags(`  <couch/>`);
            document.querySelector('#room span')?.after(couch);
            break;

        case 1:
            couch.innerHTML = getHighlightedTags(`  <couch/>`);
            document.querySelector('#room span')?.after(couch);
            break;

        case 2:
            couch.innerHTML = getHighlightedTags(`  <couch/>`);
            curtain.innerHTML = getHighlightedTags(`  <curtain/>`);
            curtainDotted.innerHTML = getHighlightedTags(`  <curtain id="dotted"/>`);

            document.querySelector('#room span')?.after(couch, curtain, curtainDotted);
            break;

        case 3:
            couch.innerHTML = getHighlightedTags(`  <couch/>`);
            curtain.innerHTML = getHighlightedTags(`  <curtain/>`);
            curtainDotted.innerHTML = getHighlightedTags(`  <curtain id="dotted"/>`);
            bedsideTable.innerHTML = getHighlightedTags(`  <bedside-table>  </bedside-table>`);
            bedsideTable2.innerHTML = getHighlightedTags(`  <bedside-table/>`);
            phone.innerHTML = getHighlightedTags(`    <phone class="phone"/>`);

            document
                .querySelector('#room span')
                ?.after(couch, curtain, curtainDotted, bedsideTable, bedsideTable2);
            document.querySelector('.bedside-table-code span')?.after(phone);
            break;

        case 4:
            rack.innerHTML = getHighlightedTags(`  <rack/>`);
            bones.innerHTML = getHighlightedTags(`  <bones/>`);
            cage.innerHTML = getHighlightedTags(`  <cage>  <cage/>`);
            gingerRat.innerHTML = getHighlightedTags(`    <rat class="ginger"/>`);
            greyRat.innerHTML = getHighlightedTags(`  <rat onfloor="true"/>`);
            greyRats.innerHTML = getHighlightedTags(`  <rat onfloor="true"/>`);
            coloredRats.innerHTML = getHighlightedTags(`  <rat onfloor="true"/>`);

            document
                .querySelector('#room span')
                ?.after(rack, cage, greyRat, greyRats, coloredRats, bones);
            document.querySelector('.cage-html span')?.after(gingerRat);
            break;

        case 5:
            cage.innerHTML = getHighlightedTags(`  <cage>  <cage/>`);
            gingerRat.innerHTML = getHighlightedTags(`    <rat id="ginger"/>`);
            gingerRatAdd.innerHTML = getHighlightedTags(`  <rat id="ginger"/>`);
            greyRat.innerHTML = getHighlightedTags(`  <rat id="gray"/>`);
            greyRat2.innerHTML = getHighlightedTags(`    <rat id="gray"/>`);
            greyRats.innerHTML = getHighlightedTags(`  <rats-grey/>`);
            coloredRats.innerHTML = getHighlightedTags(`  <rats id="rats-colored"/>`);

            document
                .querySelector('#room span')
                ?.after(cage, greyRat, greyRats, coloredRats, gingerRatAdd);
            document.querySelector('.cage-html span')?.after(gingerRat, greyRat2);
            break;

        case 6:
            rack.innerHTML = getHighlightedTags(`  <rack/>`);
            bones.innerHTML = getHighlightedTags(`  <bones/>`);
            cage.innerHTML = getHighlightedTags(`  <cage>  <cage/>`);
            gingerRat.innerHTML = getHighlightedTags(`    <rat id="ginger"/>`);

            document.querySelector('#room span')?.after(rack, cage, bones);
            document.querySelector('.cage-html span')?.after(gingerRat);

            break;
        default:
    }
}
