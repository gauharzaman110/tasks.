
let current_users = ['Ali', 'Fatima', 'Ahmed', 'Hassan', 'Mohammed'];

let new_users = ['Salman', 'Hussain', 'Ahmed', 'Ali', 'Bilal'];

for (let i = 0; i < new_users.length; i++) {
   
    if (current_users.map(user => user.toLowerCase()).includes(new_users[i].toLowerCase())) {
        console.log(`Sorry, the username '${new_users[i]}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}
