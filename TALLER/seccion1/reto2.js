let souvenirs = [];

while (true) {
  let op = prompt('deseas agregar un suvenir 1=si 2=no');
  if (op == 1) {
    let nombreS = prompt('nombre del souvenir');
    let costoS = prompt('ingrese cuanto vale el souvenir');
    let disponibilidadS = Number(
      prompt(
        'ingrese si esta disponible en 0=para no esta disponible y 1 para si esta disponible'
      )
    );
    if (
      Number(costoS) >= 0 &&
      (Boolean(disponibilidadS) == true || Boolean(disponibilidadS) == false)
    ) {
      const souvenir1 = {
        nombre: nombreS,
        costo: Number(costoS),
        disponibilidad: Boolean(disponibilidadS),
      };
      alert('se agrego tu souvenir');
      souvenirs.push(souvenir1);
    } else {
      alert('verfique los datos del souvenir sean correctos');
    }
  } else {
    break;
  }
}

while (true) {
  var presupuesto = Number(prompt('cual es tu presupuesto actual'));
  if (Number.isFinite(presupuesto)) {
    break;
  }
}

while (true) {
  let op = prompt('deseas comprar un souvenir?');
  if (op == 'si') {
    let nameS = prompt('cual es el nombre del souvenir que deseas comprar');
    let souvenirAComprar;
    for (let souvenir of souvenirs) {
      if (souvenir.nombre === nameS) {
        souvenirAComprar = souvenir;
      }
    }
    if (!souvenirAComprar) {
      alert('No existe el suvenir con ese nombre');
      continue;
    }
    if (souvenirAComprar.costo > presupuesto) {
      alert('No puedes comprar este suvenir');
      continue;
    }
    if (souvenirAComprar.disponibilidad) {
      presupuesto -= souvenirAComprar.costo;
      alert(`has comprado es subenir ${souvenirAComprar.nombre}`);
    } else {
      alert('no esta disponible el souvenir');
    }
  } else {
    break;
  }
}
