
let card1 = [2,3,5,6,8,'Jack','Queen','King'];
let cards = ['jack', 8, 2, 6, 'king','king', 5, 3, 'queen', 'queen'];

let cardOther = {};

cards.sort((a, r) => {
    let index1 = card1.indexOf(a.toString().charAt(0).toUpperCase() + a.toString().slice(1));
    let index2 = card1.indexOf(r.toString().charAt(0).toUpperCase() + r. toString().slice(1));
    cardOther[a.toString()] = index1;
    cardOther[r.toString()] = index2;
    return index1 - index2;
    
});

console.log(cards);