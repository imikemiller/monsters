import 'should';
import destroyCity from '../core/destroyCity';
import parsedMap from '../data/parsedMap';

test('destroyCity', () => {
  destroyCity('Ege',parsedMap);
  destroyCity('Mu',parsedMap);
  destroyCity('Asmismu',parsedMap);
  destroyCity('Mo',parsedMap);
  Object.keys(parsedMap).length.should.be.equal(24)
});
