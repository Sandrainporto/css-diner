import './gameLevels.css';
import couchIcon from './../../../assets/img/game-images/couch.png';
import curtainsIcon from './../../../assets/img/game-images/curtains.png';
import curtainsDottedIcon from './../../../assets/img/game-images/curtain-dotted.png';
import tableIcon from './../../../assets/img/game-images/bedside-table.png';
import mobileIcon from './../../../assets/img/game-images/phone.png';

import cageIcon from './../../../assets/img/game-images/cage.png';
import rackIcon from './../../../assets/img/game-images/rack.png';
import ratIcon from './../../../assets/img/game-images/blue-rat.png';
import bonesIcon from './../../../assets/img/game-images/bones.png';
import ratsIcon from './../../../assets/img/game-images/rats.png';
import ratsColoredIcon from './../../../assets/img/game-images/color-rats.png';
import gingerRatIcon from './../../../assets/img/game-images/ginger-rat.png';

import { levelsParam } from '../../types/types';
import background1 from './../../../assets/img/game-images/room1.png';
import background2 from './../../../assets/img/game-images/room2.png';
import background3 from './../../../assets/img/game-images/room3.png';
import background4 from './../../../assets/img/game-images/dungeon.png';

export const gameLevels: levelsParam[] = [
    {
        id: 'level 1',
        task: 'Select the couch (A)',
        background: `${background1}`,
        roomItems: `
<couch id="couch" data-tooltip= "<couch></couch>" class="couch">
    <img  src="${couchIcon}" alt="couch" class="animation">
</couch>
`,
        solution: ['couch', '.room couch', 'div couch', '*'],
    },
    {
        id: 'level 2',
        task: 'Select the dotted curtain (#ID)',
        background: `${background2}`,
        roomItems: `
<couch id="couch" data-tooltip= "<couch></couch>" class="couch">
    <img  src="${couchIcon}" alt="couch">
</couch>
<curtain id="curtain-dotted" data-tooltip="<curtain id=dotted ></curtain>" class="curtain">
    <img src="${curtainsDottedIcon}" alt="curtains" class="animation">
</curtain>
<curtain id="curtain-no-dots" data-tooltip="<curtain></curtain>" class="curtain">
    <img src="${curtainsIcon}" alt="curtains" id="curtain-not-dotted">
</curtain>
`,
        solution: [
            '#dotted',
            'div curtain #dotted',
            'div #dotted',
            'curtain #dotted',
            '.room curtain #dotted',
            '.room #dotted',
        ],
    },
    {
        id: 'level 3',
        task: 'Select the bedside table that has the phone on it (:has())',
        background: `${background3}`,
        roomItems: `
<couch id="couch" data-tooltip= "<couch></couch>" class="couch">
    <img  src="${couchIcon}" alt="couch">
</couch>
<curtain id="curtain-dotted" data-tooltip="<curtain id=dotted ></curtain>" class="curtain">
    <img src="${curtainsDottedIcon}" alt="curtains">
</curtain>
<curtain id="curtain-no-dots" data-tooltip="<curtain></curtain>" class="curtain">
    <img src="${curtainsIcon}" alt="curtains" id="curtain-not-dotted">
</curtain>
<bedside-table id="bedside-table" data-tooltip="<bedside-table></bedside-table>" class="bedside-table">
    <img src="${tableIcon}" alt="bedside-table" class="animation">
</bedside-table>
<phone id="phone" data-tooltip= "<phone class=phone></phone>" class="phone">
    <img src="${mobileIcon}" alt="phone" class="animation">
</phone>
<bedside-table id="bedside-table2" data-tooltip="<bedside-table></bedside-table>" class="bedside-table2">
    <img src="${tableIcon}" alt="bedside-table" class="animation">
</bedside-table>
`,
        solution: [
            'bedside-table:has(.phone)',
            'bedside-table:has(phone)',
            'div bedside-table:first-child',
            '.room bedside-table:first-child',
        ],
    },
    {
        id: 'level 4',
        task: 'Select all the rats on the floor ([Attribute])',
        background: `${background4}`,
        roomItems: `
<cage id="cage" data-tooltip= "<cage></cage>" class="cage">
    <img  src="${cageIcon}" alt="cage">
</cage>
<rack id="rack" data-tooltip="<rack></rack>" class="rack">
    <img src="${rackIcon}" alt="rack">
</rack>
<rat id="grey" data-tooltip="<rat onfloor=true></rat>" class="rat">
    <img src="${ratIcon}" alt="rat" id="grey" class="animation">
</rat>
<rats id="rats-grey" data-tooltip="<rat onfloor=true></rat>" class="rats-grey">
    <img src="${ratsIcon}" alt="rats-grey" class="animation">
</rats>
<bones id="bones" data-tooltip= "<bones></bones>" class="bones">
    <img src="${bonesIcon}" alt="bones">
</bones>
<rats id="rats-colored" data-tooltip= "<rat onfloor=true></rat>" class="rats-colored">
    <img src="${ratsColoredIcon}" alt="rats-colored" class="animation" >
</rats>
<rat id="ginger" data-tooltip= "<rat id=ginger></rat>" class="ginger">
    <img src="${gingerRatIcon}" alt="ginger">
</rat>
`,
        solution: ['rat[onfloor]', 'div rat[onfloor]', '.room rat[onfloor]'],
    },
    {
        id: 'level 5',
        task: 'Select the ginger rat inside the cage (A #ID)',
        background: `${background4}`,
        roomItems: `
<cage id="cage" data-tooltip= "<cage></cage>" class="cage">
    <img  src="${cageIcon}" alt="cage">
</cage>
<rat id="grey" data-tooltip="<rat id=grey></rat>" class="rat">
    <img src="${ratIcon}" alt="rat" id="grey">
</rat>
<rat id="grey2" data-tooltip="<rat id=grey></rat>" class="rat">
    <img src="${ratIcon}" alt="rat" id="grey2">
</rat>
<rats id="rats-grey" data-tooltip="<rats-grey></rats-grey>" class="rats-grey">
    <img src="${ratsIcon}" alt="rats-grey" >
</rats>
<rats id="rats-colored" data-tooltip= "<rats id=rats-colored></rats>" class="rats-colored">
    <img src="${ratsColoredIcon}" alt="rats-colored" >
</rats>
<rat id="ginger" data-tooltip= "<rat id=ginger></rat>" class="ginger animation">
    <img src="${gingerRatIcon}" alt="ginger">
</rat>
<rat id="ginger-on-floor" data-tooltip= "<rat id=ginger></rat>" class="ginger">
    <img src="${gingerRatIcon}" alt="ginger">
</rat>
`,
        solution: [
            'cage #ginger',
            'div cage #ginger',
            '.room cage #ginger',
            'cage:first-child',
            'div cage:first-child',
        ],
    },
    {
        id: 'level 6',
        task: 'Select the rack and the bones (A, A)',
        background: `${background4}`,
        roomItems: `
<cage id="cage" data-tooltip= "<cage></cage>" class="cage">
    <img  src="${cageIcon}" alt="cage">
</cage>
<rack id="rack" data-tooltip="<rack></rack>" class="rack">
    <img src="${rackIcon}" alt="rack"  class="animation">
</rack>
<bones id="bones" data-tooltip= "<bones></bones>" class="bones">
    <img src="${bonesIcon}" alt="bones" class="animation">
</bones>
<rat id="ginger" data-tooltip= "<rat id=ginger></rat>" class="ginger">
    <img src="${gingerRatIcon}" alt="ginger">
</rat>
`,
        solution: ['rack, bones', 'div rack, bones', '.room rack, bones'],
    },
];
