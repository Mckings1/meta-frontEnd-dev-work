console.log("Hello world");

const grades = [70, 24, 56, 78, 98, 65];
let gradeSum = 0;
for (let i = 0; i < grades.length; i++) {
  gradeSum += grades[i];
}
console.log(gradeSum / grades.length);
const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

function showItinerary(place1, place2, place3) {
  console.log("Visit" + place1);
  console.log("Then visit" + place2);
  console.log("Finish with a visit to" + place3);
}
