import { groupBy, pick } from 'lodash';

/*
Responsible for detecting collisions between the
existing monsters in existing cities.
 */
const detectCollisions = (monsters)=>{
  //group monsters into their location cities
  let monstersInCities = groupBy(monsters,(monster)=>monster.location);
  //filter the city names that have more than 1 monster located in them
  let cities = Object.keys(monstersInCities).filter(city=>{
    return monstersInCities[city].length>1;
  });
  //return the collisions
  return pick(monstersInCities,cities);
}

export default detectCollisions;
