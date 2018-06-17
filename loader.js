const E = require('./environment.js');
const C = require('./characters.js');


var room = new E.Room();
room.name = 'Entrance';

var foe = new C.Enemy('Vampire', 100, 75, 50, 200, 15, 'vamp');

console.log(room.name);
console.log(foe.getTitle(true));
