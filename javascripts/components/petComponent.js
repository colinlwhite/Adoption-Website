import {printToDom} from '../helpers/util.js';

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
}

const petBuilder = () => {
    let domString = ''; 
    for (let i = 0; i < pets.length; i++ ) {
        domString += `<div class="col-2 character-card" id="">`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top img" src="${pets[i].imageUrl}" alt="${pets[i].name}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${pets[i].name}</h5>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    }
    printToDom(domString);
};

export {setPets, petBuilder, getPetz}

