import clear from 'clear'
import figlet from 'figlet'
import {red} from './utils'
import menu from './menu'
import {isNumber} from "lodash"

/*
 The bootstrap function that clears the screen,
 prints the splash and launches the menu.
 */
( async () => {
  clear()
  red(figlet.textSync('MONSTERS BOOOM!', {horizontalLayout: 'full'}))
  let totalMonsters = parseInt(process.argv.pop());
  await menu(isNumber(totalMonsters) && totalMonsters)
} )()
