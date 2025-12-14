var productos = [];
var nextId = 1;

function crearProducto(nombre, precio, categoria) {
  return {
    id: nextId,
    nombre: nombre,
    precio: precio,
    categoria: categoria
  };
}

function agregarProducto(producto) {
  productos.push(producto);
  nextId++;
}

function eliminarProducto(id) {
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      productos.splice(i, 1);
      return;
    }
  }
}

function obtenerFiltrados(categoria, texto) {
  var resultado = [];

  for (var i = 0; i < productos.length; i++) {
    var p = productos[i];

    var okCategoria = categoria === "Todos" || p.categoria === categoria;
    var okTexto = p.nombre.toLowerCase().includes(texto.toLowerCase());

    if (okCategoria && okTexto) {
      resultado.push(p);
    }
  }

  return resultado;
}

function ordenarPrecio(lista, modo) {
  var copia = lista.slice();

  if (modo === "Asc") {
    copia.sort(function(a, b) { return a.precio - b.precio; });
  }
  if (modo === "Desc") {
    copia.sort(function(a, b) { return b.precio - a.precio; });
  }

  return copia;
}   