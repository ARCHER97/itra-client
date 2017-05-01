export class Role {

    constructor(private id: number, private rolename: string){};

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getRolename(){
        return this.rolename;
    }

    setRolename(rolename: string){
        this.rolename = rolename;
    }
    
}
