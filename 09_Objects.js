
// //Literals objects
// const info= {

//     name: "Shoukat",
//     age: 18,
//     Email: "Shoukat@google.com",
//     isLoggedIn: false,
//     lastLoggedIn: ["Monady","Tuesday"]
    
// }
 

// // console.log(info.Email);
// // console.log(info["age"]);

// // info.Email="magsi@gmail.com"
// // Object.freeze(info)
// // info.Email="shahzeb@gmail.com"
// // console.log(info.Email);

// //functions
// info.greeting = function(){

//     console.log("hello JS User");
// }

// info.greetingtwo = function(){
//     console.log(`Hello JS User, ${this.name}, 
//     Here is your Email: ${this.Email}, 
//     This is age: ${this.age}`);
// }
// console.log(info.greeting());
// console.log(info.greetingtwo());

// const tinder= new Object()

// console.log(tinder);
const tinder= {

}
//console.log(tinder);
tinder.email="Magsi@google.com"
tinder.name = "Shoukat Ali"
tinder.id = "1234abc"
//console.log(tinder);

const reguser ={
    email:"Shahazeb@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shoukat",
            lastname:"Magsi"
        }
    }
}

//console.log(reguser.fullname.userfullname.firstname);

//Combination of Objects

// const obj1={a:'1',b:'2',c:'3'}
// const obj2={d:'4',e:'5',f:'6'}
// //const obj3 = Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);

//using array in objects

const user =[
    {
        id:1,
        email:"Magsi@gmail.com"
    },
    {
        id:2,
        email:"Sain@gmail.com"
    },
    {
        id:3,
        email:"Shahzeb@gmail.com"
    },
    {
        id:4,
        email:"Shoukat@gmail.com"
    }
]

// user[1].email
// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));

console.log(tinder.hasOwnProperty('email'));
