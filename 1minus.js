

// alert("hello,world");  


var fruits= "mango"
console.log(fruits);

// document.write("hello,5+6")


// var name = "Ali"; 
// document.write("name");

// console.log("name");

var greeting= "hello"
window.alert("5+6");

// strings

// function declaration

function greet() {
    console.log("hello there");
}


// function expression

greet()
greet()
greet()
greet()
greet()


// let age="19";
// let year="2019";


// console.log(age,year);

// age="30";
// console.log(age);

// const points="20";
// console.log(points);

// var score ="50"
// console.log(score)



//    string concatenation

//  let firstName="ben"
//  let lastName="carson"

//  let fullName= firstName + ' ' + lastName;
//  console.log(fullName);

//getting characters
    //  console.log(fullName[7])

 //string length
    //  console.log(fullName.length)

//string methods  
    // console.log(fullName.toUpperCase());
    //  let result= fullName.toLowerCase();
    //  console.log(result, fullName);

    // let  email="jkk@gmail.com"
    // console.log(email);
    
    // let result=email.lastIndexOf('k')
    
    
    // let result=email.slice(0,6)
    

    // let result= email.substr(0,6)
   
//    let result= email.replace('k','a')
//     console.log(result)








// numbers

let radius= (10)
let pi=(3.14)

// console.log(raduis, pi);

// math operators +, -, *, /, **, %

// console.log(10/2)
// let result= 'radius % 3'


//   area of circle

// let result= pi * radius**2;


// order of operation - B I D M A S

// let result= 5* (10-3)**2 ;

// console.log(result)

let likes=10;

//  likes= likes + 10;
// likes++;
// likes--;
// likes +=10;
// likes -= 5;
// likes*=2
// likes/=2


console.log(likes)


// NAN -  not a number
 console.log(5 +'hello')
 console.log(5 *'hello')
 console.log(5 -'hello')
 console.log(5 /'hello')

//  let result='the blog has '+ likes +' likes';
//  console.log(result)


 const title = 'best reads of  2019'
 const author= 'mario'
 const like= 30;

// concatenation way
// let result='The blog called '+ title +' by '+ author +' has '+ likes +'likes '

// template string way

// let result=`the blog called ${title}  by ${author} has  ${likes}likes`;
// console.log(result)

// html templates

// let html=
// `
// <h2>${title} <h2>
// <p>${author}<p>
// <span>This blog has ${likes}likes <span>

// `;
// console.log(html) 


// arrays
// let ninjas = ['shaun','ryu','chun-li',];
// ninjas[1] ='ben';
// console.log(ninjas);

// let ages= [20,25,30,35];
// ages[3]=40;
// console.log(ages[3]);

// let random=['first',1,'last',2]
// console.log(random);
// console.log(ninjas.length)

// array methods

// let result= ninjas.join('/')
// let result= ninjas.indexOf('chun-li')
// let result= ninjas.concat(['ken','crystal'])
// let result= ninjas.push('ken')
//  result=ninjas.pop()
// console.log(result)


// let age=null;
// console.log(age,age+3,`the age is  ${age}`);

// booleans and comparison
// console.log(true,false, 'true','false')

// methods can return boolean
// let email='ballergo@gmail.com' 
// let names= ['box','luigi','grace']

// let result=email.includes('@');

// let result= names.includes('luigi')
// console.log(result)

// let age=25
// console.log(age==25)
// console.log(age==30)
// console.log(age!=30)
// console.log(age>20)
// console.log(age<20)
// console.log(age>=25)
// console.log(age<=25)

// let name = 'shaun';

// console.log(name =='shaun')
// console.log(name =='prince')
// console.log(name !='prince')
// console.log(name <'Shaun')
// console.log(name >'Prince')
// console.log(name >='Prince')
// console.log(name <='Shaun')

// let age=25;
// console.log(age ==25)
// console.log(age =='25')
// console.log(age !=25)
// console.log(age !='25')

// strict comparison
// console.log(age ===25)
// console.log(age ==='25')
// console.log(age !==25)
// console.log(age !=='25')

// type conversion

// let score='100'

// score =Number(score)
// console.log(typeof score)

// let result = Number('hello')
// let result = String(50)
// console.log(score+1)

// let result= Boolean(0)
// l+++et result = Boolean('')
// console.log(result, typeof result)


// in loops

// for(let i = 0; i < 5; i++){
// console.log('in loop:' , i);
// }

// console.log('loop finished')


// for loops

// const names = ['shaun','mario','luigi'];

// for(let i = 0; i < names.length; i++){
//     // console.log(names[i])];
//     let html = `<div>${names[i]}</div>`
//     console.log(html)
// }


// while loops

const names =['shaun','mario','luigi'];
// let i = 0;

// while(i < 5){
//     console.log('in loop:',i);
//     i++
// }
// function  printTime() { var now = new Date();
//      var hours = now.getHours();
//       var mins = now.getMinutes();
//        var seconds = now.getSeconds();
//         document.write(hours+":"+mins+":"+seconds+"<br/>");   
        
//         setInterval("printTime()",1); 

  let  i = 0;
  while(1 < names.length){
      console.log(names[i]);
      i++;
  }            
