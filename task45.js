function createCar(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Add optional information to the car object
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional key-value pairs
let myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', 2022);

// Print the object that's returned
console.log(myCar);
