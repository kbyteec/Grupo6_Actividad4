function mostrarAlerta(tipo, mensaje) {
  $("#alertArea").html(
    `<div class="alert alert-${tipo}">${mensaje}</div>`
  );
}

function limpiarFormulario() {
  $("#txtNombre").val("");
  $("#numPrecio").val("");
  $("#selCategoria").val("");
}

function renderTabla(lista) {
  $("#tbodyProductos").empty();

  for (var i = 0; i < lista.length; i++) {
    var p = lista[i];

    $("#tbodyProductos").append(`
      <tr>
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>${p.categoria}</td>
        <td>
          <button class="btn btn-sm btn-danger btnEliminar" data-id="${p.id}">
            Eliminar
          </button>
        </td>
      </tr>
    `);
  }
}

function mostrarEstadisticas(stats) {
  $("#statsArea").html(`
    <div class="card mt-3">
      <div class="card-body">
        <p>Total productos: ${stats.total}</p>
        <p>Precio promedio: $${stats.promedio.toFixed(2)}</p>
        <p>Más caro: ${stats.masCaro.nombre}</p>
        <p>Más barato: ${stats.masBarato.nombre}</p>
      </div>
    </div>
  `);
}
