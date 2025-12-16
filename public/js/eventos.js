// Correccion de commit  Maria Jose


function actualizarTabla() {
  var cat = $("#selFiltroCategoria").val();
  var txt = $("#txtBuscar").val();
  var ord = $("#selOrdenPrecio").val();

  var lista = obtenerFiltrados(cat, txt);
  lista = ordenarPrecio(lista, ord);

  renderTabla(lista);
}

$(document).ready(function () {

  $("#formProducto").submit(function (e) {
    e.preventDefault();

    var nombre = $("#txtNombre").val();
    var precio = $("#numPrecio").val();
    var categoria = $("#selCategoria").val();

    if (nombre === "" || precio === "" || categoria === "") {
      mostrarAlerta("warning", "Complete todos los campos");
      return;
    }

    var producto = crearProducto(nombre, parseFloat(precio), categoria);
    agregarProducto(producto);

    mostrarAlerta("success", "Producto agregado");
    limpiarFormulario();
    actualizarTabla();
  });

  $("#selFiltroCategoria, #selOrdenPrecio").change(actualizarTabla);
  $("#txtBuscar").keyup(actualizarTabla);

  $("#tbodyProductos").on("click", ".btnEliminar", function () {
    eliminarProducto(parseInt($(this).data("id")));
    actualizarTabla();
  });

  $("#btnStats").click(function () {
    var stats = calcularEstadisticas();
    if (stats) mostrarEstadisticas(stats);
  });
});
