const website = "https://frapollif.github.io/pet-adoption-data"

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`)
    const petsdata = await data.json()
    return petsdata
}




async function displayPets() {

    const pets = await getPetsData();
    const template = document.querySelector("#animal-card-template")
    const wrapper = document.querySelector("main")
    pets.forEach(pet => {
        const clone = template.content.cloneNode(true)

        function calc_age() {
        const date = new Date();
        year = date.getFullYear()
        const age = (year - pet.birthYear)
        if (age == 1){
        return `${age} year old`
        }
        if (age<1){
            return `Less than 1 year old`
        }
        else{
            return `${age} years old`
        }
        }

        // qui modifichiamo il template

        const image = clone.querySelector(".animal-card-photo img")
        image.src = pet.photo

        const petname = clone.querySelector(".animal-card-text h1")
        petname.textContent = pet.name
        
        const petage = clone.querySelector("#animal-age")
        const pet_age = calc_age()
        petage.textContent = pet_age

        const petspecie = clone.querySelector("#animal-specie")
        const firstletter = pet.species.charAt(0)
        const firstLetterCap = firstletter.toUpperCase()
        const remainingLetters = pet.species.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        petspecie.textContent = capitalizedWord

        const petdescription = clone.querySelector(".animal-card-text p")
        petdescription.textContent = pet.description

        const buttonname = clone.querySelector("#button")
        adopttext = `Adopt ${pet.name}`
        buttonname.textContent = adopttext;

        //aggiungiamo l'articolo alla pagina
        wrapper.appendChild(clone)
    })

}




displayPets()

function displayFilteredAnimals(e){
    console.log(e.target.dataset.filter);
    let article = document.querySelector(".article")
    article.forEach(a => {
        if (a.species == e.target.dataset.filter){
            article.style.display = "flex"
        }
        else {
             article.style.display = "none"
        }
    })

};
const filterbuttons = document.querySelectorAll("nav button");

filterbuttons.forEach(button => {
    button.addEventListener("click",(e) => {
        displayFilteredAnimals(e)
        
    })
})
console.log(filterbuttons)