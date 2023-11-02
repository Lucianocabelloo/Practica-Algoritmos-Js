function analizarCadena(cadena) {
  let soloMinisculas = true;
  let soloMayusculas = true;

  for (let i = 0; i < cadena.length; i++) {
    let caracteres = cadena.charAt(i);

    if (caracteres == caracteres.toLowerCase()) {
      soloMayusculas = false;
    } else if (caracteres == caracteres.toUpperCase()) {
      soloMinisculas = false;
    }
    if (!soloMayusculas && !soloMinisculas) {
      return "Hay un mix de mayusculas y minusculas";
    }
  }

  if (soloMayusculas) {
    return "Hay solo mayuscululas";
  } else if (soloMinisculas) {
    return "Hay solo minuscukas";
  }
}

const resultado1 = analizarCadena("SOLOMAYUSCULAS");
console.log(resultado1);

const resultado2 = analizarCadena("solominusculas");
console.log(resultado2);

const resultado3 = analizarCadena("MixTuraDeMayusYMinus");
console.log(resultado3);
