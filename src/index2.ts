// interface

interface Book{
    id : number;
    name : string;
    coname? : string
}


interface libreria extends Book{
    cantidad: number
}


let biblioteca: libreria = {
    id : 1,
    name : "pedrito",
    cantidad : 3,
}






const book: Book = {
    id : 1,
    name : "pedro"
}



let getbook  = (): Book => {
    return {id : 2, name : "pedro"}
};
