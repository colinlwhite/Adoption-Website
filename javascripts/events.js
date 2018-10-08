import {petBuilder, getPetz} from './components/petComponent.js'


const sortPets = (e) => {
    const type = e.target.id;
    const petsArray = getPetz();
        if (type === 'Cat') {
            const filteredPets = petsArray.filter(x => x.type === type);
            petBuilder(filteredPets);
    } else {
        if (type === 'Dog') {
            const filteredPets = petsArray.filter(x => x.type === type);
            petBuilder(filteredPets);
        }
    }  {
        if (type === 'Dino') {
            const filteredPets = petsArray.filter(x => x.type === type);
            petBuilder(filteredPets);
        }
    } if 
        (type === 'reset') {
            petBuilder(petsArray);
        }
    };

const sortEvents = () => {
    const catsButton = document.getElementById('cat');
    const dogsButton = document.getElementById('dog');
    const dinosButton = document.getElementById('dino');
    const resetButton = document.getElementById('reset');
    catsButton.addEventListener('click', sortPets);
    dogsButton.addEventListener('click', sortPets);
    dinosButton.addEventListener('click', sortPets);
    resetButton.addEventListener('click', sortPets);
};

export {sortEvents} 