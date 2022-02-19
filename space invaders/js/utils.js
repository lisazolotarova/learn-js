export const detectCollision = (obj1, obj2) => {
  if (
    obj1.position.x < obj2.position.x + obj2.element.offsetWidth &&
    obj1.position.x + obj1.element.offsetWidth > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.element.offsetHeight &&
    obj1.position.y + obj1.element.offsetHeight > obj2.position.y
  ) {
    console.log("collision");
    return true;
  } else return false;
};
