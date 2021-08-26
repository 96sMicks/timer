const getTimeArrayInSeconds = process.argv.slice(2); // Gets an array of time inputed in the command line

const filteredArray = getTimeArrayInSeconds.filter(num => num > 0);
// console.log(filteredArray)


const timeConverterArray = filteredArray.map( (num) => Number(num)*1000 );
 


// console.log(timeConverterArray) // The inputed times converted to milliseonds array

timer = function(times) {
  for (const beepTime of times) {
  if (times.length = 0) {
    console.log("No numbers inputed");
  }
    // console.log(times);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, beepTime);
  }
}

timer(timeConverterArray);
