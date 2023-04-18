function verFicha(){
    console.log("ingreso")


    let  cantidad0,cantidad1,cantidad2,cantidad3,cantidad4,cantidad5,cantidad6,cantidad7,cantidad8,cantidad9,valor0,valor1,valor2,valor3,valor4,valor5,valor6,valor7,valor8,valor9,vt1,vt2,vt3,vt4,vt5,vt6,vt7,vt8,vt9,vt10

    cantidad0 = document.getElementById("cantidad_0").value
    cantidad1 = document.getElementById("cantidad_1").value
    cantidad2 = document.getElementById("cantidad_2").value
    cantidad3 = document.getElementById("cantidad_3").value
    cantidad4 = document.getElementById("cantidad_4").value

    cantidad5 = document.getElementById("cantidad_5").value
    cantidad6 = document.getElementById("cantidad_6").value
    cantidad7 = document.getElementById("cantidad_7").value
    cantidad8 = document.getElementById("cantidad_8").value
    cantidad9 = document.getElementById("cantidad_9").value



    valor0 = document.getElementById("valor_0").value
    valor1 = document.getElementById("valor_1").value
    valor2 = document.getElementById("valor_2").value
    valor3 = document.getElementById("valor_3").value
    valor4 = document.getElementById("valor_4").value
    valor5 = document.getElementById("valor_5").value
    valor6 = document.getElementById("valor_6").value
    valor7 = document.getElementById("valor_7").value
    valor8 = document.getElementById("valor_8").value
    valor9 = document.getElementById("valor_9").value

    vt1 = cantidad0 * valor0
    vt2 = cantidad1 * valor1
    vt3 = cantidad2 * valor2
    vt4 = cantidad3 * valor3
    vt5 = cantidad4 * valor4
    vt6 = cantidad5 * valor5
    vt7 = cantidad6 * valor6
    vt8 = cantidad7 * valor7
    vt9 = cantidad8 * valor8
    vt10 = cantidad9 * valor9

    console.log(vt1,vt2,vt3,vt4,vt5,vt6,vt7,vt8,vt9,vt10)

    document.getElementById("total_hardware").innerHTML = "<b><br><br>valor total Computadoras para el punto de venta y para el servidor:$"+vt1+ "<br></b><b><br>valor total Dispositivos moviles para acceso remoto:$"+vt2+"<br></b><b><br>valor total Impresora de codigos de barras:$"+vt3+"<br></b><b><br>valor total Lectores de código de barras:$"+vt4+"<br></b><b><br>valor total Cajas registradoras:$"+vt5+"<br></b>"

    document.getElementById("total_software").innerHTML = "<b><br><br>valor total Sistemas operativos:$"+vt6+ "<br></b><b><br>valor total Software de gestión de bases de datos:$"+vt7+"<br></b><b><br>valor total servidores:$"+vt8+"<br></b><b><br>valor total Herramientas de desarrollo de softwares:$"+vt9+"<br></b><b><br>valor total Software de seguridad:$"+vt10+"<br></b>"



}