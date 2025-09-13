function calcularInteresSimple() {
  let capital = parseFloat(document.getElementById("capital").value);
  let tasa = parseFloat(document.getElementById("tasa").value) / 100;
  let tiempo = parseFloat(document.getElementById("tiempo").value);

  let interes = capital * tasa * tiempo;
  let monto = capital + interes;

  document.getElementById("resultado").innerHTML =
    `Interés Simple: $${interes.toFixed(2)} <br> Monto Total: $${monto.toFixed(2)}`;
}

function calcularInteresCompuesto() {
  let capital = parseFloat(document.getElementById("capital").value);
  let tasa = parseFloat(document.getElementById("tasa").value) / 100;
  let tiempo = parseFloat(document.getElementById("tiempo").value);

  let monto = capital * Math.pow((1 + tasa), tiempo);
  let interes = monto - capital;

  document.getElementById("resultado").innerHTML =
    `Interés Compuesto: $${interes.toFixed(2)} <br> Monto Total: $${monto.toFixed(2)}`;
}
