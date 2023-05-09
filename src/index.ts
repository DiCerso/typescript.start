let mystring: string = "HELLO WORLD";
let mynumber: number = 33;


//array

let arrnumber : number[] = [1 ,2 ,3 ];
let arrstring : string[] = ["uno", "dos", "tres"];
let arrAny : any[] = ["hola", 123, true];

// Tuple 
let tuplaPlayer: [string, number, boolean] = ["hola", 123, true];

let TupleArray : [number, string] [];
TupleArray = [
    [123, "hola"],
    [1231, "asdada"],
    [25151, "#"]
];

// Unions

let myvariable : number | string | null; //puede ser cualquiera
myvariable = 23;
myvariable = "sdasd"

// Enum

enum Roles{
    admin,
    moderator,
    user
}

/* console.log(Roles.admin);
 *///otro caso de enum

enum Roless{
    admin = 'hola',
    moderator = 'pedro',
    user = 'adasd'
}
/***********************************/

//type assetion

let channel: any = "variable";


let chanelstr = <string> channel;
let chanelstr2 = channel as string;//son 2 formas de hacer lo mismo



//funciones

nombre('pedrito');


function nombre(name:string){
    console.log(`Hola, ${name} bienvenido`);
}



function getNumber(): number{
    return Math.floor(Math.random() * 100);
}

console.log(getNumber());

function printposition(position: {LAT: number, long?: number | string}){ //el  ? hace que sea opcional
    console.log(`la langitud es: ${position.long} y la latitud es ${position.LAT}`);
}


printposition({LAT : 121, long: 231});






