// objeto.metodo(json)

$("#formulario1").validate({
    rules: {
        "txtNombre": {
            required: true,
            minlength: 3,
            text: true

        },
        "txtApellido": {
            required: true,
            minlength: 3,
            text: true

        },
        "txtEmail": {
            required: true,
            email: true
        },
        "txtTelefono": {
            required: true,
            max: 999999999
        },
        "txtRepetirTelefono": {
            required: true,
            equalTo: '#id_txtTelefono'
        },
        "txtContrasena":{
            required: true,
            password: true
        },
        "txtRepetirContrasena":{
           required: true,
            equalTo: '#id_txtContrasena'
        }

    }, // --> Fin de reglas
    messages: {
        "txtContrasena":{
            required: 'Ingrese su contraseña!!!'

        },
        "txtRepetirContrasena":{
            required: 'Repita su contraseña!!!',
            equalTo: 'La contraseña no es igual a la primera!!!!'

        },
        "txtDireccion":{
            required: 'Ingrese su direccion!!!'

        },
        "rut": {
            required: 'Ingrese rut!!!!',
            

        },
        "txtEmail": {
            required: 'Ingrese email!!!',
            email: 'No cumple formato'
        },
        "txtTelefono": {
            required: 'Ingrese Telefono!!!',
            min: 999999999
        },
        "txtRepetirTelefono": {
            required: 'Repita su telefono!!',
            equalTo: ' deben ser iguales!!!!'
        },
        "txtNombre": {
            required: 'Ingrese sus nombres!!!',

        },
        "txtApellido": {
            required: 'Ingrese sus apelllidos!!!',
            

        },
        "txtFechaNacimiento": {
            required: 'Debe ingresar fecha de nacimiento!!!',
            date: 'La fecha maxima permitida es 31-12-2010'
        }
    } //-->Fin de mensajes

});
