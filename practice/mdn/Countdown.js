var output = document.querySelector(".output");
output.innerHTML = "";

var i = 10;

while (i >= 10) {
  var para = document.querySelector("p");

  if (i === 10) {
    para.textContent = "Blast off";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}
