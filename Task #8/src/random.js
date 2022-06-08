function generateRandomWords() {
    const randomCountry = ["Ukraine", "Sweden", "Poland", "Czech Repuplic", "Turkie", "USA", "Brazil", "Mexico"];

    const randomCar = ["BMW", "Mercedes", "Opel", "Mazda", "Audi", "Suzuki", "Nissan", "Tesla"];

    const randomName = ["Brad", "Nik", "Nicolas", "Jeremy", "Alex", "Oleksii", "Nataliya", "Victor"];

    const randomText = "From " + randomCountry[Math.floor(Math.random() * 8)] + " we took " + randomCar[Math.floor(Math.random() * 8)] + " for " + randomName[Math.floor(Math.random() * 8)] + " !!!";

    return randomText;
}

export default generateRandomWords;