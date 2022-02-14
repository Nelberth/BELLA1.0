export class Bancos{
    id:number=0;
    nombre_banco:string='';
    numero_banco:string='';
    dinero_banco:string='0';
    icono_moneda:string='';

    constructor(id:number, nombre_banco:string,numero_banco:string,dinero_banco:string, icono_moneda:string){
        this.id=id;
        this.nombre_banco=nombre_banco;
        this.numero_banco=numero_banco;
        this.dinero_banco=dinero_banco;
        this.icono_moneda=icono_moneda;
    }

}