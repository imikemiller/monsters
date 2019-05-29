import {blue, green, monsterMessage, red} from '../cli/utils'
import initialiseMonsters from './initialiseMonsters'
import parsedMap from '../data/parsedMap'
import {sample, set} from 'lodash'
import handleCollisions from "./handleCollisions"
import serialiseMap from "./serialiseMap"
import inquirer from "inquirer"

/*
The run function is for controlling game setup and for running the ticker
 */
const run = async function(totalMonsters) {
  //initial meessage confirm total monsters
  blue(`Calling forth ${totalMonsters} monsters from the pits of hell...`)

  //init the monsters with names and send info message about each
  try {
    let monsters = await initialiseMonsters(totalMonsters, parsedMap)
    monsters.forEach(monster => {
      monsterMessage(monster, ' will start the carnage in ')
    })

    //see if any fights break out immediately
    monsters = handleCollisions(monsters, parsedMap)

    //start a ticker with 10000 loops
    for (let i = 0; i <= 10000; i++) {
      //move each monster along a random road
      if (monsters.length > 1) {
        monsters.forEach((monster, key) => {
          if (monster) {
            //find the roads out of the monsters location
            let roads = parsedMap[monster.location]
            //if there isnt any roads its stuck
            if (!roads) {
              delete monsters[key]
              monsters = monsters.filter(m => m)
              red(`${monster.name} found no roads and has committed sepoku in despair!`)
            }
            //take a random road destination and update the monsters location
            else {
              set(monsters[key], 'location', sample(roads), 'nothing in roads')
            }
          }
        })
        //check for the collisions
        monsters = handleCollisions(monsters, parsedMap, false)

      } else {
        blue(monsters.length ? `Only ${monsters[0].name} is still alive... and is lonely...` : `All the monsters have been returned to the pit!`)
        break
      }
    }

    blue('The chaos has ended!')

    return parsedMap;

  } catch (e) {
    red(`ERRRROAAR > ${e}`)
  }
}
export default run
