import 'should';
import destroyMonsters from '../core/destroyMonsters';

test('destroyMonsters', () => {
  monsters.length.should.be.equal(30);
  monsters = destroyMonsters(monsters, collision);
  monsters.length.should.be.equal(28);
});

let collision = [
  {name: 'Triceratops', location: 'Asmismu'},
  {name: 'Ankheg', location: 'Asmismu'}
];

let monsters = [{name: 'Raven', location: 'Aninige'},
  {name: 'Triceratops', location: 'Mudaxu'},
  {name: 'Homunculus', location: 'Aluligige'},
  {name: 'Horned Devil', location: 'Dixusno'},
  {name: 'Giant Octopus', location: 'Mixu'},
  {name: 'Deep Gnome (Svirfneblin)', location: 'Amasna'},
  {name: 'Jackal', location: 'Aluligige'},
  {name: 'Marilith', location: 'Enolmu'},
  {name: 'Ankheg', location: 'Dixusno'},
  {name: 'Yeti', location: 'Anodago'},
  {name: 'Pseudodragon', location: 'Dolamisme'},
  {name: 'Wight', location: 'Aluligige'},
  {name: 'Mage', location: 'Mo'},
  {name: 'Glabrezu', location: 'Asmismu'},
  {name: 'Shield Guardian', location: 'Mixu'},
  {name: 'Specter', location: 'Mesmina'},
  {name: 'Ettin', location: 'Modema'},
  {name: 'Giant Vulture', location: 'Dusmu'},
  {name: 'Merfolk', location: 'Anodago'},
  {name: 'Thug', location: 'Eludisnismu'},
  {name: 'Adult Copper Dragon', location: 'Dimilu'},
  {name: 'Ancient Green Dragon', location: 'Anodago'},
  {name: 'Warhorse', location: 'E'},
  {name: 'Assassin', location: 'Aluligige'},
  {name: 'Bulette', location: 'Modema'},
  {name: 'Swarm of Quippers', location: 'Modema'},
  {name: 'Gold Dragon Wyrmling', location: 'Mu'},
  {name: 'Night Hag', location: 'Malixo'},
  {name: 'Stone Giant', location: 'Mo'},
  {name: 'Doppelganger', location: 'Mu'}];
