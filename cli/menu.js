import inquirer from 'inquirer'
import run from '../core/run'
import {green} from "./utils"
import serialiseMap from "../core/serialiseMap"

/**
 Defines the opening question for the cli and calls
 the appropriate CLI function
 */
const menu = {
  type: 'number',
  name: 'totalMonsters',
  message: 'How many monsters should I unleash oh evil one?',
  default: 10
}

const confirm = {
  type: 'confirm',
  name: 'ok',
  message: 'Shall I print the map?',
  default: 'Y'
}

export default async (totalMonsters) => {
  /**
   * Display the menu and invoke run
   */
  if(!totalMonsters) {
    let input = await inquirer.prompt(menu)
    totalMonsters = input.totalMonsters;
  }

  let endParsedMap = await run(totalMonsters)
  //confirm print map
  inquirer.prompt(confirm).then(confirm=>{
    if (confirm.ok) {
      green(serialiseMap(endParsedMap))
    } else {
      green('Fair enough...')
    }
  })
}

