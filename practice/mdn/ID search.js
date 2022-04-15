var ids = ["Mark:32789", "Rob:67890"];
var para = document.querySelector("p");
var input = document.querySelector("input");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var searchName = input.value;
  input.value = "";
  input.focus();

  for (var i = 0; i < ids.length; i++) {
    var splitId = contacts[i].split(";");

    if (splitId[0] === searchName) {
      para.textContent = splitId[0] + ", id: " + splitId[1];
      break;
    } else {
      para.textContent = "ID is not defined";
    }
  }
});
