let talkingCalendar = function(date) {
  // set variables for month, day, year
  let year = date.slice(0, 4);
  let month = "change from numbered to letter month";
  let day = date.slice(8, 10);
  let dayEnding = "comes after a numbered day";

  // don't want the 0 in front of day
  if (day[0] === "0") {
    day = day[1];
  }

  switch (date.slice(8, 10)) {
    case "01":
      dayEnding = "st";
      break;
    case "02":
      dayEnding = "nd";
      break;
    case "03":
      dayEnding = "rd";
      break;
    default:
      dayEnding = "th";
      break;
  }

  switch (date.slice(5, 7)) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }

  return `${month} ${day}${dayEnding}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
  OUTPUT

  December 2nd, 2017
  November 11th, 2007
  August 24th, 1987

*/
