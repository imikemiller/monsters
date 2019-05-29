import parseMap from "../core/parseMap"
import {green, red} from "./utils"
import fs from 'fs-extra';

(async()=>{
  try {
    let map = process.argv[2];
    if (!map) throw new Error('Requires the `map` arg');

    green(`Installing ${map}`)
    let parsedMap = await parseMap(`maps/${map}`);
    await fs.promises.writeFile(__dirname+'/../data/installedMap.json',JSON.stringify(parsedMap))
    green(`Installed ${map}`)
  }catch(e){
    red(`Error: ${e.message}`);
  }
})()
