// class Car{
//     make;
//     model;

//     startTheCar(){
//         console.log("The car has started!!")
//     }


//     constructor (make,model) {
//         this.make=make;
//         this.model=model;
//     }
//     class ElectricCar extends Car{
//         battery_size;
//     }
    
// }
// let car1 = new Car();
// car1.make="2024";
// car1.model="G-Class";
// car1.startTheCar();

// let newCar = new Car("2024","G-Class");
// console.log(newCar);




// class Account {
//     #_balance=0;
//     deposit (howMuch,pass){
//         if (pass == "1234"){
//             this.#_balance+=howMuch
//             console.log (`you have ${this.#_balance} JOD in The Bank`)
//         }else console.log("Wrong Password")
//     }
//     withdraw (howMuch,pass){
//         if (pass == "1234"){
//             this.#_balance-=howMuch
//             console.log (`you have ${this.#_balance} JOD in The Bank`)
//         }else console.log("Wrong Password")
//     }
//     setBalance(howMuch){
//         this.#_balance=howMuch;
//     }
//     getBalance(){
//         return this.#_balance;
//     }


// }


// let user = new Account();
// user.deposit(3000,"1234");
// user.deposit(300,"1234");
// user.deposit(500,"1234");
// user.withdraw(2000,"1234")
// user.withdraw(100,"1234")
// // user.setBalance();
// console.log(user.getBalance());



