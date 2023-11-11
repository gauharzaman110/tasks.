function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt('Medium');

// Make a shirt of any size with a different message
make_shirt('Small', 'JavaScript is fun!');
