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
        numbers: [1,2,3,4],
    },
    {
        firstname:'tristian',
        birthyear:2007,
        numbers: [1,2,3,4],
    },
    {
        firstname:'gaberials',
        birthyear:2010,
        numbers: [1,2,3,4],
    },
    {
        firstname:'noahr',
        birthyear:2011,
        numbers: [1,2,3,4],
    },
]

const array1 = array.filter((year1)=> year1);
const array2 = array1.filter((year2)=> year2.birthyear > 2008);
array2.forEach((birth)=> {
    console.log(birth.firstname);});
Object.values(array2).forEach(val => {
    console.log(val.firstname);
    console.log(val.birthyear);
});