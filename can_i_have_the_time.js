function canIHaveTheTime(HOUR, MINUTE, PERIOD){
  
  // Declare variables
  var relativePeriod;
  var relativeHour;
  var relativeMinute;

  // Determine the overall time of day
  if ((PERIOD == "AM" && HOUR == 12 && MINUTE <= 30) ||
  (PERIOD == "PM" && HOUR == 11 && MINUTE > 30)) {
    relativePeriod = "midnight";
  }
  else if ((PERIOD == "PM" && HOUR == 12 && MINTE <= 30)) ||
  (PERIOD == "AM" && HOUR == 11 && MINUTE > 30)) {
    relativePeriod = "noon";
  }
  else if (PERIOD == "AM") {
    relativePeriod = "in the morning";
  }
  else if (HOUR < 5 || (HOUR == 12 && MINUTE > 30)){
    relativePeriod = "in the afternoon";
  }
  else if (HOUR < 8){
    relativePeriod = "in the evening";
  }
  else {
    relativePeriod = "at night";
  }

  // Determine the reported hour
  if (relativePeriod == "midnight" || relativePeriod == "noon"){
    relativeHour = "";
  }
  else if (MINUTE > 30 && HOUR == 12){
    relativeHour = 1;
  }
  else if (MINUTE > 30){
    relativeHour = HOUR + 1;
  }
  else {
    relativeHour = HOUR;
  }

  //determine the reported minutes/fraction of hour
  if (MINUTE == 15){
    relativeMinute = "quarter past";
  }
  else if (MINUTE == 30){
    relativeMinute = "half past";
  }
  else if (MINUTE == 45){
    relativeMinute = "quarter till";
  }
  else if (MINUTE == 5){
    relativeMinute = "five after";
  }
  else if (MINUTE == 10){
    relativeMinute = "ten after";
  }
  else if (MINUTE == 50){
    relativeMinute = "ten till";
  }
  else if (MINUTE == 55){
    relativeMinute = "five till";
  }
  else if (MINUTE == 0){
    relativeMinute = "exactly";
  }
  else if (MINUTE < 30){
    relativeMinute = "just after";
  }
  else {
    relativeMinute = "almost";
  }

  // print the time
  if (relativePeriod == "midnight" || relativePeriod == "noon"){
    console.log("It's " + relativeMinute + " " + relativePeriod);
  }
  else {
    console.log("It's " + relativeMinute + " " + relativeHour + " " + 
    relativePeriod);
  }
}