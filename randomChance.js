function randomChance(quarters,stopPoint){
  var winnings = 0;
  while (quarters > 0){
    var chance = Math.floor(Math.random()*100);
    if (chance >= 99){
      winnings = Math.floor(Math.random() * 51 + 50);
      console.log("You won " + winnings + " more quarters!");
      quarters = quarters + winnings;
      if (quarters < stopPoint){
        console.log("You have " + quarters + " quarters remaining. One mor" +
        "e time!");
      }
      else if (quarters >= stopPoint){
        console.log("You have " + quarters + " quarters now--stopping whil" +
        "e ahead!");
        return quarters;
      }
    }
    else{
      --quarters;
      console.log("Not a win...for now. Trying again!")
    }
  }
  console.log("And that's all folks--you're broke!");
  return 0;
}