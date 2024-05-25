// let isStudent =  false;

// let fee = isStudent ? 200 : 600;

// console.log(fee)

// let week = 'Tuesday';

// switch (week){
//     case 'Monday':
//         console.log('First day of the week');
//         break
//     case 'Friday':
//         console.log('Last day of the week');
//         break
//     default:
//         console.log('Mid')


// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for loop

// for(let number = 1; number <= 10; number++){
//     console.log(number)
// }

// while loop

// let number = 1;

// while(number <= 10){
//     console.log(number)
//     number++
// }

// Do while loop

// let number = 1;

// do {
//     console.log(number)
//     number++
// }while(number <= 10)

// for... of loop

// let numbers = [1,2,3,4,5];

// for(number of numbers){
//     console.log(number)
// }

// write a loop that count 1 to 1000

// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 1)
//     console.log(i)
// }

// for ... in loop

// let person = {name: 'Benson', age: 90}

// for(let key in person){

//     console.log(key + ':' + person[key])
// }

for(let i = 7; i >=1; i--){
    let star = ''
    for(let r = 1; r <= i; r++){
        star+= '#'
    }
    console.log(star)
}
for(let i = 1; i <=7; i++){
    let star = ''
    for(let r = 1; r <= i; r++){
        star+= '#'
    }
    console.log(star)
}

let totalNum = 7;
for(let i = 1; i <= totalNum; i++){
    let line = ''
    for(let r = 1; r <= totalNum - i; r++){
        line += ' ';
    }
    for(let k = 1; k <= i; k++){
        line += '#';
    }
    console.log(line)
}

let grid = 8;
let chaseBoard = '';

for(let row = 0; row < grid; row++){
    for(let col = 0; col < grid; col++){
        if((row + col) % 2 == 0){
            chaseBoard += ' ';
        }else{chaseBoard += '#'}
    }
    chaseBoard += '\n';
}
console.log(chaseBoard)