// Add your own code for creation of Hero and Beast objects.


class Hero {
    constructor(
        name,
        role,
        level,
        gold
    ) {
        this.name = name;
        this.role = role;
        this.level = level;
        this.gold = gold;
    }
    levelUp() {
        this.level++;
        console.log(`You have leveled up! Your level is now ${this.level}`);
    }
}

class Beast extends Hero {
    constructor(
        name,
        role,
        level,
        gold,
        value
    ) {
        super(name, role, level, gold);
        this.value = value;
    }
}

const ali = new Hero("Ali", "Mage", 3, 120);
const maggot = new Beast("Alpha", "Monster", 1, 3, 10);


console.log(maggot.levelUp());
console.log(maggot.level);

console.log(ali.role);
console.log(ali.level);