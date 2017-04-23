export class User {
    
    private id: number;
    
    private role: string;
    
    constructor(
        private login: string,
        private password: string
    ){}

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getRole(){
        return this.role;
    }

    setRole(role: string){
        this.role = role;
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

    setpassword(password: string){
        this.password = password;
    }
    
}
