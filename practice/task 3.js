function func(str) {
  symbolsCounter = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      symbolsCounter++;
    }
  }

  return symbolsCounter;
}

console.log(func("a b c"));
