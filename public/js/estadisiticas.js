function calcularEstadisticas() {
  if (productos.length === 0) {
    return null;
  }

  var suma = 0;
  var caro = productos[0];
  var barato = productos[0];

  for (var i = 0; i < productos.length; i++) {
    var p = productos[i];
    suma += p.precio;

    if (p.precio > caro.precio) caro = p;
    if (p.precio < barato.precio) barato = p;
  }

  return {
    total: productos.length,
    promedio: suma / productos.length,
    masCaro: caro,
    masBarato: barato
  };
}
