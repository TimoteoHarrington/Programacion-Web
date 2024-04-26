//If , else , elif . IGUAL QUE EN

function dejarpasar(edad){
    if (edad >= 18){
        console.log('dejar pasar')
    }
    else{
        console.log("no dejar pasar")
    }
}

//**************************************************************//

// for (variable de iteracion, condicion, variacion)

function contarhasta10(){
    for(let i = 0; i <= 10 ; i++){
        console.log(i);
    }
} 

notasParcial = [1,2,3,4,5,6]

function duplicarNotas(array){
    for ( let i = 0 ; i<array.length; i++){
        array[i] = array[i]*2
    }
    return array
}

console.log(duplicarNotas(notasParcial)) 


//**************************************************************//

// Métodos de arrays

// .push agrega al final
// .pop saca el último valor 
// .shift saca el primer valor
// .unshift agrega al principio
// .indexOf busca el índice de un elemento
// .reduce es un método que se utiliza para reducir los elementos de un array a un solo valor. Esto se logra aplicando una función proporcionada por el usuario (llamada función de reducción) a cada elemento del array, de izquierda a derecha, para reducirlos a un único valor.

/******************************************************************/ 

// DOM 
//queryselector