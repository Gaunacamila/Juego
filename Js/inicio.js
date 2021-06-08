document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
},false);
//funcion que ejecuta y hace algo, esta funcion pertenece al documento

//DOM = DOCUMENT OBJET MODEL 

var inicio = {
	iniciarJuego: function() {
		console.log("Juego iniciado");
		dimensiones.iniciar();
        inicio.recargarTiles();
        buclePrincipal.iterar();
    },
    recargarTiles : function(){
        document.getElementById("juego").innerHTML = "";
        for(var y= 0 ; y < dimensiones.obtenerTilesVerticales() ; y++){
            for(var x = 0; x < dimensiones.obtenerTilesHorizontales(); x++){
                var r = new Rectangulo( x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }
    }
};

