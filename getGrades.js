const getGrades = (str) => {
  var average = 0;
  var avg;
  var total;
  for (let i = 0; i < str.length; i++) {
    average += str[i];
    avg = average / str.length;
    total = Math.round(avg);
  }

  if (total === 100 || total >= 90) {
    return "A";
  } else if (total === 89 || total >= 80) {
    return "B";
  } else if (total === 79 || total >= 70) {
    return "C";
  } else if (total === 69 || total >= 65) {
    return "D";
  } else {
    return "F";
  }
};

console.log(getGrades([19, 30, 98, 100]));
