var daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];// shows days of the week
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

var dateInput = prompt("Enter date of birth YY-MM-DD:");// requests user to put date of birth in indicated format.


var birthDate = new Date(dateInput); // fetches date from the user input


var dateBorn = birthDate.getDay();// displays date of birth as  a number


var femaleGender = femaleNames[dateBorn];//converts number into name of day
var maleGender = maleNames[dateBorn];// converts number into name of day born


var genderInput = prompt("Enter your gender Male or Female").toUpperCase;// returns input in capital letters.

if (genderInput==="Male") {
    alert("Your Akan name is" +maleGender)
    
} else {
    alert("Your Akan name is" +femaleGender)
}





