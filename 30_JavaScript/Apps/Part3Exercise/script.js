// #1
// The maxTemps array contains maximal temperature measurements (in Celsius) for one week.
// Use forEach to change the values to the Fahrenheit scale instead
// Formula: Tf = 32 + 1.8*Tc
//
var maxTemps = [12, 16, 9, 11, 14, 15, 17];
console.log(maxTemps);
// Add your code here

for (let i = 0; i < maxTemps.length; i++) {
    maxTemps[i] = 32 + 1.8 * maxTemps[i];
}

console.log(maxTemps);




// This array of "loot objects" is used in several exercises below.
let loot = [
    { type: "gun", name: "The Decider", value: 45 },
    { type: "sword", name: "Stinger", value: 30 },
    { type: "gun", name: "Bean Shooter", value: 10 },
    { type: "gun", name: "Skull Seeker", value: 35 },
    { type: "mace", name: "Heavy Wood Club", value: 20 },
    { type: "sword", name: "Avenger", value: 70 },
    { type: "mace", name: "Iron-clad Crusher", value: 55 }
];



// #2
// Use map to create an array which only contains the name of each item in loot
//
let lootNames;
// Add your code here

lootNames = loot.map((obj) => {
    return obj.name;
})

console.log(lootNames);



// #3
// Use map to create an array which contains the name and value for each item in loot.
let lootNamesAndValues;
// Add your code here
    
lootNamesAndValues = loot.map((obj) => {
    return `${obj.name}, ${obj.value}`
})
    
console.log(lootNamesAndValues);



// #4
// Use filter to create an array which only contains loot items of type 'gun'
//

// Add your code here

const lootGuns = loot.filter((obj) => obj.type == "gun");

console.log(lootGuns);



// #5
// Use filter to create an array which only contains loot items for which
//   1) the value is more than 30
//   2) the name contains the letter 's' or 'S'

// Add your code here
let lootStrange = loot.filter((obj) => obj.value > 30 && (obj.name.includes("s") || obj.name.includes("S")));

console.log(lootStrange);



// #6
// Use reduce to calculate the total value of the loot

// Add your code here

const lootTotalValue = loot.reduce((acc, obj) => acc + obj.value, 0);

console.log(lootTotalValue);



// #7
// Use reduce to calculate an object with one property for each loot type.
// The value of each property should then be the number of loot items for this type.
// A result could thus look like : { gunCount: 3, maceCount: 2, swordCount: 2 }

// Add your code here

let lootTypeCounts;
    
loot.map((acc, obj) => {
    
})

function lootTypeCountsFunction() {

    let gunCount = 0;
    let maceCount = 0; 
    let swordCount = 0;

    for (let i = 0; i < loot.length; i++) {
        
        switch (loot[i].type) {
            case "gun":
                gunCount++;
                break;
            case "mace":
                maceCount++;
                break;
            case "sword":
                swordCount++;
                break;
        }
    }
    
    

    return [`gunCount: ${gunCount}`, `maceCount: ${maceCount}`, `swordCount: ${swordCount}`]
}


console.log(lootTypeCountsFunction());



