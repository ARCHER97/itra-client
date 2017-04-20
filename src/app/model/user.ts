export class User{
    
    private id: number;
    
    private role: string;

    constructor(private login: string,
                private password: string){ }
    
    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getLogin(){
        return this.login;
    }

    setLogin(login: string){
        this.login = login;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password: string){
        this.password = password;
    }
    
    getRole(){
        return this.role;
    }

    setRole(role: string){
        this.role = role;
    }

   
}