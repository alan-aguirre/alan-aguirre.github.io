function calc(){
    var imc;
    var result= document.getElementById("resultado");
    
    var weight = parseInt(document.getElementById("peso").value);
    document.getElementById("peso-val").textContent = weight + " kg";
    
    var height = parseInt(document.getElementById("estatura").value);
    document.getElementById("est-val").textContent = height + " cm";
    
    imc = (weight/((height/100)*(height/100))).toFixed(1);
    
    result.textContent= imc;
    
    if(imc < 18.5){
        category = "Bajo de peso";
        result.style.color = "#83B3D9";
    }
    else if( imc >= 18.5 && imc <= 24.9 ){
        category = "Peso saludable";
        result.style.color = "#0be881";
    }
    else if( imc >= 25 && imc <= 29.9 ){
        category = "Sobrepeso";
        result.style.color = "#ffc44d";
    }
    else if( imc >= 30 && imc <= 34.9 ){
        category = "Obesidad grado 1";
        result.style.color = "#ff884d";
    }
    else if( imc >= 35 && imc <= 39.9 ){
        category = "Obesidad grado 2";
        result.style.color = "#ff884d";
    }
    else{
        category = "Obesidad morbida";
        result.style.color = "#ff5e57";
    }
    document.getElementById("Cat").textContent = category;
}