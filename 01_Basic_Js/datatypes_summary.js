// primitive

// 7 types: String, Number, Boolearn , null, underfined, Symbol, Bigint

const score=100
const scorevalue=100.2

const isLoggedIn =false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//const bigNumber = 34562465345n


//Reference (non primitive)

//Array, objects,functions

const heros =["shaktiman","nagraj","dooga"]
let myobj={
    name: "shakti",
    age:26,

}

const myfunction=function(){
    console.log("hello");
}

console.log(typeof myfunction);