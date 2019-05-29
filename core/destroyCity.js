import { pick } from 'lodash';

/*
Responsible for removing a city and any roads to that city from the map
 */
const destroyCity = (city, parsedMap) => {
  //remove the city from the map
  delete parsedMap[city];
  //find roads to the city and remove those
  Object.keys(parsedMap).forEach(c => {
    let keys = Object.keys(parsedMap[c]).filter(road => parsedMap[c][road] != city);
    parsedMap[c] = pick(parsedMap[c], keys);
  });
  return parsedMap;
};

export default destroyCity;
