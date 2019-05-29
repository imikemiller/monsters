import fs from 'fs';

/*
parseMap is responsible for retrieving the text file and
parsing the contents into an object key'd by city name
and containing objects that map a direction to a
destination city.

The goal is to convert the flat text file into an object like:

{
  cityName:{
    north:"cityName",
    south:"cityName",
    east:"cityName",
    west:"cityName"
  },
  ...
}
 */
const parseMap = async (path) => {
  //get text file contents
  const buffer = await fs.promises.readFile(path);
  const content = buffer.toString();
  //init the responses
  const data = {};
  //split the content by new line char
  content.split('\n').forEach(line => {
    //split the line by the first whitespace char
    let split = line.split(/(?<=^\S+)\s/);
    //if the first element has length > 0 its a valid city name
    if (split[0].length > 0) {
      //create an empty object referenced by city name
      data[split[0]] = {};
      //split the remaineder of the line by whitespace
      split[1].split(' ').forEach(vector => {
        //split the direction=city pairs by = char
        let directions = vector.split('=');
        //add the pair to the cities directions object
        data[split[0]][directions[0]] = directions[1];
      });
    }
  });
  return data;
};

export default parseMap;
