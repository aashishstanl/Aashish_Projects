// function myFn(){
//     var x = 10;
//     console.log(x);
// }

// myFn();
// console.log(b);
// var b = 25 
// b = 20;

// b = 34;
// console.log(b);

// function myFunction()
// {
//     let num = 10;
//     if(num==="10"){
//         return true
//     }
//     else{
//         return false
//     }
// }
// myFunction()

// var grade = "A"
// var result = 0

// switch(grade)
// {
//     case "A":
//         result += 10;
//     case "B":
//         result += 10;
//     case "C":
//         result += 10;
    
//     default:
//         result += 10;
// }
// console.log(result)

// function output(object){
//     var place = object ? object.place : "Italy"
//     return "clean:" + place

// }
// console.log(output({place:India}))

// function output(object){
//     return object ? "yes" : "no"
    

// }
//     Boolean ans = true
// console.log(output(ans))
function output(object)
{
	var place= object ? object.place : "Italy";
	return "clean:"+ place;

}
output(India);