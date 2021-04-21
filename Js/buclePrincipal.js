//name space = Estrcutura de codigo atributos o funciones 
//main loop = bucle pricipal
//aps = actualizacion 
//fps= frame por segundo
//callback 
// 1s = 1000ms


//SE DEBE CALCULAR LA EJECUCION DEL CODIGO PARA QUE FUNCIONE EL STANDAR ES 60 VECES X SEG

/* Cuando ejecuto mi requestAnimationFrame le estoy pidiendo al navegador que se ejecute unas 60 veces por seg.
al mismo tiempo nos inyecta un reguistro temporal que es cuanto tiempo trancurre desde que se ejecuto el codigo en mini segundos 
*/

let buclePrincipal = {  
    idEjecucion: null,
    ultimoReguistro:0,
    aps:0, 
    fps:0,
    iterar:function(reguistroTemporal){
         buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
         buclePrincipal.actualizar(reguistroTemporal);
         buclePrincipal.dibujar();

         if(reguistroTemporal - buclePrincipal.ultimoReguistro > 999 ) {
             buclePrincipal.ultimoReguistro = reguistroTemporal;
             console.log("APS:"+ buclePrincipal.aps+ " | FPS"+ buclePrincipal.fps);
             buclePrincipal.aps = 0;
             buclePrincipal.fps = 0;

         }
    },
    detener: function(){

    },
    actualizar: function(reguistroTemporal){
        buclePrincipal.aps++;
        

    },
    dibujar: function(reguistroTemporal){
        buclePrincipal.fps++;

    }

 };
