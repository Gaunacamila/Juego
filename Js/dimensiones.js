let dimensiones = {
//Le pido al navegador el ancho de la pag
ancho: window.innerWidth || document.documentElement.clientwidth || document.body.clientWidth,
alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

iniciar : function(){
    Window.addEventListener('resize', function(evento){
        dimensiones.ancho =  window.innerWidth || document.documentElement.clientwidth || document.body.clientWidth;

        dimensiones.alto =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        console.log('Ancho      '+ dimensiones.ancho + ' | Alto'+ dimensiones.alto);
    })
}
};

