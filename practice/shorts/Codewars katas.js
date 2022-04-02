// Counting Sheeps
var countSheep = function (num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }

  return str;
};

// L1: Set Alarm
function setAlarm(employed, vacation) {
  if (employed == true && vacation == false) {
    return true;
  } else {
    return false;
  }
}

// Gravity Flip
const flip = (dir, arr) => {
  return arr.sort((a, b) => {
    return dir === "L" ? b - a : a - b;
  });
};

// Will there be enough space?
function enough(cap, on, wait) {
  if (on + wait - cap === 0) {
    return 0;
  } else if (on + wait > cap) {
    return on + wait - cap;
  } else {
    return 0;
  }
}
// shorter case
function enough(cap, on, wait) {
  return wait + on > cap ? on + wait - cap : 0;
}

// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length <
    yourPoints
  );
}

// Are You Playing Banjo?
function playingBanjo(name) {
  if (name[0] == "R" || name[0] == "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }

  return name;
}

// Grasshopper - Debug
function weatherInfo(temp) {
  var celsius = (temp - 32) * (5 / 9);
  if (celsius > 0) return celsius + " is above freezing temperature";
  else return celsius + " is freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return temperature;
}
