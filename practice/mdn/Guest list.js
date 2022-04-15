var people = ["Chris", "Hannah", "Colin", "Terry"];

var admitted = document.querySelector(".admitted");
var refused = document.querySelector(".refused");
admitted.textContent = "Invited: ";
refused.textContent = "Not invited(!): ";

do {
  if (people[i] === "Colin" || people[i] === "Terry") {
    refused.textContent += people[i] + ", ";
  } else {
    admitted.textContent += people[i] + ", ";
  }
  i++;
} while (i < people.length);

refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";
