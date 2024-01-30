const dictionary = [
  "awesome",
  "amazing",
  "fabulous",
  "fantastic",
  "excellent",
  "great",
  "incredible",
  "outstanding",
  "superb",
  "terrific",
];

const tile = document.querySelectorAll(".tile");
const tileBack = document.querySelectorAll(".tile__face--back");

let newArray = [];
function arrayFill() {
  for (let i = 0; i < tile.length; i++) {
    let addValue = dictionary[Math.floor(Math.random() * dictionary.length)];
    newArray.push(addValue);
    let index = dictionary.indexOf(addValue);
    dictionary.splice(index, 1);
  }
}
arrayFill();
console.log(newArray);

console.log(tile);
let count = 0;
tile.forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.toggle("is-flipped");
  });
});

tileBack.forEach((el) => {
  el.innerHTML = newArray[count];
  count++;
});
