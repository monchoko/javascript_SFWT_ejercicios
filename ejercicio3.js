// crear una funcion para hacer la formurla, donde "n" es el numero que va a hacer la formula
function fibo_numeros(n){
//declarar la variante con arreglos    
    var fbn = [0,1,2]
// hacemos un ciclo para sumar del primer numero con el segundo
// i=2(por que empieza a contar de la segunda posicion del arreglo)
// i=1, 1 es menor "n", 1+1
    for(let i=2; i<n; i++){
// [i] el arreglo guarda el resultado para volver a hacer la formula
// [i-1] 0-1=1 (1=primera posicion del arreglo "0")
// [i-2] 1-1=0 (1=segunda posicion del arreglo "1")
// fbn [i] guarda el resultado de de la formula (fbn[i-1] + fbn[i-2]) para seguir con el siguiente ciclo       
    fbn [i] = fbn[i-1] + fbn[i-2];
    }
// regresa el resultado de la formula (fbn[i-1] + fbn[i-2])    
    return fbn;
}
// imprime el resultado de la formula (fbn[i-1] + fbn[i-2])
console.log(fibo_numeros(50))