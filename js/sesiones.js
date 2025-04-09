const correo = document.getElementById("email")
    password = document.getElementById("password"),
    parrafo = document.getElementById("warning"),
    parrafo2 = document.getElementById("warning2"),
    Form = document.getElementById("container")

    async function verificarData(correo, password) {
                let contraseña = "your_password";
              let correo_electronico = "example@example.com";
               try { const response = await fetch('http://localhost:3000/verificarData', {
                 method: 'POST',
                  headers: { 'Content-Type': 'application/json'
                   },
                    body: JSON.stringify(data)
                 });
                  if (response.ok) {
                     const result = await response.json();
                      return result;
                     } else {
                         console.log('Error al verificar datos');
                          return null;
                         } } catch (error) {
                             console.error('Error al verificar datos:', error);
                              return null; 
                            } }

Form.addEventListener("submit",async e =>{
    e.preventDefault();
    let warning = ""
    let warning2 = ""
    const correoValue = correo.value;
    const passwordValue = password.value;
    const entrar= false
    const result = await verificarData(correoValue,passwordValue);
    
    if (result){
        if(!result.correoExiste && !result.contraseñaEciste){
            warning += "el correo electronico no esta registrado"
            warning += "la contraseña es incorrecta"
            document.getElementById('warning').classList.add('er_email')
            document.getElementById('warning2').classList.add('er_contra')
            entrar = true
        }else(result.correoExiste && !result.contraseñaEciste);{
            warning2 += "contraseña incorrecta"

            entrar = true
        }
    }

    if(entrar){
        parrafo.innerHTML = warning
        parrafo2.innerHTML = warning2
        warning = ""
        warning2 = ""
    }else{
        window.location.href = '/public/inicio.html';
    }
})