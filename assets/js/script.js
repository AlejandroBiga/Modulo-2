var numero = 5;

var dia1 = 15;
var dia2 = 15;
var dia3 = 16;

var dia30 = 15;


// crear un Array
var array = [100, 101, 102, 103];
// posiciones      0    1   2   3  ...

// array con distintos tipos de datos 
// - number
var numeros = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
// - string
var textos = ['texto 1', 'texto 2', 'texto 3'];
// - array ??

// - funcion ??
var funciones = [
    () => alert('soy un alert'),
    () => console.log('soy un log'),
    () => console.time(),
    function(){
        alert('otro')
    }
];

// agregar elementos a un array push()
var ar = []; //var arr = new Array(); es igual a la anterior
ar.push(5);
ar.push(15);
ar.push(100);

var temperaturas = [];
var temperaturas2 = [];

for (let i = 0; i < 31; i++) {
    let numeroAleatorio = (Math.random() * 15) + 15;
    temperaturas.push(numeroAleatorio);   //forma push()

    temperaturas2[i] = numeroAleatorio;   //forma directa
}

// acceder a los elementos de un array
var pos0 = ar[0];
var pos2 = ar[2];
console.log(pos0);
console.log(ar[1]);

console.clear();

for (let i = 0; i < temperaturas.length; i++) {
    console.log('La temperatura del dia '+ (i+1) + ' fue de: ' + temperaturas[i] + ' ºC');    
}

console.clear();

var ultimo = temperaturas.pop(); //obtenemos el ultimo elemento y lo eliminamos
var primero = temperaturas.shift(); //obtenemos el primer elemento y lo elimino



// metodos interesantes
var numeros = [];
for (let i = 0; i < 100; i++) {
    numeros.push(i+1);
}

// 1- map()
function elevarAlCuadrado(numero) {
    return numero*numero;
}

function sumar500(numero) {
    return numero+500;
}


var cuadrados = numeros.map((n) => n*n);

var cuadrados2 = numeros.map(elevarAlCuadrado);

var sumados = numeros.map(sumar500);

var doubles = numeros.map(function(x) {
    return x * 2;
 });

var mascaras = numeros.map(function(x) {
    let par = false;
    if (x%2 === 0) {
        par = true;
    }
    return par;
 });


 var otro = numeros.map(function(x) {
    if (x > 50) {
        return x + 100;
    }
    return x;
 });



// 2- filter()
var filtrados = numeros.filter(function (x) {
    //return x > 50;
    if(x > 50){
        return x;
    }
});



// 3- sort()
var ordenadoMayorMenor = numeros.sort(function (x, y) {
    if( x > y){
        return x;
    }else{
        return y;
    }
});

var ordenadoMenorMayor = numeros.sort(function (x, y) {
    if( x < y){
        return x;
    }else{
        return y;
    }
});



// 4- every()
var todosPares = numeros.every(function (n) {
    if(n % 2){
        return true;
    }
});

numeros.push('555');
var todosNumeros = numeros.every(function (n) {
    if(typeof n === 'number'){
        return true;
    }
});

// 5- some()
var algunPar = numeros.some(function (n) {
    if(n % 2){
        return true;
    }
});

var algunString = numeros.some(function (n) {
    if(typeof n === 'string'){
        return true;
    }
});