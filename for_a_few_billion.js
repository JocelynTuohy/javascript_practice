// first day's amount
var todaysAmount = 0.01;

// after 30 days
for (var day = 2; day <= 30; ++day){
  todaysAmount = todaysAmount * 2;
}
console.log("The servant would have $" + todaysAmount + " after 30 days!");

todaysAmount = 0.01;
// to $10,000
for (var days = 0; todaysAmount >= 10000; ++days){
  todaysAmount = todaysAmount * 2;
}
console.log("The servant would have $10,000 after " + days + " days.");

todaysAmount = 0.01;
// to 1 billion dollars
for (var days = 0; todaysAmount >= 1000000000; ++days){
  todaysAmount = todaysAmount * 2;
}
console.log("The servant would have a billion dollars after " + days + " days.");

todaysAmount = 0.01;
// to Infinity...har-di-har.
for (var days = 0; todaysAmount >= Infinity; ++days){
  todaysAmount = todaysAmount * 2;
}
console.log("The servant would have infinite money after " + days);