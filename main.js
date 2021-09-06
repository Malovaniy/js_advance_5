
//-----------------------------------------------------------------------------------------------------------
// Task1

// class Worker{
//     constructor(firstName, secondName, rate, days){
//         this.name = firstName
//         this.surName = secondName
//         this.rate = rate
//         this.days = days
//     }

//     getSalary(){
//        return this.rate * this.days
//     }
// }

// let worker = new Worker(`Ivan`, `yourkov`, `400`, `20`)

// console.log(worker);
// console.log(worker.name);
// console.log(worker.surName);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

//-----------------------------------------------------------------------------------------
// Task2

// class MyString{
//     constructor(){
  
//     }
//     reverse(string){
//         return string.split('').reverse().join('');
//     }
//     ucFirst(string){
//         let result = string.charAt(0).toUpperCase();

//         for(let i=1; i< string.length; i++){
//             result+= string.charAt(i).toLowerCase()
//         }
//         return result 
//     }
//     ucWords(string){
       
//         return string.split(' ').map(lord => lord.charAt(0).toUpperCase() + lord.toLowerCase().substring(1)  ).join(' ')
        
//     }
// }

// let str = new MyString()


// console.log(str);
// console.log(str.reverse(`ivan`));
// console.log(str.ucFirst(`ivan`));
// console.log(str.ucWords(`ivaN stepAn sergiy`))


// -----------------------------------------------------------------------------------------------------
// Task 3

class CoffeeMake {
    off(mashine) {
        this.mashine = mashine;
        console.log(`${mashine} is off`);
    }
    on(mashine) {
        this.mashine = mashine;
        console.log(`${mashine} is on`);
    }
}

// -----------------------------------------------------------------------------------------------------


class DribCoffeMachine extends CoffeeMake{
    slowSpeed(mashine) {
        console.log(`${mashine} speed --`);
    }
    moreSpeed(mashine) {
        console.log(`${mashine} speed ++`);
    }
}


const dribMachine = new DribCoffeMachine()

dribMachine.off('Капельна Кавоварка')
dribMachine.on('Капельна Кавоварка')
dribMachine.slowSpeed('Капельна Кавоварка')
dribMachine.moreSpeed('Капельна Кавоварка')

console.log(dribMachine);
// -----------------------------------------------------------------------------------------------------


class CarobCoffeMacine extends CoffeeMake{
    moreStrongCoffe(mashine) {
        console.log(`${mashine} strong ++`);
    }
    lessStrongCoffe(mashine) {
        console.log(`${mashine} strong --`);
    }
}

const carobMachine = new CarobCoffeMacine()

carobMachine.off('Ріжкова Кавоварка')
carobMachine.on('Ріжкова Кавоварка')
carobMachine.moreStrongCoffe('Ріжкова Кавоварка')
carobMachine.lessStrongCoffe('Ріжкова Кавоварка')

console.log(carobMachine);

// -----------------------------------------------------------------------------------------------------

class CoupleCoffeMachine extends CoffeeMake{
    timer(mashine, time) {
        this.timer = time;
        console.log(`${mashine} get coffe for ${time}`);
    }
}

let coupleMachine = new CoupleCoffeMachine('Парова Кавоварка')

coupleMachine.off()
coupleMachine.on()
coupleMachine.timer('Парова Кавоварка', '15min')


console.log(coupleMachine);

// -----------------------------------------------------------------------------------------------------

