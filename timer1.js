const getTimeArrayInSeconds = process.argv.slice(2); // Gets an array of time inputed in the command line

// const filteredArray = getTimeArrayInSeconds.filter(num => num > 0);
const filteredArray = getTimeArrayInSeconds.filter(x => {
  if (isNaN(x) || x < 0 ) {
    return false
  } else {
    return true
  }   
})

// const arrays = [1, 2, 3]
// const newArrays =  arrays.filter(x => {
//   if (x > 1) {
//     return true;
//   } else {
//     return false;
//   }
// })

console.log(filteredArray);


const timeConverterArray = filteredArray.map( (num) => Number(num)*1000 );
 


// console.log(timeConverterArray) // The inputed times converted to milliseonds array

timer = function(times) {
  for (const beepTime of times) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, beepTime);
  }
}

timer(timeConverterArray);
