import chalk from 'chalk';

/**
 *
 * @param msg
 */
const yellow = (msg)=>console.log(
  chalk.yellow(msg)
);

/**
 *
 * @param msg
 */
const green = (msg)=>console.log(
  chalk.green(msg)
);

/**
 *
 * @param msg
 */
const red = (msg)=>console.log(
  chalk.red(msg)
);

const blue = (msg)=>console.log(
  chalk.blue(msg)
);

const monsterMessage = (monster, text)=>console.log(
  chalk.red(monster.name)+chalk.green(text)+chalk.yellow(monster.location)
)

const destroyMessage = (city,monsters)=>console.log(
  chalk.red(city)
  +chalk.green(' has been destroyed by ')
  +chalk.yellow(monsters.slice(0, monsters.length-1).map(monster=>monster.name).join(', '))
  + chalk.yellow(` and ${monsters.pop().name}`)
)

export {
  yellow,
  green,
  red,
  blue,
  monsterMessage,
  destroyMessage
}
