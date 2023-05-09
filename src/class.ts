
class person{

    protected city: string = 'Santo Domingo';
    private country: string = 'R.D';

    constructor (){}

    greet():void {
        this.city
        console.log("HOLAAAA!!!");
    }
}


class Employee extends person{
    //atributos
/*     private id: Number;
    private name: String;
    private dept: String; */

    //metodos
    constructor(private id: number, private name: string, private dept:string){
        super();
        this.showinfo();
    }

    showinfo():void {
        console.log(`${this.name}`);
    }
}


const emp = new Employee(1, 'Dominicode', 'venta');


