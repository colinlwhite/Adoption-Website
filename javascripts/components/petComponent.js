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
           domString += `<div class="col-4 pet-card d-inline-block">`;
           domString += `<div class="card text-center m-3">`;
           domString += `<div class="card-header">${newArray[i].name}</div>`;
           domString += `<img class="card-img" src="${newArray[i].imageUrl}" alt="${newArray[i].name}">`;
           domString += `<div class="card-body">`;
           domString += `<h4 class="card-title">${newArray[i].color}</h4>`;
           domString += `<p class="card-text">${newArray[i].specialSkill}</p>`;
           domString += `</div>`;
           domString += `<div class="card-footer">${newArray[i].type}</div>`;
           domString += `</div>`;
           domString += `</div>`; 
    }
    printToDom(domString);
};

export {setPets, petBuilder, getPetz}

