function calcular(operador){
    var number_one = parseFloat( document.getElementById("number_one").value);
    var number_two = parseFloat( document.getElementById("number_two").value);
    alert(calculadora(operador,number_one,number_two));
}
function calculadora(operador,number_one,number_two){
    switch (operador) { 
        case "soma":
            return number_one + number_two; 
            break;

        case "subtracao":
            return number_one - number_two  
            break;

         case "multiplicacao":
            return number_one * number_two  
            break;    

         case "divisao":
            return number_one / number_two  
            break;    

        default:
            break;
    }


}

function quadrado(){

    var number_one = parseFloat( document.getElementById("number_one").value);
    var number_two = parseFloat( document.getElementById("number_two").value);
    if(number_one==number_two){
     alert(   calculadora("multiplicacao",number_one,number_two));
    }
    else{
        alert("para efetuar sua conta os lados do quadrado devem ser iguais")
    }
}

function losangulo(){
    var number_one = parseFloat( document.getElementById("poligonoOne").value);
    var number_two = parseFloat( document.getElementById("poligonoTwo").value);
    
    var diagonais = calculadora("multiplicacao",number_one,number_two);
    alert( calculadora('divisao',diagonais,2))
}

function trapezio(){
    var number_one = parseFloat( document.getElementById("poligonoOne").value);
    var number_two = parseFloat( document.getElementById("poligonoTwo").value);
    
    var base = calculadora("soma",number_one,number_two,"multiplicacao");
    alert( calculadora('divisao',base,2))
        
}

function triangulo(){
    var number_one = parseFloat( document.getElementById("number_one").value);
    var number_two = parseFloat( document.getElementById("number_two").value);
    
    var diagonais = calculadora("multiplicacao",number_one,number_two);
    alert( calculadora('divisao',diagonais,2));
}

function circulo(){
    var number_one = parseFloat( document.getElementById("pi").value);
    var number_two = parseFloat( document.getElementById("raio").value);
    

    
    alert( calculadora('multiplicacao',raio,2));
}

