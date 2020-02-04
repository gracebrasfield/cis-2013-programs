var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge = prompt("Enter your age in years.");
// this program will calculate floatDays by multiplying floatAge by 365.25
floatDays = parseFloat(floatAge * 365.25).toFixed(2);
//this program will calculate floatMonths by multiplying floatAge by 12
floatMonths = parseFloat(floatAge * 12).toFixed(2);
// this program will calculate intWeek by dividing floatDays by 7 
intWeek = parseFloat(floatDays / 7).toFixed(2);
//this program will calculate intFortnights by dividing floatDays by 14
intFortnights = parseFloat(floatDays / 14).toFixed(2);


alert("Your age = " + floatAge + " years, " + floatMonths + " months, " +  intFortnights + " fortnights, " + intWeek +  " weeks, and " + floatDays + " days. ");