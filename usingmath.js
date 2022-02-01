// add a three number find the lowest number
function findLargest(frist,second,third){
   if(frist<second && frist<third){
       console.log('frist number is lowest');
   }
   else if(second<frist && second<third){
    console.log('second number is lowest');
   }
   else{
    console.log('third number is lowest');
   }
}
var result=findLargest(3,2,11);
