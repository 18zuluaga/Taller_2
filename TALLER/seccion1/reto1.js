
const destino = prompt("donde deseas viajar");
let dias = prompt("cuantos dias dura tu viaje");
let presupuesto = prompt("indique su presupuesto inicial");
let souvenir = []


function costeDelviaje (presupuestoT,diasV){
    costeDiario = presupuestoT/diasV;
    return costeDiario
}

if (costeDelviaje(presupuesto,dias) > 200000 ){
    alert("tienes sufisiente dinero");
}
else {
    alert("debes de ajustar tu presupuesto");
}








