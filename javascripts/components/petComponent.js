import {printToDom} from '../helpers/util.js';

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petBuilder = (newArray) => {
    let domString = ''; 
    for (let i = 0; i < newArray.length; i++ ) {
        domString += `<div class="col-2 pet-card" id="">`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top img" src="${newArray[i].imageUrl}" alt="${newArray[i].name}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${newArray[i].name}</h5>`;
        domString += `<h4>${newArray[i].type}</h4>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    }
    printToDom(domString);
};

export {setPets, petBuilder, getPetz}

