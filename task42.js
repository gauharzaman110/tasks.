function city_country(city, country) {
    return `${city}, ${country}`;
}

function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

let result1 = city_country('Lahore', 'Pakistan');
let result2 = city_country('Tokyo', 'Japan');
let result3 = city_country('New York', 'USA');


console.log(result1);
console.log(result2);
console.log(result3);


let magicianNames = ['David Copperfield', 'Houdini', 'Derren Brown', 'David Blaine'];


make_great(magicianNames);


show_magicians(magicianNames);
