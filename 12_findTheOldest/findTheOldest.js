const findTheOldest = function(people) {
    const peopleCopy = people.slice();
    peopleCopy.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const personAAge = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
        const personBAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;

        return personBAge - personAAge;
    })
    return peopleCopy[0];
};

// Do not edit below this line
module.exports = findTheOldest;