let contador = 0;
while (contador < 100) {
  contador += 1;
  if (contador % 3 === 0 && contador % 5 === 0) {
    console.log("fizzbuzz");
  } else if (contador % 3 === 0) {
    console.log("fizz");
  } else if (contador % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(contador);
  }
}
