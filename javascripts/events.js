import {petBuilder, getPetz, pets} from './components/petComponent.js'


const sortPets = (e) => {
    const type = e.target.id;
    const petsArray = getPetz();
        if (type === 'cat') {
            const filteredPets = petsArray.filter(x => x.type === type);
            petBuilder(filteredPets);
    } else {
        if (type === 'dog') {
            const filteredPets = petsArray.filter(x => x.type === type);
            petBuilder(filteredPets);
        }
    } if 
        (type === 'dino') {
            const filteredPets = petsArray.filter(x => x.type === type);
            petBuilder(filteredPets);
        }
    };





const sortEvents = () => {
    const catsButton = document.getElementById('cat');
    const dogsButton = document.getElementById('dog');
    const dinosButton = document.getElementById('dino');
    catsButton.addEventListener('click', sortPets);
    dogsButton.addEventListener('click', sortPets);
    dinosButton.addEventListener('click', sortPets);
};

export {sortEvents} 