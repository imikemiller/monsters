import 'should';
import parseMap from '../core/parseMap';
import serialiseMap from '../core/serialiseMap';

test('serialiseMap',async ()=>{
  let map = await parseMap('maps/world_map_medium.txt');
  let string = serialiseMap(map);
  string.should.be.String()
});
