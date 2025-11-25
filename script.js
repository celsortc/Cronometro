const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const reiniciar = document.querySelector(".reiniciar");
const milisegundos = document.querySelector(".milisecs");
const segundos = document.querySelector(".segundos");
const minutos = document.querySelector(".minutos");

var interval;
var cronPausado = false;

iniciar.onclick = () => {
  if (cronPausado === true) {
    var mili = +formataNumero(milisegundos.innerHTML);
    var sec = +formataNumero(segundos.innerHTML);
  } else {
    var mili = +milisegundos.innerHTML;
    var sec = +segundos.innerHTML;
  }

  // segundos.innerHTML = 55;
  btnToggle();
  interval = setInterval(() => {
    cronPausado = false;
    if (mili < 990) {
      console.log("entrou 1", mili, sec, milisegundos.innerHTML);

      mili += 10;
      milisegundos.innerHTML = formataNumero(mili);
    } else if (mili === 990) {
      console.log("entrou2", mili, sec, milisegundos.innerHTML);

      mili = 0;
      var sec = +segundos.innerHTML;
      sec++;
      segundos.innerHTML = formataNumero(sec);
      if (sec > 59) {
        sec = 0;
        segundos.innerHTML = formataNumero(sec);
        var min = +minutos.innerHTML;
        min++;
        minutos.innerHTML = formataNumero(min);
      }
    }
  }, 10);
};

function formataNumero(numero) {
  if (cronPausado === true) {
    return numero.toString().padEnd(3, "0");
  } else {
    if (numero < 100) {
      return numero.toString().padStart(2, "0");
    } else {
      return numero.toString().slice(0, 2);
    }
  }
}

function btnToggle() {
  if (iniciar.disabled === true) {
    iniciar.disabled = false;
    pausar.disabled = true;
  } else {
    iniciar.disabled = true;
    pausar.disabled = false;
  }
}

pausar.onclick = () => {
  clearInterval(interval);
  btnToggle();
  cronPausado = true;
};
