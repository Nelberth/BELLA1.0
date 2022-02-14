export class Usuario{
    id:number=0;
    estado:number=0;
    user:string=''
    rol:number=0
    password:string='';
    estatus:number=0;
    
    constructor(id:number,  user:string,password:string, rol:number, estado:number){
        this.id=id;
        this.user=user;
        this.password=password;
        this.rol=rol;
        this.estado=estado;
    }

}