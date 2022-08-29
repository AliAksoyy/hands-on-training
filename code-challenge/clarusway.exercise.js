// **********************1**********************

// Write a JavaScript program to determine a year is a leap year in the Gregorian calendar. (Please search the conditions for the leap year)

// pseudocode:

// (0-99) only divisible by 4 --> leap year
// (100-400) divided by 4 and  if not divisible by 100 --> leap year
// if divisible by 100 and divisible by 400 --> leap year

// first way:
const isLeapYear = (year) => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  } else {
    if (year % 4 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }
};

isLeapYear(64);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(1912);

// second way:
function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

// *********************************2******************
// üçgenin alanı 3 kenarı bilinen

const areaOfTriangle = (a,b,c) => {
    let s =(a+b+c) / 2;

    return (s*(s-a)*(s-b)*(s-c)) **0.5
}
console.log( areaOfTriangle(3,4,5))

// ******************3********************

const absoluteResult = (num) => {
    if(num<20) {
        return 20 - num
    } else {
        return Math.abs((20-num) * 2)
    }
}
   console.log( absoluteResult(15))
   console.log( absoluteResult(35))