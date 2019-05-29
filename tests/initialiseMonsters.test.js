import initialiseMonsters from '../core/initialiseMonsters';
import map from '../data/parsedMap';
import 'should';

test('initialiseMonsters', async () => {
  let monsters = await initialiseMonsters(4, map);

  monsters.length.should.be.equal(4);
  monsters.forEach(monster => {
    monster.should.have.properties(['name', 'location']);
    map.should.have.properties([monster.location]);
  });
});
