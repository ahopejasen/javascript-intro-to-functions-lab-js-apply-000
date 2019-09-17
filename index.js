"use strict";
function shout(myStr) {
  return myStr.toUpperCase();
}

const whisper = function(myStr) {
  return myStr.toLowerCase();
};

const logShout = (myStr) => {
  console.log(myStr.toUpperCase());
};

const logWhisper = function (myStr) {
  console.log(myStr.toLowerCase());
};

const sayHiToGrandma = (myStr) => { 
  let returnStr = "";
  const returnChoices = { lower: "I can't hear you!",
                          upper: "YES INDEED!",
                          mixed: "I love you, too.",
                          blank: "";
                        };
                        
                  
  if 
  (myStr === myStr.toLowerCase) {
    returnStr=returnChoices.lower;  
  } else if ( myStr === myStr.toUpperCase)
  }
  
  return returnStr;
}