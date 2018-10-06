const sortEvents = () => {
    const catsButton = document.getElementById('cats');
    const dogsButton = document.getElementById('dogs');
    const dinosButton = document.getElementById('dinos');
    catsButton.addEventListener('click', sortPets);
    dogsButton.addEventListener('click', sortPets);
    dinosButton.addEventListener('click', sortPets);
};

