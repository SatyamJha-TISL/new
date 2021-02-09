/*const { Console } = require("console");

const user = {
    name: 'satyam' ,
    age : 26 
}
user.name = 'shubham' ;

console.log(user);
const arr =[];
arr.push('c');
console.log(arr);

// primitive data types 
let item ;
item = 6 ;
item = 'hello';
item =true;
// Reference data type [address is benig stored by ]

// By using object
let a = { value : 20}
let b =a ;
a.value = 30 ;
console.log (a,b) ;
// a = 30 and b = 30 because here the reference is passsed 

// by using function 
/*let name= 'alan' ; 
function messsage (name) {// parameter being passsed is primitive data type
    name = 'satyam' ;
    console.log ('name inside the function :' , name) ;

}
messsage(name) ; // name inside the function : satyam
console.log(name); // alan */

/*let name = {
    value : 'alan' 
}
function messsage (name) {// parameter being passsed is reference  data type
    name.value = 'satyam' ;
    console.log ('name inside the function :' , name.value) ;

}

messsage(name) ; // name inside the function : satyam
console.log(name); // satyam*/


/*val = 999
val =  val.toString()
console.log (val.length);*/


let val 
val = '8' ;
val = Number(val);

// Boolean to number
val =false ;
val = Number(val);

/* cant be converted to no 

val = 'alan'
val = [1,2,3]
val = Number(val);

//string to no 

val = parseInt('12.34') */


// Mathobject 

num = Math.PI

val = Math.round(8.14);
val = Math.pow(8,2)
console.log(val);
val = Math.max(2,6,1);
console.log(val);

val = Math.floor(Math.random() * 5 + 1 ) ;
console.log(val) ;

// String methods 

const fname =   " Alan" ;
const lastname = "Smith" ;

val =  fname + " " + lastname ;
console.log(val);

val  =  " Alan " ;
val+= "Smith" ;
console.log(val);
val =  val.length ;
console.log(val)

// Template  literals

let name = " satyam"
let age = 15 ;
let drinking = " cola " ;
let message ;
message = " Hello my name is " + name + " ," + age + " years old " + "and I like drinking" + drinking ;

message = ` Hello my name is ${name} . and  I like drinking ${age >18 ? 'beer' : 'coke'}`;
console.log(message);


// Arrays 

/*const arr1 = [30,40,50]
const arr2 = new Array(80,20);
const details = [ 'alan' , 30 , null , undefied , false , { name: satyam , age:30} , new Date()]*/


/*val = arr1.length ;

// check whether its an array 
val = Array.isArray(arr1);


// for each function 
val = [1,2,3,4,5]
val.forEach(value=> console.log(`hi ${value}`) );

//map function 
 message = val.map( value => `hi ${value}`);
console.log(message); 

// array destructuring //

// no array 
 [a,b] = [1,2]
console.log(a);
console.log(b);

[a,b,...c] = [1,2,3,4,5]
console.log(c);

// string array
[user1 , user2 , user3] = ['john' , 'bro' , 'lo'] ;
console.log(user2) ;

// using functions that returns array 
const getitems =() => ( ['milk' , 'fish' , 'apple']);
[item1 , item2 , item3] = getitems();
console.log(item2);
 

// object destructuring //

({a,b}  = {a:`satyam` , b:`shubham`});
console.log(a);

const user = {
    'id' : 7 ,
    'email' : 'satyamjha1796@gmail.com' ,
     'first_name' : `satyam` , 
     'last_name' : ` jha`
}

const {email ,id} =user;
console.log(email) ; */


 let arr1 = [6,2,3,7,5] ;
 let arr2 = [1,2,3,4,5] ;

for(let i=0 ; i<arr1.length ; i++)
{
    for(let j=0 ; j<arr2.length ; j++)
    {
        if (arr1[i] = arr2[j]) {
            return {
            arr2.splice(j,1);
            j-- ;

            arr1.splice(i,1);
            i-- ;}
        }
    }
    
}

console.log(arr1);
// console.log(arr2);


