var words = ["manzana", "uva", "pera", "guayaba", "melon", "sandia", "limon", "yaka", "piña", "morita", "jitomate", "platano", "toronja", "durazno", "fresa", "tuna", "granada", "lima", "cereza", "durian", "naranja"];
var canvas=document.getElementById("escenario");
var dimension=canvas.getContext("2d");
var wordRandom;
var i=0;
var x=10;
var y=300;
var p=25;
var tamaño=0;
var posicion;
var cont=0;
var boton=document.getElementById("limpiar");
boton.addEventListener("click",iniciarJuego);
var boton2=document.getElementById("rendirse");
boton2.addEventListener("click",desertar);
var letra,color;
var inic=0;
var ganaste="¡¡¡GANASTE!!!";
var colores=["pink","purple","white","blue","cyan","purple","pink","white","pink","purple","white","blue","cyan"];


function linea(z,y,w,h,color){
    dimension.fillStyle=color;
    dimension.fillRect(z,y,w,h);
}

function circulo(x,y,r,w){
    dimension.beginPath();
    dimension.arc(x,y,r,0,w*Math.PI);
    dimension.fillStyle="pink";
    dimension.fill(); 
}

function iniciarJuego(){
    cont=0;
    tamaño=0;
    clean(0,0,1000,600);
    i=aleatorio();
    wordRandom=wordRan(i);
    al=tam(wordRandom);
    lines(al);
}
function aleatorio(){
     i = Math.floor(Math.random() * 20);
    return i;
} 

function wordRan(i){
    wordRandom=words[i]; 
    return wordRandom;
}

function tam(wordRandom){
    var al =wordRandom.length;
    return al;
}

function lines(al){
    clean(0,350,1200,300);
    x=10;

    for(var i=0;i<al;i++){
    dimension.fillStyle="pink";
    dimension.fillRect(x+30,y+200,100,20);
x=x+110;
    }
}

function clean(inicioX,inicioY,anchura,altura){
    dimension.clearRect(inicioX,inicioY,anchura,altura);
}


function correcto(value){
    
    if(wordRandom==undefined){
        alert("Da click en Nuevo Juego");
    }else
   {
    var posiciones =[];
if(tamaño<wordRandom.length){
if(cont<11){
for(let j=0;j<wordRandom.length;j++){
if(wordRandom[j]===value){    
posicion=j;
posiciones.push(posicion);
escribir(value,posiciones,285);
tamaño++;
}

}
if(wordRandom.includes(value)!=true){
    switch (cont){
        case 0:  linea(900-500,y,200,20,"black");break;//base
        case 1:  linea(1000-500,y,20,-200,"black");break;//hasta
        case 2:linea(1000-500,(y-200),100,20,"black"); break;//soporte
        case 3:linea(1100-500,(y-200),10,50,"black");break;//cuerda
        case 4:circulo(1110-500,170,25,2);break;//cabeza
        case 5: linea(1100-500,(y-105),10,30,"black");break;//torso
        case 6:linea(1098-500,(y-80),4,30,"black");break;//pierna derecha
        case 7:linea(1108-500,(y-80),4,30,"black");break;//pierna izquierda
        case 8:linea(1095-500,(y-100),4,15,"black");break;//brazo derecha
        case 9:linea(1111-500,(y-100),4,15,"black");break;//brazo izquierda
        case 10:linea(1095-500,y-110,20,10,"red");break;//cuerda de ahorcado
        default:alert("Se acabaron tus oportunidades");break;

}
cont++;
}
}
else{
    alert("Se acabaron tus oportunidades, la fruta era: "+ wordRandom)
}

}}
if(tamaño==wordRandom.length){
    clean(0,0,1000,400);

    i=0;
    inic=0;
        while(i<ganaste.length){
        letra=ganaste[i];
            color=colores[i];
            escribir2(letra,3+inic,300,color);
            inic=inic+80;
            i++;
    
        }
            
        }

}


function escribir2(letter,x,y,color){
    dimension.font="bold 100px verdana";
    dimension.fillStyle=color;
    dimension.textAlign="start";
    dimension.fillText(letter,x,y);
    }

    function escribir(letter,array,y){
        dimension.font="bold 100px verdana";
        dimension.fillStyle="purple";
        dimension.textAlign="start";
        
        for(let i=0;i<array.length;i++){
        dimension.fillText(letter,(30+110*array[i]),y+200);}
        }


        function cuandoPierdes(){

        }
        function desertar(){
            cont=0;
    tamaño=0;
    clean(0,0,1000,600);
            if(wordRandom==undefined){
                alert("Da click en Nuevo Juego");
            }else
           {alert("¿Porque te rindes?, la fruta era: "+wordRandom);}
        }