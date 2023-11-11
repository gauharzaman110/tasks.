function make_album(artist, title, tracks = null) {
    let album = {
        artist: artist,
        title: title,
    };

    if (tracks !== null) {
        album.tracks = tracks;
    }

    return album;
}

function make_great(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}

function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Call make_album function to create three different albums
let album1 = make_album('Artist1', 'Title1', 10);
let album2 = make_album('Artist2', 'Title2');
let album3 = make_album('Artist3', 'Title3', 15);

// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);

// Make an array of magician's names
let magicianNames = ['David Copperfield', 'Houdini', 'Derren Brown', 'David Blaine'];

// Call the make_great function to create a new array with "the Great" added to each magician's name
let greatMagicianNames = make_great(magicianNames);

// Call the show_magicians function with each array to display the original and modified lists
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicianNames);
