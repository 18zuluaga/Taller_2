let presupuestoDiario = Number(prompt('ingres su presupuesto diario'));
let gastoComer = Number(prompt('ingrese cuanto te gastas en comida diario'));
let gastoLibros = Number(prompt('ingrese cuanto gasta en libros diario'));
let ahoro = Number(prompt('ingrese cuanto deseas ahorrar diario'));

let gastosTotales = gastoComer + gastoLibros;

if (presupuestoDiario >= gastosTotales + ahoro) {
  alert('puedes permitirte ambos gastos y alcanzar tu objetivo de ahoro');
} else if (
  presupuestoDiario >= gastoComer + ahoro ||
  presupuestoDiario >= gastoLibros + ahoro
) {
  alert(
    'solo te puedes permitir el gasto de comer por fuera o de comprar un libro  y alcanzar tu objetivo de ahoro'
  );
}

let op = prompt(
  'que gasto quieres tomar 1=ninguno  2=ambos gastos 3=solo gasto de comer 4=solo gasto de libro'
);

if (op == 1) {
  alert(
    `tus ahoros son de ${presupuestoDiario} ya que decisiste no gastar dinero`
  );
} else if (op == 2) {
  alert(
    `tu ahoros son de ${
      gastosTotales - presupuestoDiario
    } ya que decidiste gastar en ambos cosas`
  );
} else if (op == 3) {
  alert(
    `tus ahoros son de ${
      presupuestoDiario - gastoComer
    } ya que decidiste solo gastar en comida`
  );
} else if (op == 4) {
  alert(
    `tus ahoros son de ${
      presupuestoDiario - gastoLibros
    } ya que decidiste solo gastar en libros`
  );
}
