function calculatecartprice(...num1){
    return num1
}
//console.log(calculatecartprice(200,400,500));

const user={
    username:"Shoukat",
    price:199
}


function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)

handleobject({
    username:"Shoukat",
    price:299
})