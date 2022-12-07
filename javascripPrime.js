const curry = () => {
    //To store the previous values
    let sum = 0;
    
    //Return an inner function 
    //Which will have access to its parent function's store
    return function(num = 0) {
      sum += num;
      return sum;
    };
  };

  let sum = curry();
  console.log(sum);
  sum(5)

const  result = sum(5); //5
console.log(result);