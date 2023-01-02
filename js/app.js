alert("Bienvenidos")

alert("Este simulador mostrará los precios de 5 productos, de los cuales podrá elegir cuantos quiera. Cuando decida dejar de elegir se calculará el costo total de los productos seleccionados, mostrándolo por consola junto con los diversos productos seleccionados.")
function pregunta (){
    let unidades;
    unidades = prompt("¿Cuántas unidades desea llevar?")
    return unidades
}

let procesador=0;
procesador=parseInt(procesador)
let memoria=0;
memoria=parseInt(memoria)
let monitor=0;
monitor=parseInt(monitor)
let teclado=0;
teclado=parseInt(teclado)
let fuente=0;
fuente=parseInt(fuente)
let total=0;

let centinela = 1;
while (centinela==1) {
    let opcion;
    let unidades =0;
    
    opcion=prompt('Elija un numero: \n 1- Procesador AMD 3200g    $30000 \n 2- Memoria Ram 2x8   $15000 \n 3-Monitor Samsung 24"  $40000 \n 4- Teclado T-Dagger Bora   $9000 \n 5 Fuente 500w 80 plus bronce   $5000 \n 6- Terminar')
    opcion=parseInt(opcion)
    switch(opcion){
        case 1:
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+= 30000*unidades
            procesador=unidades+procesador
            console.log("Se suman",unidades," procesadores, el subtotal es: ",total)
            break
        case 2:
            unidades =pregunta()
            unidades=parseInt(unidades)
            total+= 15000*unidades
            memoria+=unidades
            console.log("Se suman",unidades," memorias, el subtotal es: ",total)
            break
        case 3:
            unidades = pregunta()
            unidades=parseInt(unidades)
            total += 40000*unidades
            monitor+=unidades
            console.log("Se suman",unidades," monitores, el subtotal es: ",total)
            break
        case 4:
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+=9000*unidades
            teclado+=unidades
            console.log("Se suman",unidades," teclados, el subtotal es: ",total)
            break
        case 5:
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+=5000*unidades
            fuente+=unidades
            console.log("Se suman",unidades," fuentes, el subtotal es: ",total)
            break
    }
    centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
}
total=parseInt(total)
alert("Usted ha seleccionado "+ procesador+ " procesadores, "+ memoria+ " memorias, "+monitor+ " monitores, "+ teclado+ " teclados y "+fuente+" fuentes. \nEn total suman $"+total)
