// Función para sumar una lista de números
function sumarLista(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) { // Debe ser "length" en lugar de "lenght"
      // Debes usar "numeros[i]" en lugar de "numero[i]"
      suma += numeros[i];
    }
    return suma;
  }
  
  // Intenta sumar la lista [1, 2, 3, 4, 5]
  const lista = [1, 2, 3, 4, 5]; // Cambiado "2" y "5" a números en lugar de cadenas
  const resultado = sumarLista(lista);
  console.log(resultado);
  