function verFicha(){
console.log("ingreso")
//alert("datos ingresados") esto es una alerta para que aparezca en el html


//aqui el let es crear variables para asi llamar los id del html

let nomp,lineap,cantidad,valor,vt //Estas variables se crean en el JS, son nuevas y diferentes
nomp = document.getElementById("nombreProducto").value // value es mostrar 
lineap = document.getElementById("linea").value
cantidad = document.getElementById("cantidad").value
valor = document.getElementById("valor").value
//console.log(nomp) //aqui es para mostrar el resultado o el ingreso de la variable que queremos ver 

vt = cantidad * valor//se multiplica la cantidad de equipos por el valor que agregamos
console.log(vt)


//innerthtml es inserte agregue, inertext es solo texto
document.getElementById("total").innerHTML = " nombre producto:" + nomp + " <br><br> linea produccion:" + lineap + " <br><br> cantidad de equipos POST:" + cantidad+"<b><br><br>valor total: "+vt+ "<br></b>"
}

