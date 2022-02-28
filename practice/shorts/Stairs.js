function stairsGenerator(stairs) {
  const stair = "L";
  const space = " ";

  let output = "";

  for (let i = 0; i < stairs; i++) {
    for (let j = 0; j < i; j++) {
      output = output.concat(" ");
    }
    output = output.concat(stair);
    output = output.concat("\n");
  }
  return output;
}

console.log(stairsGenerator(5));
