/*
Responsible for serialising an object in the form below back into string
 */
const serialiseMap = (parsedMap) =>{
  let map = ''
  Object.keys(parsedMap).forEach(city=>{
    map+=city;
    Object.keys(parsedMap[city]).forEach((direction)=>{
      map+=` ${direction}=${parsedMap[city][direction]}`
    })
    map+='\n'
  })
  return map;
}

export default serialiseMap;

