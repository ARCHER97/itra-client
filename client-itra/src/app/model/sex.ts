export class Sex {

    constructor(private id: number, private name: string){};

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }
    
}
