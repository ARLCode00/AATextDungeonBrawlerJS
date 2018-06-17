const Model = require('./model.js');

var room = new Model.Room();
room.name = 'Entrance';

var foe = new Model.Enemy('Vampire', 100, 75, 50, 200, 15, 'vamp');

console.log(room.name);
console.log(foe.getTitle(true));
