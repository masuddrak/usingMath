// add a three number find the lowest number
function findLargest(frist,second,third){
   if(frist<second && frist<third){
       return frist;
   }
   else if(second<frist && second<third){
       return second;
   }
   else{
       return third;
   }
}
var result=findLargest(3,2,1);
console.log("thats is lowes number",result);