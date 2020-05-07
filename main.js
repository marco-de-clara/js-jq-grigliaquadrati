// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

// length of the grid's side
var grid_side = 5;

// length of the square's side
var square_side = (100 / grid_side) + '%';

// number on squares in the grid
var square_number = grid_side * grid_side;

// min value of randomInRange
var min = 0;

// max value of randomInRange
var max = 10;

// generating a grid n*n
for (var i = 0; i < square_number; i++) {
    // store a random number
    var random_number = randomInRange(min, max);

    $('.grid').append('<div class="square"></div>');

    $('.square').eq(i).append('<div class="text-area"></div>');

    $('.text-area').eq(i).append(random_number);
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
