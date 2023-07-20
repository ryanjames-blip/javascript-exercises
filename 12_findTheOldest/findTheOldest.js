const findTheOldest = function(people) {
    let oldest = {
            name: 'Blank',
            age: 0,
        };
    let personAge;
    
    for (let i = 0; i < people.length; i++) {
        if (!('yearOfDeath' in people[i])) {
            people[i].yearOfDeath = 2023;
        }
        personAge = people[i].yearOfDeath - people[i].yearOfBirth;
        if (personAge > oldest.age) {
            oldest.age = personAge;
            oldest.name = people[i].name;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
