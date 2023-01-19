/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
]; 

const newUsers = users.map(({name }) => ({name}));
console.log(newUsers);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = users.map((item) => {

    if (item.name[0].includes("A")) {
      item.name = "Anacleto";
    }
    return item.name;
    
});
console.log(names);

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const citie = cities.map((citiesDeCities) =>{
    if (citiesDeCities.isVisited === true) {
        citiesDeCities.isVisited = 'Visitado';
    }
    return citiesDeCities.isVisited;

});
console.log(citie);


