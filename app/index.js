class Car{
constructor(name, year){
this.name = name;
this.year = year;
}
}
function sayHello(name) {
    console.log(name, "is about to start his first node script");
    }
    
    sayHello('Olumide');
    
    function calcAge(dob){
        const date = new Date();
        yr = date.getFullYear();
        return yr - dob;
    }
     age = calcAge(1989);
     console.log(age);
     //console.log(global);
    
     var greeting = "Hello, welcome to NodeJs scripting."
    // console.log(greeting.toUpperCase());
const myCar = new Car("Benz", 2017);
console.log(myCar)
