

// Numbers
const  btn_data_number = document.getElementsByName('data_number');
const  btn_data_opera = document.getElementsByName('data_operation');
const btn_data_equal = document.getElementsByName('data_equal')[0];
const btn_data_delete = document.getElementsByName('data_delete')[0];

//Variable para el resultado final
var result = document.getElementById('final_display');

//Variables para las operaciones
var actual_ope = '';
var last_ope = '';
var operation = undefined;

console.log(final_display);

//Allow take every buttons from numbers and do the function add_number
btn_data_number.forEach(function(boton) {
    boton.addEventListener('click', function(){
        add_number(boton.innerText);
    });
})

//Allow take every buttons from operators and do the function select_operation
btn_data_opera.forEach(function(boton) {
    boton.addEventListener('click', function(){
        select_operation(boton.innerText);
    });
})

//Take the button equal's event, then do calculate and display result
btn_data_equal.addEventListener('click', function() {
    calculate();
    display_result();
})

//Take the button delete's event, then do erase and display result
btn_data_delete.addEventListener('click', function() {
    erase();
    display_result();
})

//Receive button number and concatenate numbers clicked.
function add_number(num) {
    actual_ope = actual_ope.toString() + num.toString();
    display_result();
}

//Select the operation comand and put it in operation var
function select_operation(op) {
    if(actual_ope === '') return;
    if(last_ope != ''){
        calculate();
    }
    operation = op.toString();
    last_ope = actual_ope;
    actual_ope = '';
}

function calculate(){
    var calculo;
    var before = parseFloat(last_ope);
    var actual = parseFloat(actual_ope);

    if(isNaN(last_ope) || isNaN(actual_ope)) return;
    switch(operation){
        case '+' :
            calculo = before + actual;
            break;
        case '-': 
            calculo = before - actual;
            break;
        case '*':
            calculo = before * actual;
            break;
        case '/':
            calculo = before / actual;
            break;
        default: 
            return; 
    }

    actual_ope = calculo.toFixed(4);
    operation = undefined;
    last_ope = '';
}

function erase(){
    actual_ope = '';
    last_ope = '';
    operation = undefined;
}

function display_result(){
    result.value = actual_ope;
}