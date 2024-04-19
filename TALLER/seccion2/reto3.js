while (true) {
  var clima = confirm('el lugar donde vas hace buen clima?');
  var espacio = Number(prompt('cuantos objetos extras caben en tu maleta?'));
  var pesoMax = Number(prompt('cuanto es el peso maximo de tu maleta'));
  var peso = Number(prompt('cuanto es el peso de tu maleta'));
  if (isNaN(espacio) && isNaN(pesoMax) && isNaN(peso)) {
    alert('ingresaste datos incorrectos');
  } else {
    break;
  }
}

if (pesoMax <= peso) {
  alert('no puedes llevar mas objetos');

} else if (!clima && (pesoMax - 10 <= peso) && espacio > 5) {
  alert(
    'te peudes llevar muchos objetos livianos y que te sirvan para climas malos'
  );
} else if (!clima && (pesoMax - 10 <= peso) && espacio < 5) {
  alert(
    'te puedes llevar pocos objetos livianos y que te sirvan para climas malos'
  );
} else if (clima && (pesoMax - 10 <= peso) && espacio > 5) {
  alert(
    'te peudes llevar muchos objetos livianos y que te sirvan para climas buenos'
  );
} else if (clima && (pesoMax - 10 <= peso) && espacio < 5) {
  alert(
    'te puedes llevar pocos objetos livianos y que te sirvan para climas buenos'
  );
}
 else if (clima && (pesoMax - 10 >= peso) && espacio > 5) {
  alert(
    'te puedes llevar muchos objetos  peso y que te sirvan para climas buenos'
  );
}else if (clima && (pesoMax - 10 >= peso) && espacio < 5) {
  alert(
    'te puedes llevar pocos objetos peso y que te sirvan para climas buenos'
  );
} else if (!clima && (pesoMax - 10 >= peso) && espacio > 5) {
  alert(
    'te puedes llevar muchos objetos  peso y que te sirvan para climas malos'
  );
}else if (!clima && (pesoMax - 10 >= peso) && espacio < 5) {
  alert(
    'te puedes llevar pocos objetos peso y que te sirvan para climas malos'
  );
}

let value ;

if (pesoMax <= peso){
  value = false;
}
else {
  value = true
}

let objetos = [];

let objetosExtra = 0;


while (value) {
  let op = Number(prompt('deseas agregar un objeto 1=si 2=no'));
  if (op == 1) {
    let nombreObjeto = prompt(
      'cual es el nombre del objeto que deseas agregar'
    );
    let pesoObjeto = Number(
      prompt('cual es el peso del objeto que deseas agregar')
    );
    let climaObjeto = confirm("tu objeto sirve para el mal clima?")
    if (isNaN(pesoObjeto)) {
      alert('ingrese un peso valido del objeto ');
    } else {
      if (pesoObjeto + peso <= pesoMax) {
        if (espacio >= objetosExtra) {
          const objeto = {
            name: nombreObjeto,
            peso: pesoObjeto,
            clima: climaObjeto
          };
          objetos.push(objeto);
          objetosExtra ++;
          peso += pesoObjeto;
        }
      } else {
        alert('exediste tu peso maximo');
        break;
      }
    }
  } else if (op == 2) {
    break;
  }
}


let objetosExtraMaleta = [];
let objetosExtraMaletaBuenos =  [];
let objetosExtraMaletaMalos =  [];

objetos.forEach((element) => {
  objetosExtraMaleta.push(element.name);
  if (element.clima == clima){
    objetosExtraMaletaBuenos.push(element.name);
  }else{
    objetosExtraMaletaMalos.push(element.name);
  }
});


document.write(`<b>los objetos que llevas en tu maleta son <b> ${objetosExtraMaleta} <br>`);
document.write(`los elementos que sirven para el clima que vas son ${objetosExtraMaletaBuenos} <br>`);
document.write(`los elementos NO que sirven para el clima que vas son ${objetosExtraMaletaMalos} <br>`);