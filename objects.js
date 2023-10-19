const date = new Date()
const year = date.getFullYear();
/* const gguh = {
    gh: "hhhhhh",
    hg: "gggggg",
    bruh: false,
    hugbibbibiubiuubibuiubiubbubiu: 2000,
    sgruh: [1,2,3,4,5,6,7,8,9,10],
    number: function () {
        return year - this.hugbibbibiubiuubibuiubiubbubiu;
    },
};

console.log(gguh.number()); */

const array = [
    {
        firstname:'ehtan dejesus',
        birthyear:2008,
        numbers: [1,2,3,4],
    },
    {
        firstname:'reelan',
        birthyear:2009,
        numbers: [5,2,3,4],
    },
    {
        firstname:'tristian',
        birthyear:2007,
        numbers: [1,6,3,4],
    },
    {
        firstname:'gaberials',
        birthyear:2010,
        numbers: [1,2,7,4],
    },
    {
        firstname:'noahr',
        birthyear:2011,
        numbers: [1,2,3,8],
    },
]




array.forEach((name)=> console.log(name.firstname));

array.forEach((person)=> person.numbers.forEach((num) => console.log(num)));

const ar = array.filter((year1)=> (year1.birthyear>2008));
ar.forEach((a1)=> console.log('Year ' + a1.birthyear));

