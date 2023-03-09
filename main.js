//1. Variables  ***** no comenzar con numeros
console.log("holi javascript");
//1.1. Definicion de variables sin usar var, let, const
let variable = 10;
console.log(variable)
variable =20;




//1.2. Estilo de nombres de variables Js :using camel case 

//1.3. Definicion de Variables using VAR /* 
/* podemos reasignar variables usando VAR podemos crear variable sin asignar valor con VAR */
/* ------------------------------------------------------------------------------------------------ */
var num1;
num1 = 25;
console.log(num1);
//2. Definicion de variables usando LET
/* ------------------------------------------------------------------------------------------------ */
/* podemos reasignar variables usando let 
   podemos crear variable sin asignar valor con let
*/
let num2;
num2 = 50000;
console.log(num2);
//3. Data Types
/* typeof() */
//3.1 Number
let numeros = 20;
console.log(numeros);
console.log(typeof(numeros));
let numeros1 = new Number(23) 
console.log(numeros1);
//3.2 String Definition
//3.2.1 String - Definicion simple
let cadena = "Hola soy yo de nuevo";
console.log(cadena);

//3.2.2 String - Definicion using String(' ')
let cadena2 = 'Hola soy yo de nuevo';
console.log(cadena2);
//3.2.3 String - definition using new String(' ')
let cadena3 = new String("Hola soy un poo");
console.log(cadena3[2]);
//3.3  Some string methods
//3.3.0 length
let cadena4 = "hola soy yo otra"
console.log(cadena4.length);
//3.3.1 indexOf()
console.log(cadena4.indexOf("y"))
//3.3.2 includes()
console.log(cadena4.includes("h"))
//3.3.3 Concatenar Cadenas (Strings)
//3.3.3.1  concatenar string - using concat()
let cadena5 = "Hola soy ";
let nombre = "Juan";
console.log(cadena5.concat(nombre));
//3.3.3.2 concatenar string - using + 
console.log(cadena5+nombre+"xd");
//3.3.3.3 concatenar string using back ticks  o templatre strings ``
console.log(`buen dia ${cadena5} ${nombre}`);
//3.3.4 quitando espacios en blanco en String- trimStart().trimEnd()
let cadena6 = "    Hola soy yo otra vez"
let cadena7 = "Hola es usted otra vez            "
console.log(cadena6);
console.log(cadena7);
console.log(
  cadena6.trimStart(),
  cadena7.trimStart()
);
//3.3.5 replacing - reemplazando en String*/
console.log(cadena7.replace(("otra vez"),("de nuevo")))
//3.3.6 slice  -  cortando de un String
console.log(cadena7.slice(0,4));
//3.3.7  substring  - subcadena de un String
console.log(cadena7.substring0,(4));
//3.3.8 repeat() repitiendo un String 
console.log(cadena7.repeat("3"))
//3.3.9 split - Dividir un String 
console.log(cadena7.split(" ",2))
//3.3.10 Mayusculas y minusculas - ToUpperCase - ToLowerCase 
console.log(cadena7.toUpperCase(),cadena7.toLowerCase());
/* const password1 = "Admin"
const password2 = "admin"
console.log(password1 === password2);  */
const password1 = "Admin";
const password2 = "admin";
console.log(password1==password2);


                    /* ----------------------EJERCICIOS--------------------------- */
//3.4 Boolean 
const valor = false;
console.log(valor);
console.log(typeof(valor));
/* Definicion de Variables using CONST*/
/* ------------------------------------------------------------------------------------------------ 

*/
/* ------> no podemos reasignar valores   YY   las constantes deben tener un valor
*/
const name3="Juan";
console.log(name3);
console.log(typeof(name3));

//name3 = "David";
//console.log(name3);

/* const can't re-asing */
/* nombre = 30; */
/* console.log(nombre); */
//3.5 undefined 
let noDefinido ;
console.log(noDefinido);

//3.6 BigInt 
let numberBig=65485645645687854659849484;
console.log(typeof(numberBig));
console.log(numberBig);

//3.7 objeto 

const objetoCampus = {
  nombre: "Juan",
  edad : 23,
  pais : "Colombia",
  isWinner : true
}

console.log(objetoCampus);

//4.  Operadores
/* -------------------------------------------------------------------------------------- */
//4.1 Operadores numericos
let a = 3;
let b = 2;
let z;

z = a + b ;

console.log(`El resultado es: ${z}`);

z= a-b;
console.log(`El resultado de la resta es: ${z}`);

z = a*b;

console.log(`El resultado de la multiplicacion es: ${z}`);

z = a/b;
console.log(`El resultado de la division es: ${z}`);

z=a%b
console.log(`El resultado del modulo es: ${z}`);

z=a**b;
console.log(`El resultado de la potenciacion es ${z}`);
//OPERADORES DE ASIGNACION
//Incremento
let a2 = 3;
let b2 = 2;
let c1=3;
let c2=3;
let z3 = a2+b2;
let z4;
//Pre-incremento (el operador ++ antes de la variable)

z3 =++a2;

console.log(z3);

//Post-incremento (el operador ++ despues de la variable)

z3=b2++;
console.log(b2);
console.log(z3);
//Decremento
//Predecremento (el operador -- antes de la variable)
z4 = --c1;
console.log(z4);
console.log(c1);
//Postdecremento  (el operador -- antes de la variable)
z4 =c2--;
console.log(z4);
console.log(c2);
//Precedencia
/* -------------------------------------------------------------------------------------------- */
let a3 = 3;
let b3 = 2;
let c3 = 4;
let d3 = 1;

let z5 = a3*b3 +c3 /d3;
console.log(z5);

z5 = c3+a3*b3/d3;
console.log(z5);

z5 = (c3+a3)*b3/c3;
console.log(z5);

//4.2 operadores de asignacion  =   +=   -=
/* ----------------------------------------------------------------------------------- */
let a4= 1;

//a4 +=3; //a4 + 3
//console.log(a4);
//a4 -=3;// a4 -3
//console.log(a4);

/*
*=
/=
%=
**=
*/

//a4 *=3;
//console.log(a4);

//a4 /=2;
//console.log(a4);

//a4%=2;
//console.log(a4);

a4**=2;
console.log(a4);


//4.3 Operadores de comparacion 
//4.3.1 - Igual A
// == se revisa el valor sin importar el tipo
// === revisa los valores pero tambien los tipos
/* ----------------------------------------------------------------------------------------- */
let a5 = 3;
let b5 = 2;
let c5= "3";

let z6= a5 == c5;
console.log(z6);

z6= a5 === c5;
console.log(z6); 

/* Operadores de comparacion - 
//4.3.2 Diferente A
/* != se revisa el valor sin importar el tipo 
/* !== revisa los valores pero tambien los tipos
/* ------------------------------------------------------------------------------------------- */
let a6 = 3;
let b6 = 2;
let c6 =new String(3);

let z7 = a6!=c6;
console.log(z7);

 z7 = a6 !==c6;
 console.log(z7);

 console.log(typeof(c6));

//4.4 Ejercicio operadores 
// operadores de comparacion 
let i = 100;
let j =new String(100);

let z8 = i==j;
console.log(z8);
z8 = i === j;
console.log(z8);

z8 = i != j;
console.log(z8);

z8 = i !==j;
console.log(z8);



//4.5 Conviertiendo tipos de datos  parseInt()
console.log(parseInt(j));
a=parseInt(j);
console.log(typeof(a));
console.log(a);
console.log(i === parseInt(j));
//4.6 comparando null con undefined 
let marca = null;
console.log(marca);
let marcas;
console.log(marca == marcas);
console.log(marca === marcas);


/* 5. SENTENCIAS DE CONTROL */
/* ------------------------------------------------------------------------------------ */


let condicion = true;
if (condicion === true){
    console.log("Verdadero");
    console.log("Se acabo");
}
else{
  console.log("Falso");
}
/* 5.1 IF - EJERCICIO - si numero igual a 2 imprimir "numero dos" etc. */
let numero = 11;

if (numero == 1){
  console.log("Numero Uno");
}
else if (numero ===2 ){
  console.log("Numero dos");
}
else if (numero ===3 ){
  console.log("Numero tres");
}
else if (numero ===4 ){
  console.log("Numero cuatro");
}
else if (numero ===5 ){
  console.log("Numero cinco");
}
else if (numero ===6 ){
  console.log("Numero seis");
}
else if (numero ===7 ){
  console.log("Numero siete");
}
else if (numero ===8 ){
  console.log("Numero ocho");
}
else if (numero ===9 ){
  console.log("Numero nueve");
}
else {
  console.log("Ingrese un numero de 1 a 9");
}

// 5.2 CASE 
// let numbercase = 2;
// let numberText = "valor desconocido";

// switch (numbercase) {
//   case 1:
//     numberText="Numero 1"
//     break;
//   case 2:
//     numberText="Numero 2"
//     break;
//   case 3:
//     numberText="Numero 3"
//     break
//   case 4 :
//     numberText="NUmero 4"  
    
//     break;

//   default:
//     numberText="ingrese un valor de 1 a 4"
//     break;
    
// }
// console.log(numberText);
// // 5.3 CICLOS 
// //5.3.1 WHILE 
// let contador = 0;

// while (contador<3){
//   console.log(contador);
//   contador++;
// }
// console.log("Fin del while");
// //5.3.2 DO WHILE
// let contador1=4;
// do{
//   console.log(contador1);
//   contador1++;
//   console.log(contador1);
// } while (contador1 <3);
// console.log("Fin de do while");
// //5.3.3 FOR
// for(let contador3= 1;contador3<3;contador3++){
//   console.log(contador);
// }
// console.log("Fin del for");
// //5.3.4 BREAK

// alert("hola")
// numberStudents=prompt("Digite un numero: ")
// alert(numberStudents)
  /* ----------------------EJERCICIOS--------------------------- */


/* --------6 OBJETOS--------- */
/* --------------------------------------------------------------------------------------- */

/*Objetos en JS*/

/*Variables*/
// const mascota = "luna";
const cliente = "Jairo";
// const factura = 5000;
const servicio = "peluqueria"
/*6.1. Objetos literales*/
const veterinaria ={
  mascota : "luna",
  cliente : "Jairo",
  factura : 5000,
  servicio : "Peluqeria"
};

const customer = {
  name : "Juan",
  addres : "Calle 20 # 8",
  sale : {
    year : 2020,
    salesman : "Pedro",
    month : "January"
  },
  age : 20,
  phoneNumber : 31438254,
  socailSecurity: {
    id:123456789,
    health: "colsalnitas",
    company : "Sura"
  }
}
/*6.2. Acceso a valores del objeto*/

/*6.2.1 sintaxis de punto*/

console.log(customer.socailSecurity.company);
console.log(customer.sale.month);
/*6.2.2 agregar propiedades del objeto*/
veterinaria.foto="lunajpg";
console.log(veterinaria);

/*6.2.3 eliminar propiedades del objeto*/
delete veterinaria.foto;
console.log(veterinaria);
/*6.3. Asignar valores de propiedad de objeto a variable - Object Destructuring*/
const {factura} = veterinaria
console.log(factura);
let {mascota} = veterinaria
console.log(mascota);
mascota = 24;
console.log(mascota);
/*6.4. Objetos dentro de objetos*/
const centroComercial={
  piso1:{
    entradas: 3,
    seguridad: true,
    cantidadBaños:2,
      baños:{
        hombres: true,
        mujeres: true,
        discapacitados: true,
        mascotas: false,
      },
      cantidadLocales: 34,
        localesDeZatos:{
          local1:"Adidas",
          local2:"Nike",
          local3:"peopleplays",
          local4:"Deportivo Carvajal"
        },
        localesDeRopa:{
          local1:"Aeropostale",
          local2:"koaj",
          local3:"Arturo calle",
          local4:"Travel"
        },
        plazaDeComidas:false  
  },
  piso2:{
    entradas:0,
    seguridad:true,
    cantidadBaños:2,
       baños:{
        hombres: true,
        mujeres: true,
        discapacitados: false,
        mascotas: true,
      },
    plazaDeComidas:true,
      localesDeComida:20,
        local1:"El Corral",
        local2:"El Kakareo",
        local3:"Frisby",
        local4:"Subway"    
  },
    cantidadLocales:20,
      localesDeELectrodomesticos:{
        local1:"Kalley"
      }
};
/*6.5. Destructuring de objetos anidados*/
const {piso1:{entradas}}=centroComercial;
console.log(entradas);
const{piso1:{baños:{hombres}}}=centroComercial;
console.log(hombres);
/*6.6.metodos objetos*/

/*6.6.1 congelar  .freeze*/

/* console.log((centroComercial.gerente = "Don Tu")); */



//7.  this 

//8. Objeto Constructor

/*9.--------ARRAYS--------- */
/* -------------------------------------------------------------------------------------- */
const buseta = {
  conductor :"Pedro",
  sillas : 20,
  placa: "XLOC-928"
};

/* 9.  Recordando objetos */
  
  // 9.1  Creando arreglo
  const arreglo23=[1,2,3];
  console.log(typeof(arreglo23));
  const seguidores =[1,2,3,[100,200,300]];
  console.log(seguidores);
  let arreglo = new Array(1,2,9)
  console.log(arreglo);
  //9.2 acceder a los elementos del arreglo
  console.log(seguidores[3][2]);
  //9.3 recorrer un array
  for (let i=0;i<seguidores.length;i++){
    console.log(seguidores[i]);
  };
a=seguidores.length;
console.log(a);

  //9.4  agregar nuevos valores al final de un array 
  seguidores[4]="valor";
  console.log(seguidores);
  //9.5 agregar elemento al final sin conocer longitud del arreglo - Push
  seguidores.push="Sabado";
  console.log(seguidores);
  //9.6 Agregando objetos a un arreglo
  const carritoCompras=[];
  const producto1={
    name:"Automovil",
    precio:50000000,
  };
  const producto2={
    nombre:"Camion",
    precio:90000000,
  }
  const producto3={
    nombre:"Bicicleta",
    precio:1200000
  }
   const producto4={
    nombre:"Anillo",
    precio:1300000
  }
   const producto5={
    nombre:"pc",
    precio:12000000
  }

carritoCompras.push(producto1,producto2,producto3,producto4,producto5);
console.log(carritoCompras);
  //9.7 Eliminar ultimo elemento del arreglo - pop()
  carritoCompras.pop()
  console.log(carritoCompras);
  //9.8 Eliminar primer elemento del arreglo - shift()

  carritoCompras.shift();
  console.log(carritoCompras);
  /* carrito.shift();
  console.log(carrito); */
  
  //9.9 eliminar cualquier elemento/splice
  carritoCompras.splice(1,1)
  console.log(carritoCompras);
  //10.  DESTRUCTURING - ARRAYS ...
  const weekDays=["Lunes,","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

  const[lunes1,...restodedias]=weekDays
  console.log(restodedias);
  const [lunes,martes, , , ,miercoles]=weekDays
  console.log(lunes,martes,miercoles);
  //11.  Iterar un array con objetos como elementos
  for(let j =0; j<carritoCompras.length; j++){
    console.log(`Los elementos son ${carritoCompras[j].nombre}--${carritoCompras[j].precio}`);
  }
  //11.1 Iterar con FOR  
  
  //11.2 Iterar con ForEach 
 
  //11.3 Iterar con Map  
  
  //12. FUNCIONES */
  /* ------------------------------------------------------------------------------------------------- */
  
  /* 12.1 Function Declaration */
  
  /* 12.2 Function Expression */
  
  /* 12.3 comunicacion entre funciones */
  
  /* 12.4 Agregar funciones a objetos - metodos de propiedad */
  
  /* 12.5 Arrow functions */
  
  /* const verTvs = () => {
    console.log(`la tvs se mira en las tardes`);
  }; */
  
  /* const verTvs = () => console.log(`la tvs se mira en las tardes`);
  verTvs();
   */
  
  /* de una sola linea */
  
  // parametros en arrow functions
  



