let Guests = ['Qamar' , 'Muntazir' , 'Gauhar'];
for (let i = 0; i < Guests.length; i++){
    console.log('Hello Mr.', Guests[i], ',you are invited to dinner. ');
}
console.log(`Unfortunately, Mr.${Guests[2]} can't make it`);
Guests[2] = 'Jamshaid';
for (let i = 0; i < Guests.length; i++) {
    console.log(`Hello Mr.,  ${Guests[i]}, you are invited to dinner. `);
}
console.log("Good news! Found a bigger dinner table.");

Guests.unshift("Ali"); 
Guests.splice(Math.floor(Guests.length / 2), 0, "Haider "); 
Guests.push("Mehmood "); 

for (let i = 0; i < Guests.length; i++) {
  console.log(`Dear ${Guests[i]}, you are invited to dinner.`);
}
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. Can invite only two people.");
while (Guests.length > 2){
  let removeGuests = Guests.pop();
  console.log(`Sorry, ${removeGuests}, we can't invite you to dinner.`)
}
for (let i = 0; i < Guests.length; i++){
  console.log(`Dear ${Guests[i]}, you are still invited to dinner.`)
}
