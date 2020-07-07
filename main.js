window.onload=function(){
    var board = document.querySelector('.board');
    board.addEventListener("click", clickDentro);
    
    
}
    
var contador = 1;
var contadorJ1 = 0;
var contadorJ2 = 0;
var win="no";
arrayJ1 = [];
arrayJ2 = [];
ganar1 = [1,2,3];
ganar2 = [4,5,6];
ganar3 = [7,8,9];
ganar4 = [1,4,7];
ganar5 = [2,5,8];
ganar6 = [3,6,9];
ganar7 = [1,5,9];
ganar8 = [3,5,7];
function clickDentro (event){
    var cara = event.target;
    if(cara.value != null){
        console.log(contador);
        if (contador%2==0){
            document.getElementById(cara.id).style.backgroundColor = "blue";
            document.getElementById(cara.id).style.color = "white";
            contador = contador+1;
            cambiarCara2(cara.id);
            arrayJ2.push(cara.value);
            
            for(var i =0; i < ganar1.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ2[j] + " = " + ganar1[i])    
                     if(arrayJ2[j] == ganar1[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ2);
                         if(contadorJ2==3){
                             alert("Jugador 2 gano"); 
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;
            for(var i =0; i < ganar2.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ2[j] + " = " + ganar1[i])    
                     if(arrayJ2[j] == ganar2[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ2);
                         if(contadorJ2==3){
                             alert("Jugador 2 gano");
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;
            for(var i =0; i < ganar3.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ2[j] + " = " + ganar3[i])    
                     if(arrayJ2[j] == ganar3[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ2);
                         if(contadorJ2==3){
                             alert("Jugador 2 gano");
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;
            for(var i =0; i < ganar4.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ2[j] + " = " + ganar4[i])    
                     if(arrayJ2[j] == ganar4[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ2);
                         if(contadorJ2==3){
                             alert("Jugador 2 gano");
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;
            for(var i =0; i < ganar5.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ2[j] + " = " + ganar1[i])    
                     if(arrayJ2[j] == ganar5[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ2);
                         if(contadorJ2==3){
                             alert("Jugador 2 gano");
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;
            for(var i =0; i < ganar6.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ2[j] + " = " + ganar1[i])    
                     if(arrayJ2[j] == ganar6[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ2);
                         if(contadorJ1==3){
                             alert("Jugador 2 gano");
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;
            for(var i =0; i < ganar7.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ2[j] == ganar7[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ2==3){
                             alert("Jugador 2 gano");
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;
            for(var i =0; i < ganar8.length;i++){
                for(var j =0; j < arrayJ2.length;j++){
                    console.log("son iguales? "+ arrayJ2[j] + " = " + ganar1[i])    
                     if(arrayJ2[j] == ganar8[i]){
                         contadorJ2=contadorJ2+1;
                         console.log("numero de letras acertadas" + contadorJ2);
                         if(contadorJ2==3){
                             alert("Jugador 2 gano");
                             location.reload();
                         }
                     }
                }
            }
            contadorJ2=0;

            console.log(arrayJ1);
        }else{
            contador = contador+1;
            cambiarCara1(cara.id);
            arrayJ1.push(cara.value);
            document.getElementById(cara.id).style.backgroundColor = "red";
            document.getElementById(cara.id).style.color = "white";
            for(var i =0; i < ganar1.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar1[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            for(var i =0; i < ganar2.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar2[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            for(var i =0; i < ganar3.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar3[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            for(var i =0; i < ganar4.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar4[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            for(var i =0; i < ganar5.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar5[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            for(var i =0; i < ganar6.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar6[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            for(var i =0; i < ganar7.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar7[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            for(var i =0; i < ganar8.length;i++){
                for(var j =0; j < arrayJ1.length;j++){
                    console.log("son iguales? "+ arrayJ1[j] + " = " + ganar1[i])    
                     if(arrayJ1[j] == ganar8[i]){
                         contadorJ1=contadorJ1+1;
                         console.log("numero de letras acertadas" + contadorJ1);
                         if(contadorJ1==3){
                             alert("Jugador 1 gano");
                             win="si";
                             window.location.reload(); 
                         }
                     }
                }
            }
            contadorJ1=0;
            if(arrayJ1.length==5){
                if(win=="no"){
                    alert("Juego quedo en tablas");
                    location.reload();
                }
            }
        }
       
    }
    return cara.value;
}

function cambiarCara1(caravieja){
    var caravieja = document.getElementById(caravieja);
    caravieja.innerText = "X";
    
};
function cambiarCara2(caravieja){
    var caravieja = document.getElementById(caravieja);
    caravieja.innerText = "O";
    
};

function comenzar(){
    location.reload();
}
