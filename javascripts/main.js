import {getPets} from './data/petData.js';
import {sortEvents} from './events.js';

const intializeApp = () => {
    getPets();
    sortEvents();
};

intializeApp();