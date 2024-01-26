console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2"<1); //check oporetors should same. here both are numeric
console.log("02">1);

console.log(null>0);
console.log(null >= 0);
console.log(null>=0);
console.log(null>=1);
console.log(null>1);



//The reason is that an equality check == and comparisons > <>= <= work differentlty.
//comparisions convert null to a number, treating it as 0.
//That's why (3)null>=0 is true.  and (1) null >0 is false

// ===
console.log("2" ===2);