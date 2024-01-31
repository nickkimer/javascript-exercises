const findTheOldest = function(peopleArray) {
    returnPerson = peopleArray.reduce((oldestPerson,currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
    return returnPerson;
};

const getAge = function(birthYear, deathYear) {
    if (!deathYear) {
        currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
    else return (deathYear - birthYear);
}


// Do not edit below this line
module.exports = findTheOldest;
