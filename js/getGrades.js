document.querySelector("#myButton").addEventListener("click", grades);

function grades(e) {
  e.preventDefault();
  var sum;
  var total;
  var avg;
  var fname = document.getElementById("first-name").value;
  var lname = document.getElementById("last-name").value;
  var gradeOne = parseInt(document.getElementById("g1").value);
  var gradeTwo = parseInt(document.getElementById("g2").value);
  var gradeThree = parseInt(document.getElementById("g3").value);
  var gradeFour = parseInt(document.getElementById("g4").value);

  sum = gradeOne + gradeTwo + gradeThree + gradeFour;
  avg = sum / 4;
  total = Math.round(avg);

  if (total === 100 || total >= 90) {
    document.querySelector("#list").innerText = `${fname} ${lname} mark is A`;
  } else if (total === 89 || total >= 80) {
    document.querySelector("#list").innerText = `${fname} ${lname} mark is B`;
  } else if (total === 79 || total >= 70) {
    document.querySelector("#list").innerText = `${fname} ${lname} mark is C`;
  } else if (total === 69 || total >= 65) {
    document.querySelector("#list").innerText = `${fname} ${lname} mark is D`;
  } else {
    document.querySelector("#list").innerText = `${fname} ${lname} mark is F`;
  }
  console.log(total);
}
