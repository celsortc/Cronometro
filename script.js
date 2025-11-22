const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const reiniciar = document.querySelector(".reiniciar");
const milisegundos = document.querySelector(".milisecs");
const segundos = document.querySelector(".segundos");

var interval;

iniciar.onclick = () => {
  var mili = +milisegundos.innerHTML;

  interval = setInterval(() => {
    mili += 10;

    milisegundos.innerHTML = formataNumero(mili);
    if (mili >= 1000) {
      mili = 0;
      var segs = +segundos.innerHTML;
      segs++;

      segundos.innerHTML = formataNumero(segs);
    }
  }, 10);
};

function formataNumero(numero) {
  return numero.toString().padStart(2, "0").slice(0, 2);
}
