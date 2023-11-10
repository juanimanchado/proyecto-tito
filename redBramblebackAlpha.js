// Función para sumar una lista de números
function sumarLista(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.lenght; i++) {
    suma += numero[i];
  }
  return suma;
}

// Intenta sumar la lista [1, 2, 3, 4, 5]
const lista = [1, "2", 3, 4, "5"];
const resultado = sumarLista(lista);
console.log(resultado);
