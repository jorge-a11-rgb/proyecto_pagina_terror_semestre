$(function () {
  $("#form-check").click(function (event) {
    event.preventDefault();
    var Run = $("#id_rut").val();
    var Nombres = $("#id_txtNombre").val();
    var mail = $("#id_txtEmail").val();
    var pass = $("#id_txtRepetirContrasena").val();
    alert("Registro completado");
     var fila = '<t><th>'+Run+'</th><th>'+Nombres+'</th><th>'+mail+'</th><th>'+pass+'</th>';
     $('#tablaprueba>tbody').append(fila);
    var documento = $("#tablaprueba");


    });
  //   cierre del click de submint
});
//   cierre del ready
