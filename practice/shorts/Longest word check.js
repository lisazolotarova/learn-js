function func(str) {
  const wordsArr = str.split(" ");

  maxValue = 0;

  //   for (let i = 0; i < wordsArr.length; i++) {
  //     if (wordsArr[i].length > maxValue) {
  //       maxValue = wordsArr[i].length;
  //     }
  //   }

  //   return maxValue;
  // }

  let i = 0;
  while (i < wordsArr.length) {
    if (wordsArr[i].length > maxValue) {
      maxValue = wordsArr[i].length;
    }
    i++;
  }

  return maxValue;
}

// console.log(func("abc abc D ghjk"));
