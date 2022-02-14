export class brand {
    id:number;
    name:String;
    description:String;
    status:number;

    constructor(
        id:number,
        name:String, 
        description:String, 
        status:number
        )
    {
        this.id=id;
        this.name=name;
        this.description=description;
        this.status=status;
    }
}