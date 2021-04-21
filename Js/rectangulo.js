function Rectangulo ( x, y, ancho ,alto ){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.id = "r"+ x + y;
    this.insertarDOM();
    
}

Rectangulo.prototype.insertarDOM = function(){
    var div = '<div id="'  + this.id + '"></div>';
    console.log(div)
    let html = document.getElementById("juego").innerHTML;
    let color = '#' + Math.floor(Math.random()* 16777215 ).toString(16);
    document.getElementById("juego").innerHTML = html +div;
    document.getElementById(this.id).style.position = 'absolutr';
    document.getElementById(this.id).style.left = this.x + 'px';
    document.getElementById(this.id).style.top = this.y + 'px';
    document.getElementById(this.id).style.height = this.alto + 'px';
    document.getElementById(this.id).style.backgroundColor = color;
}

console.log(Rectangulo.insertarDOM())