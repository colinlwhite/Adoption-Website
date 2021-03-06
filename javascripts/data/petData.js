import {setPets, petBuilder, getPetz} from '../components/petComponent.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petBuilder(getPetz());
}

function executeThisCodeIfXhrFails () {
    console.log('Keep working');
}

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};

export {getPets}; 