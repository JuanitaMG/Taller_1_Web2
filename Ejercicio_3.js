let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultadoParaNumerosPares = numbers.filter (function(numbers){
    return numbers % 2 === 0
})

let Multiplicacion = resultadoParaNumerosPares.map(function(numbers){
    return numbers * 2;
});

console.log("Este es el resultado de los numeros pares multiplicados por 2: ",Multiplicacion)