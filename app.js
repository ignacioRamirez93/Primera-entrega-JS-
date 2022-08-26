


let suma;
let entrada;
let numero1;
let numero2;


numero1=prompt("ingrese el numero que quiere sumar");


do{
    

    numero2=prompt("ingrese el numero que quiere sumarle");

    suma=parseInt(numero1) + parseInt(numero2);

    alert(`el valor sumado es ${suma}`);
    
    numero1=suma;

    entrada= prompt ("ingrese + si quiere seguir sumando si quiere finalizar indique fin");

    while( entrada != "+" && entrada != "fin"){
        entrada= prompt ( "el valor ingresado es invalido ingrese + para seguir sumando o fin para finalizar")
    }


}while (entrada != "fin")

alert (`la suma total fue "${suma}`);