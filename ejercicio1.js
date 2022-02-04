const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];

//hacer una funcion para determinar si "X"numero es primo

  function esPrimo(ejercicio1) {
       for(let i = 2,numero=Math.sqrt(ejercicio1); i <= numero; i++)
        if(ejercicio1 % i === 0) return false;
    return ejercicio1 > 1;
}   

//Math.sqrt es para hacer la raiz cuadrada de "X" numero

for (let x=3;x<=100;x++) {
  if (esPrimo(x)) 
  /* esPrimo es la funcion matematica para determinar si un numero es primo, 
  el cual es divisive entre el mismo y 1*/

      console.log("El número " + x + " es primo");
}