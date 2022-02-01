// add a three number find the biggest number
function findLargest(frist,second,third){
    if(frist>second && frist>third){
        return frist;
    }
    else if(second>frist && second>third){
        return second;
    }
    else{
        return third;
    }
}
var result=findLargest(21,45,2);
console.log("thats is largest number",result);