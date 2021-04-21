document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
},false);
//funcion que ejecuta y hace algo, esta funcion pertenece al documento

//DOM = DOCUMENT OBJET MODEL 

let inicio = {
    iniciarJuego: function(){
        console.log("Juego iniciado")
        dimensiones.iniciar();
        let r = new rectangulo( 10,10,100,100);
        buclePrincipal.iterar();
    }
};

inicio.iniciarJuego()