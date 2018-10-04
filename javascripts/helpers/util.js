const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('petsDiv');
    printHere.innerHTML = stringToPrint;
}; 


export {printToDom};