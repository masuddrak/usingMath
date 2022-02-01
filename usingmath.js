// add a array number
let numbers=[20,10,4,0,5,0,4,20];
function addArray(numbers){
    let sum=0;
for(let i=0; i<numbers.length; i++){
    sum=sum+numbers[i];
}
return sum;
}
 var result=addArray(numbers)
 console.log(result);

