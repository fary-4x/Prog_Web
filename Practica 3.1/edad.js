// Farinel Rosa {2021-1042}

// Partiendo de este código validar que la edad correcta sea un número
// entre 1 y 120.


let edad = Number(prompt('Introduzca un valor:'));

if(Number.isNaN(edad)) {
    console.log('Edad incorrecta: ' + edad)
}
else if(edad <=120 && edad >0) {
    console.log(edad + ' Edad valida' )
} else {
    console.log( edad + ' Edad invalida, intente nuevamente!' )
}
