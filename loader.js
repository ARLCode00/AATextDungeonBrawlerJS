const Constants = require('./constants.js');
const Environment = require('./environment.js');
const Characters = require('./characters.js');


var room = new Environment.Room();
room.name = 'Entrance';

var foe = new Characters.Enemy('Vampire', 100, 75, 50, 200, 15, 'vamp');

console.log(room.name);
console.log(foe.getTitle(true));
