//functions in JS

// function name(number1,number2){
//    console.log (number1+number2);
// }
// name(1,2)

function myname(){
    console.log("s");
    console.log("h");
    console.log("o");
    console.log("u");
    console.log("k");
    console.log("a");
    console.log("t");

}
// myname()


// function number(number1,number2){
//    return number1+number2
    
// }
// number(1,2)

// function loginUserMessage(username){
//   if (username===undefined) {
//     console.log("Please Enter the name");
//   }
//     return `${username}, just Logged In`
// }
// //console.log(loginUserMessage("Shoukat"))
// console.log(loginUserMessage("User"));


function loginUserMessage(username){
    if (!username) {
    //  console.log("Please Enter the name");
        return
    }
      return `${username}, just Logged In`
  }
  //console.log(loginUserMessage("Shoukat"))
  //console.log(loginUserMessage("User"));

