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

// Call the function to create three different albums
let album1 = make_album('Adele', '21', 12);
let album2 = make_album('Ed Sheeran', 'Divide');
let album3 = make_album('Taylor Swift', '1989', 16);

// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
