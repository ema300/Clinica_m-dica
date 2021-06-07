////////////////////////////////JSON///////////////////////////////////


var usuarios = [
  {
    "usuario" : 'adm',
    "contraseña": 'adm',
    "rol": 'administrativo'
  },
 
  {
    "usuario" : 'pac',
    "contraseña": 'pac',
    "rol": 'paciente'
  },
];

////////////////////////////FUNCIONES /////////////////////////////////////

function ingreso() {  // dependiendo si es administrativo o paciente iniciara sesion diferente
  var u= document.getElementById('u').value;
  var p=document.getElementById('p').value;


      for (let index = 0; index < usuarios.length; index++) {
           var UsuarioRegistrado = usuarios[index];
        if(UsuarioRegistrado.usuario==u && UsuarioRegistrado.contraseña===p && UsuarioRegistrado.rol=='administrativo' ){
            window.location.href="perfilAdm.html";
 
        } 
        if(UsuarioRegistrado.usuario==u && UsuarioRegistrado.contraseña===p && UsuarioRegistrado.rol=='paciente'){
          window.location.href="perfilPaciente.html";
       } 
  
      }

}

