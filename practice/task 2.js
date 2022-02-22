function func(str) {
  const words = str.split(" ");

  const mySet = new Set(words);

  return new Set(words).size;
}

console.log(func("abc abc"));
