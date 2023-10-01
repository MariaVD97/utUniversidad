
// Crear una lista que contenga los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    // Verificar si el número es divisible entre 3 y 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Ingeniería UTTC");
    }
    // Verificar si el número es divisible entre 3
    else if (i % 3 === 0) {
      console.log("UTTC");
    }
    // Verifica aqui si el número es divisible entre 5
    else if (i % 5 === 0) {
      console.log("Ingeniería");
    }
    // Si no cumple ninguna de las condiciones anteriores, imprimir el número
    else {
      console.log(i);
    }
  }
  