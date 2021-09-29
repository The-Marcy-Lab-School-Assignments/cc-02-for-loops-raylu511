//1
function countToTen(){
  for(let i=1; i<=10;i++){
      console.log(i);
  }
}

//2
function countFromOne(num){
  for(let i=1;i<=num;i++){
      console.log(i);
  }
}

//3
function countEveryEven(num){
  for(let i=1;i<=num;i++){
      if(i%2===0){
          console.log(i);
      }
  }
}

//4
function countEveryOdd(num){
  for(let i=1; i<=num;i++){
      if(i%2!==0){
          console.log(i);
      }
  }
}

//5 
function countEvens(numArray){
    let evenCounter = 0;
    numArray.forEach(number => {
        if(number%2===0) evenCounter++;
    });
    return evenCounter;
}




// countToTen();                                     //1-10
// countFromOne(5);                                  //1-5
// countEveryEven(10);                               //2,4,6,8,10
// countEveryOdd(10)                                 //1,3,5,7,9
// console.log(countEvens([1,2,3,4,5,6,7,8,9,12]));  //5
// console.log(countEvens([1,2,22,204]));            //3
// console.log(countEvens([1,3,7,17,19]))            //0