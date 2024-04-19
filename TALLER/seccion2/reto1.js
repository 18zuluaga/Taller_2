let energia = confirm('tienes energia suficiente?');
let trabajo = confirm('tienes trabajo?');
let clima = confirm('el clima esta bien?');

if (energia && trabajo && clima) {
  alert('sal a fuera a trabajar');
} else if (!energia) {
  alert('tomate el dia libre');
} else if (!trabajo && clima && energia) {
  alert('sal a correr');
} else if (energia && trabajo && !clima) {
  alert('quedate en la casa trabajando');
}
