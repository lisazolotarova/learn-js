function func(str) {
  symbolsCounter = {};

  for (i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (symbolsCounter[currentSymbol]) {
      symbolsCounter[currentSymbol]++;
    } else {
      symbolsCounter[currentSymbol] = 1;
    }
  }
  return symbolsCounter;
}

console.log(func("wooord"));
