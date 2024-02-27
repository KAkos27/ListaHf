import kutyaLista from "./adatok.js";

function nevKiiras(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`A(z) ${i + 1}. kutya neve: ${lista[i].nev}`);
  }
}

nevKiiras(kutyaLista);
