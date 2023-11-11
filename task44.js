function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    console.log("Bread with:");

    for (let item of items) {
        console.log(`- ${item}`);
    }

    console.log("Enjoy your sandwich!\n");
}

// Call the function three times with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce');
makeSandwich('Turkey', 'Swiss');
makeSandwich('Peanut Butter', 'Jelly');
