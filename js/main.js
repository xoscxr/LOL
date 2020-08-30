function Capturar(){

    function Dato(ide,nombre,autor,apellido,categoria,precio,){
    this.ide = ide;
    this.nombre = nombre;
    this.autor = autor;
    this.apellido = apellido;
    this.categoria = categoria;
    this.precio = precio;
    

    }


let ideCapturar = document.getElementById("ide").value
let nombreCapturar = document.getElementById("nombre").value
let autorCapturar = document.getElementById("autor").value
let apellidoCapturar = document.getElementById("apellido").value
let categoriaCapturar = document.getElementById("categoria").value
let precioCapturar = document.getElementById("precio").value



Nuevo = new Dato(ideCapturar,nombreCapturar,autorCapturar,apellidoCapturar,categoriaCapturar,precioCapturar);
console.log(Nuevo)
agregar();

}

var resultado= [];

function agregar(){
resultado.push(Nuevo);
console.log(resultado);
document.getElementById("tabla").innerHTML += '<tbody><td>'+Nuevo.ide+'</td><td>'+Nuevo.nombre+'</td><td>'+Nuevo.autor+'</td><td>'+Nuevo.apellido+'</td><td>'+Nuevo.categoria+'</td><td>'+Nuevo.precio+'</tbody>';

}
