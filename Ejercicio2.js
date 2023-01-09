let datos = parseInt(prompt("datos por ´´ingresar:"));
var calificaciones = new Array(datos);

for(var i = 0; i < calificaciones.length; i++){
        let calificacion = parseFloat(prompt("Calificaión:"));
        calificaciones[i] = calificacion;       
        console.log("dato"+i+":",calificaciones[i]);
}
var promedio = 0;

for(i = 0; i <= calificaciones.length; i++){
    if(calificaciones[i] >= 6){
        promedio++;
    }
}
console.log(promedio,"estos datos son mayor al prmedio")