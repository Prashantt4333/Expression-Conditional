let a = 10;
let b = 4;

//Airthmetic Operators
console.log("a + b = " ,a + b )
console.log("a - b = " ,a - b )
console.log("a / b = " ,a / b )
console.log("a * b = " ,a * b )
console.log("a ** b = " ,a ** b )
console.log("++a  = " , ++a )
console.log("a++ = " , a++ )
console.log("--a = " , --a )
console.log("a-- = " , a-- )
console.log("a =" , a)
console.log("a-- = " , a-- )


//Assignment Operators

let assignment = 1;

assignment += 5
console.log("b is now =",assignment)

assignment -= 5
console.log("b is now =",assignment)

assignment *= 5
console.log("b is now =",assignment)

//Comparison Operators

let  comp1 = 9
let  comp2 = 8
console.log('comp1 == comp2 is', comp1 == comp2 )
console.log('comp1 != comp2 is', comp1 != comp2 )
console.log('comp1 === comp2 is', comp1 === comp2 )
console.log('comp1 !== comp2 is', comp1 !== comp2 )
console.log('comp1 > comp2 is', comp1 > comp2 )
console.log('comp1 < comp2 is', comp1 < comp2 )
console.log('comp1 <= comp2 is', comp1 <= comp2 )
console.log('comp1 >= comp2 is', comp1 >= comp2 )

//Logical Operator

let x = 5;
let y = 7;


//Conditional operator

let p = prompt("Hey Whats Your Age ?")

p = Number.parseInt(p) // Converting  the string to a number

if(p<0){
    window.alert("this is invalid age")
} 
else if(p<9){
    window.alert('you are a kid and you can not drive')
}
else if(p<18 && p>=9){
    window.alert('you are a kid and you can think drive after 18')
}
else{
   window.alert('you can now drive as you are above 18')
}



console.log("you can",(p<18? "not drive":'Drive'))

 