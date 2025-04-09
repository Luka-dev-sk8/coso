function btn(){
    document.getElementById('content').classList.toggle('si_click');
}
function coso(){
    var num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    if(num===1){
        swal('Tomate Un Descanso', 'Tomate un descanso como de 5-15 minutos.');
    }else{
        if(num===2){
            swal('Recuerde Que En La Vida Todo Se Puede.','');
        }else{       
            if(num===3){
                swal('Tomate El Tiempo Para Reflexionar.','');
            
            }
            if(num===4){
                swal('perdiste en el momento que te rendiste.','');
            
            }if(num===5){
                swal('El exito es la suma de pequeños esfuerzos que se repiten.','');
            
            }else{
                swal('Tu Puedes Yo Confio En Ti.','');
                
            }
        }
    }
}

// Como funcion coso? encima si parametros y el SOLID hermano?