function getPosition(p) {
  if (p.y == 0 && p.x == 0) {
    return 0;
  }
  if (p.y > 0 && p.x > 0) {
    return 1;
  } else if (p.y > 0 && p.x < 0) {
    return 2;
  } else if (p.y < 0 && p.x < 0) {
    return 3;
  } else if (p.y < 0 && p.x > 0) {
    return 4;
  }
}

console.log(getPosition({ x: 0, y: 0 }));
