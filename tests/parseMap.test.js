import 'should';
import parseMap from '../core/parseMap';

test('parseMap',async ()=>{
  let map = await parseMap('maps/world_map_medium.txt');
  Object.keys(map).length.should.be.equal(6763);
});
