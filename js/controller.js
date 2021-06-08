///////////////////////////////////////////////////////////////////


var usuarios = [
    {
        "usuario": 'Administrativo300',
        "contraseña": 'Administrativo300',
        "rol": 'administrativo'
    },

    {
        "usuario": 'Paciente300',
        "contraseña": 'Paciente300',
        "rol": 'paciente'
    },
];

localStorage.setItem("intentos", 0);
var intent_act = localStorage.getItem("intentos");
localStorage.setItem("usuario", "");
var usuario_act = localStorage.getItem("usuario");
////////////////////////////INICIO SESION /////////////////////////////////////

function ingreso() {  // dependiendo si es administrativo o paciente iniciara sesion diferente
    var u = $('#u').val();
    var p = $('#p').val();
    var encontrado = false;
    var usuarioEncontrado="";

    for (let i = 0; i < usuarios.length; i++) {
        var UsuarioRegistrado = usuarios[i];
  

        ////////////////////
        if (UsuarioRegistrado.usuario == u && UsuarioRegistrado.rol == 'administrativo') {
            if (UsuarioRegistrado.contraseña === p) {
                window.location.href = "perfilAdm.html";
                encontrado = true;
                
            }
            else {
                usuarioEncontrado=UsuarioRegistrado.usuario;
                encontrado = false;
                
            }
        }
        if (UsuarioRegistrado.usuario == u && UsuarioRegistrado.rol == 'paciente') {
           
           if (UsuarioRegistrado.contraseña === p ) {
            window.location.href = "perfilPaciente.html";
            encontrado = true; 
           } else {
            usuarioEncontrado=UsuarioRegistrado.usuario;
            encontrado = false; 
           } 
        }

    }
    


if (encontrado) {
}

else {



    if (intent_act < 5) {
        localStorage.setItem("intentos", intent_act++);
        localStorage.setItem("usuario",usuarioEncontrado );
        alert("contraseña invalida")
    }
    if (intent_act === 5) {
        alert("usuario bloqueado")
    }
}


}

////////////////////////////FUNCIONES /////////////////////////////////////
function enviarReclamo() {  // dependiendo si es administrativo o paciente iniciara sesion diferente
    var campo = $('#mensaje').val();


    if (campo === '') {
        alert("El campo esta vacío");
        return false;
    } else {
        alert("Mensaje enviado");
    }
}

//////////////////////////////////////////////////////////////////7


function validar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    if (nombre == "" || apellido == "" || usuario == "" || contraseña == "") {
        alert("Aun faltan completar campos"); 
    } else {
    alert("Registro exitoso");
    }
  }