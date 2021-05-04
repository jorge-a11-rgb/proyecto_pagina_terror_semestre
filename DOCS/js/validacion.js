$(document).ready(function () {
    $("#formulario1").validate({
        rules: {
            txtNombre: {
                required: true,
                minlength: 3

            },
            rut:{
                required:true,
                checkRut();
            },
            txtApellido: {
                required: true,
                minlength: 3

            },
            txtEmail: {
                required: true,
                email: true
            },
            txtTelefono: {
                required: true
            },
            txtRepetirTelefono: {
                required: true,
                equalTo: '#id_txtTelefono'
            },
            txtFechaNacimiento:{
                required: true,
                date: true
            },
            txtContrasena: {
                required: true,
                minlength: 7
            },
            txtRepetirContrasena: {
                required: true,
                equalTo: '#id_txtContrasena'
            },
            categorias:{
                required: true
            },

            sexo:{
                required: true
            }


        }

    });

});