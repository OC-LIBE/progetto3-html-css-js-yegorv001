const website = "https://frapollif.github.io/pet-adoption-data"

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`)
    const petsdata = await data.json()
    return petsdata
}


let shawn_specie = `All`


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
        petspecie.textContent = pet.species

        const petdescription = clone.querySelector(".animal-card-text p")
        petdescription.textContent = pet.description
        //aggiungiamo l'articolo alla pagina
        wrapper.appendChild(clone)
        return pet.species
    })

}


pet_specie = displayPets()
console.log(pet_specie)
function only_dogs(){
    if (pet_specie==`dog`){
        displayPets()
    }
}

displayPets()