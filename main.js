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

    // append a square to the grid
    $('.grid').append('<div class="square"></div>');

    // append a text area to a square
    $('.square').eq(i).append('<div class="text-area"></div>');

    // set square width
    $('.square').eq(i).width('calc(' + square_side + ' - 4px)');

    // set square width
    $('.square').eq(i).height('calc(' + square_side + ' - 4px)');

    // add the random number to the text area
    $('.text-area').eq(i).append(random_number);

    // change background color if random_number is:
    // zero => green
    // even => red
    // odd => black (default color)
    numberColor();
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function numberColor() {
    // check if random_number is 0
    if(random_number == 0) {
        // zero => green color
        $('.square').eq(i).addClass('zero');
    // or even
    } else if( (random_number % 2) == 0) {
        // even => red color
        $('.square').eq(i).addClass('red');
    }
}
