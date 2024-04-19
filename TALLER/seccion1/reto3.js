let costoInicial = Number(prompt("Cual es tu valor presupuesto incial"));
let costoEstimado = Number(prompt("cual es el costo estimaod de tu viaje"));
let umbral = Number(prompt("Cual es dinero minimo para emergencia"));
let disponible = costoInicial - costoEstimado;
let articulosExtraName = [];
let articulosExtraCosto = [];

while (disponible > umbral) {
    let op = prompt("deseas agregar un articulo extra si=1 no=2");
    if (op == 2) {
        break;
    } else if (op == 1) {
        let nameExtra = prompt("cual es el nombre del articula extra");
        let costoExtra = Number(
            prompt("cual es el costo de este articulo extra")
        );
        articulosExtraName.push(nameExtra);
        articulosExtraCosto.push(costoExtra);
    }
}

if (disponible > umbral) {
    alert("puedes comprar un articulo extra");
    let minArticulo = Math.min(...articulosExtraCosto);
    let nameArticulo = articulosExtraCosto.indexOf(minArticulo);
    alert(
        `el articulo con el prcio mas bajo es ${articulosExtraName[nameArticulo]}`
    );
}
