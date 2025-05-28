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

        // qui modifichiamo il template 
        const image = clone.querySelector(".animal-card-photo img")
        image.src = pet.photo
        console.log(pet)

        const petname = clone.querySelector(".animal-card-text h1")
        console.log(petname)
        petname.textContent = pet.name
        
        const petage = clone.querySelector("#animal-age")
        const age = (2025 - pet.birthYear + " years old")
        petage.textContent = age
        //aggiungiamo l'articolo alla pagina
        wrapper.appendChild(clone)
    })

}

displayPets()