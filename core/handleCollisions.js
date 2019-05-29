import destroyMonsters from "./destroyMonsters"
import {blue, destroyMessage} from "../cli/utils"
import detectCollisions from "./detectCollisions"
import destroyCity from "./destroyCity"

/*
A util function that invokes detectCollisions and the destroy functions
and emits messages updating the state of the game.

The `first` flag switches the message content
 */
const handleCollisions = (monsters, parsedMap, first = true) =>{

  //see if any fights break out immediately
  let collisions = detectCollisions(monsters)
  let cities = Object.keys(collisions)
  //if cities we have collisions
  if (cities.length) {
    //message the number of collision cities
    blue(`${cities.length} fights kicked off${first ? ' immediately' : ''}`)

    //foreach collision destroy the city, the monsters and send the destroyed message
    cities.forEach(city => {
      destroyCity(city, parsedMap)
      monsters = destroyMonsters(monsters, collisions[city])
      destroyMessage(city, collisions[city])
    })
  }

  return monsters
}

export default handleCollisions
