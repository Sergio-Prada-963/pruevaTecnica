//promedio de notas de n estudiantes 
// let N_estudiantes = prompt('Ingrese el numero de estudiantes');
// let notas = 0
// N_estudiantes++;
// for (let i = 1; i < (N_estudiantes); i++) {
//     let nota = Number(prompt(`Ingrese la nota del estudiante ${i}`));
//     notas = notas+nota
// };

// alert(`El prmedio es ${notas/N_estudiantes}`);

// fibonacci
// let fibonacci = [1,0];
// let secuencia = Number(prompt('Ingrese cuantos fibonacci quiere?'));
// for (let i = 0; i < (secuencia); i++) {
//     fibonacci.unshift(fibonacci[0]+fibonacci[1])
// }
// alert(`Numeros fibonacci ${fibonacci.reverse()}`)

//vector aleatorio
// let vector = [];
// for (let i = 0; i < 10; i++) {
//     let valor = Math.floor(Math.random() * (50 - 2) + 2);
//     vector.push(Number(valor))  
// }
// vector.sort((a,b)=>{return a-b})
// let suma = vector.reduce(
//     (ac, current) => ac + current,0,
// );
// alert(`El valor promedio es: ${suma/10} maximo es ${vector.pop()} El valor minimo es ${vector[0]}`);

//descambio de dinero
// let cantidad = Number(prompt('ingrese la cantidad:   '));
// const total = cantidad
// const billetes = [20000, 10000, 2000, 200, 100, 50];
// billetes.sort((unNumero, otroNumero) => otroNumero - unNumero);
// let cambio = [];
// for (const moneda of billetes) {
//     while (cantidad >= moneda) {
//         cambio.push(moneda);
//         cantidad -= moneda;
//     }
// }
// let veinteml = 0
// let diezml = 0
// let dosml = 0
// let dos = 0
// let cien = 0
// let cinco = 0
// cambio.map((billete)=>{
//     switch (billete) {
//         case 20000:
//             veinteml++
//             break;
//         case 10000:
//             diezml++
//             break;
//         case 2000:
//             dosml++
//             break;
//         case 200:
//             dos++
//             break;
//         case 100:
//             cien++
//             break;
//         case 50:
//             cinco++
//             break;
//     }
// })
// alert(`Entrada ${total} 
// salida:
// Billetes de 20 mil: ${veinteml},   
// Billetes de 10 mil: ${diezml},   
// Billetes de 2 mil: ${dosml},   
// Monedas de 200: ${dos},   
// Monedas de 100: ${cien},   
// Monedas de 50: ${cinco} `)

//Suma de numeros primos 
// const numero = Number(prompt('Ingrese un numero:  '));
// let numeroPrimos = []
// const esPrimo = (numero) => {
// 	if (numero == 0 || numero == 1 || numero == 4) return;

// 	for (let x = 2; x < numero / 2; x++) {
// 		if (numero % x == 0) {
//             console.log(numero);
//             return;
//         }
// 	}
//     return numeroPrimos.push(numero);
// }
// for (let i = 0; i < numero; i++) {
//     esPrimo(i)    
// }

// let total = numeroPrimos.reduce(
//     (ac, current) => ac + current,0,
// );

// alert(`${numeroPrimos} (${total})`);

//verificacion de palidromos
// const text = prompt('Ingrese un texto:  ')
// const derecho = text.split(" ").join("")

// let invertido = text.split(" ").join("").split("").reverse().join("");;

// if(derecho === invertido){
//     alert(`es palindromo ${text}`)
// } else {
//     alert(`No es palindromo ${text}`)
// }

//clase productos 

class Productos {
    constructor(codigo, descripcion, precio_compra, cant_min_bodega, cant_max_bodega, portcentaje_des){
        this.codigo = codigo
        this.descripcion = descripcion
        this.precio_compra = precio_compra
        this.cant_min_bodega = cant_min_bodega
        this.cant_max_bodega = cant_max_bodega
        this.portcentaje_des = portcentaje_des
    }

    buscar(nombre){
        if(this.descripcion === nombre){
            return true
        } else {
            return false
        }
    }

    total_pagar(cant){
        return this.precio_compra * cant
    }
}

const vector_productos = []

const save_productos = ()=>{
    const cantidad = prompt('cantidad de productos: ')
    for (let i = 1; i <= cantidad; i++) {
        let id = prompt(`id producto ${i}`)
        let descrip = prompt(`descripcion de producto ${i}`)
        let precio = Number(prompt(`Precio producto ${i}`))
        let cant_min = Number(prompt(`cantidad minima producto ${i}`))
        let cant_max = Number(prompt(`Cantidad maxima producto ${i}`))
       vector_productos.push(new Productos(id,descrip, precio,cant_min,cant_max,2));
    }
    console.log(vector_productos[0])
}

//save_productos()

const buscar = ()=>{
    const produc_nombre = prompt('producto a buscar: ')
    const data = new Productos("a1","nospirin", 5000,12,30,2)
    data.buscar(ibuprofeno.pedido(produc_nombre));
}

//buscar()