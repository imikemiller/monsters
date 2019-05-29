import fs from 'fs';
import { sample } from 'lodash';

/*
initialiseMonsters is responsible for assigning a human readable name
to the monster and deciding its random start location
 */
const initialiseMonsters = async function(totalMonsters, map){

  let db = [];
  let names = [];

  //load up the monsters Db
  const buffer = await fs.promises.readFile('monsters/names.json');
  const content = buffer.toString();
  db = JSON.parse(content);

  if(totalMonsters>db.length){
    throw new Error(`Not enough names for that many monsters!`)
  }

  /*
  Ensures that the monsters all get a unique name
  (I know using recursion is a bit risky/inefficient but he who dares etc)
   */
  const getName = async _=>{
    //get a random name from the monsters dB
    let name = sample(db).name;
    //if already issued take another
    if(names.indexOf(name)>-1){
      return getName();
    }
    //save the ones already issues
    names.push(name);
    return name;
  };

  const monsters = [];
  //choose start location and generate a nicer human name for each
  for (let monster = 0; monster < totalMonsters; monster++) {
    //choose a random start location and name for each monster
    monsters.push({
      name: await getName(),
      location: sample(Object.keys(map))
    });
  }
  return monsters;
};

export default initialiseMonsters;
