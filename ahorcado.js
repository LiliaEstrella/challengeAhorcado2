var words = ["manzana", "uva", "pera", "guayaba", "melon", "sandia", "limón", "guanábana", "frambuesa", "morita", "jitomate", "plátano", "mandarina", "durazno", "fresa", "tuna", "granada", "lima", "cereza", "durian", "naranja"];
var canvas=document.getElementById("escenario");
var dimension=canvas.getContext("2d");
var wordRandom;
var i;
/*
console.log(dimension);
dimension.fillStyle="cyan";
dimension.fillRect(10,10,500,100);
//contorno
dimension.lineWidth=5;
dimension.strokeStyle="rgba(255,0,255,1)";
dimension.rect(10,10,500,100);
dimension.stroke();
//circulos
dimension.beginPath();
//dimension.arc(x,y,r,startAngle,endAngle)
dimension.arc(600,300,80,0,2*Math.PI);
dimension.fillStyle="pink";
dimension.fill();
//contorno
dimension.lineWidth=5;
dimension.strokeStyle="violet";
dimension.stroke();

//lineas
dimension.beginPath();
//donde va a iniciar el camino
//dimension.moveTo(x,y);
dimension.moveTo(0,0);
//hasta donde quiero que llegue la linea
dimension.lineTo(200,200);
dimension.lineTo(400,200);
dimension.lineTo(600,400);
dimension.lineTo(800,200);
dimension.lineTo(1000,200);
dimension.lineTo(1000,0);

//aplicar contorno
dimension.lineWidth=5;
dimension.stroke();
*/

var boton=document.getElementById("limpiar");
boton.addEventListener("click",iniciarJuego);

function iniciarJuego(){
    i=aleatorio();
    wordRandom=wordRan(i);
    al=tam(wordRandom);
    lines(al);
    return i;
}
function aleatorio(){
     i = Math.floor(Math.random() * 20);
    return i;
} 

function wordRan(i){
    wordRandom=words[i]; 
    console.log(wordRandom);
    return wordRandom;
}

function tam(wordRandom){
    var al =wordRandom.length;
    return al;
}

function lines(al){
    clean();
    var x=10;
    var y=300;
    for(var i=0;i<al;i++){
    dimension.fillStyle="pink";
    dimension.fillRect(x,y,100,20);
x=x+110;
    }
}

function clean(){
    dimension.clearRect(0,0,1000,400);

}

function correcto(value){
console.log(wordRandom);

for(let j=0;j<wordRandom.length;j++){
if(wordRandom[j]===value){
console.log("son iguales");
}
}
}

