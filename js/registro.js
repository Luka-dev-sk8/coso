const nombre = document.getElementById("nombre")
const correo = document.getElementById("email")
const password = document.getElementById("password")
const Form = document.getElementById("container2")
const parrafo = document.getElementById("warning")
const parrafo2 = document.getElementById("warning2")
const parrafo3 = document.getElementById("warning3")

async function enviarDatos() { const nombreValue = nombre.value;
     const correoValue = correo.value;
      const passwordValue = password.value;
       const data = { nombre: nombreValue, correo_electronico: correoValue, contraseña: passwordValue };
        try {
             const response = await fetch('http://localhost:3000/insertData',
                 { method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data) });
                   if (response.ok) {
                     console.log('Datos insertados con éxito');
                      return true; } else { console.log('Error al insertar datos');
                         return false;
                         } } catch (error) { console.error('Error al enviar datos:', error);
                             return false;
                             } }


Form.addEventListener("submit",async e => {
    console.log("mensaje enviado")
    e.preventDefault();
    let warning = ""
    let warning2 = ""
    let warning3 = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){
        warning += 'el nombre no es valido <br>'
        entrar = true
        document.getElementById('warning').classList.add('er_usu')
    }
    if(!regexEmail.test(correo.value)){
        warning2 += "email no es valido <br>"
        entrar = true
        document.getElementById('warning2').classList.add('er_email')
    }

    if (password.value.length < 8){
        warning3 += "contraseña no es valido <br>"
        entrar = true
        document.getElementById('warning3').classList.add('er_contra')

    }

    if (entrar) {
          parrafo.innerHTML = warning
          parrafo2.innerHTML = warning2
          parrafo3.innerHTML = warning3
          warning = ""
          warning2 = ""
          warning3 = ""
         } else { 
             const enviarDatosResult = await enviarDatos();
              if (enviarDatosResult) {
                  window.location.href = '/public/inicio.html';
                 } else {
                     console.log('Error al insertar datos.');
                     } }
                    });

