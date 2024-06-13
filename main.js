const datNombre = document.querySelector(`#datNombre`);
const datCal = document.querySelector(`#datCal`);
const datMen = document.querySelector(`#datMen`);
const btnEnviar = document.querySelector(`#btnEnviar`)

var mensaje;

function enviar(){
 mensaje = `https://api.whatsapp.com/send?phone=4141090286&text=${datNombre.value}%20${datCal.value}%20${datMen.value}`;
 btnEnviar.href = mensaje;
}