//------- Time Conversion -------//
// https://www.hackerrank.com/challenges/time-conversion/problem

//----------------NOTES----------------//
/*
 1. substr: extracts a part of a starting
 2. substr(start, length)
 3. substr(-4, 2): Extract the last 4 and make the length 2
 4. If the hours is equal to 12 make it 00
 5. If it is PM, make the hours
 6. parseInt: takes a string and returns first interger
 7. parseInt(string, radix)
     - string: value to be parsed
     - radix: numeral system. common is 10 (decimal). just use 10.
*/

const timeConversion = (time) => {
  let hours = time.substr(0, 2);
  let minutes = time.substr(3, 2);
  let seconds = time.substr(-4, 2);
  let convention = time.substr(-2, 2);
  if (hours === "12") {
    hours = "00";
  }
  if (convention === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  let convertedTime = `${hours}:${minutes}:${seconds}`;
  return convertedTime;
}

console.log(timeConversion("07:05:45PM"));
