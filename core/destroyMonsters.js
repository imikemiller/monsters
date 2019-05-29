/*
Responsible for destroying dead monsters
 */
const destroyMonsters = (monsters, collisions) => {
  //remove monsters that are present in collisions
  return monsters.filter(monster => {
    return !collisions.find(collision =>{
      return collision.name ===monster.name
    });
  });
};
export default destroyMonsters;
