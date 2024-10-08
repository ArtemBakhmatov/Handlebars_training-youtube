let cast = {
    "characters": [
		{
			"name": "Jon Snow",
			"shortCode": "jon-snow",
			"actor": "Kit Harrington",
			"house": "Stark",
			"location": "The Wall"
		},
		{
			"name": "Tyrion Lannister",
			"shortCode": "tyrion",
			"actor": "Peter Dinklage",
			"house": "Lannister"
		},
		{
			"name": "Brienne of Tarth",
			"shortCode": "brienne",
			"actor": "Gwendoline Christie",
			"house": "Clegane",
			"location": "unknown"
		},
		{
			"name": "Eddard Stark",
			"shortCode": "ned-stark",
			"actor": "Sean Bean",
			"house": "Stark",
			"location": "Winterfell"
		},
		{
			"name": "Sandor Clegane",
			"shortCode": "the-hound",
			"actor": "Rory McCann",
			"house": "Clegane",
			"location": "unknown"
		}
	]
}

let characterTemplate = document.getElementById('character-template').innerHTML; 
let compiledCharacterTemplate = Handlebars.compile(characterTemplate);
console.log(compiledCharacterTemplate(cast.characters[0]));

let characterList = document.querySelector('.character-list-container');
console.log(characterList);
characterList.innerHTML = compiledCharacterTemplate(cast);
