import {printToDom} from '../helpers/util.js';

const pets = [
    { 
        name: "Dusty", 
        color: "Green", 
        specialSkill: "Gives sincere apologies.", 
        type: "cat", 
        imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg" 
    },
    { 
        name: "Dusty", 
        color: "Green", 
        specialSkill: "Gives sincere apologies.", 
        type: "cat", 
        imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg" 
    },
    { 
        name: "Dusty", 
        color: "Green", 
        specialSkill: "Gives sincere apologies.", 
        type: "cat", 
        imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg" 
    },
    { 
        name: "Dusty", 
        color: "Green", 
        specialSkill: "Gives sincere apologies.", 
        type: "cat", 
        imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg" 
    }
];

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

petBuilder();

