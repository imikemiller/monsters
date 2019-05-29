# Monsters

A Javascript CLI game that pits a load of monsters against one another in a battle to the death. Run to the hills the monsters are coming!

### Installing

The project can be run either in development mode or by installing globally. To stay honest to the spec the CLI invocation accepts the total number of monsters to unleash as an argument but for a nicer user experience its also possible to run without any args and decide how many monsters to unleash via the command line interface.

##### To install run:
`npm i [-g] && npm run setup world_map_small.txt|world_map_medium.txt`

##### To run in development mode:
`npm start [monsters]`

##### To run from a global installation:
`monsters [monsters]`

In both cases the `monsters` argument is optional and if passed, should contain an integer.

## Running the tests

`npm run test`

### Building
The application is compiled into CJS modules using rollup. To generate a new distribution run:

`npm run build`

## Assumptions
- All city names have a length greater than 0
- If monsters start in the same city they immediately fight and destroy the city

## Design Decisions
Parsing the text file on each game run seemed like an unnecessary overhead so this is only done once on install. 

The map the game uses can be changed by re-running the following command:

`npm run setup world_map_small.txt|world_map_medium.txt`
