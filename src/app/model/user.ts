export class User{
    constructor(private id :number,
                private role: string,
                private name: string,
                private yearOfBirth: number,
                private growth: number,
                private weight: number){ }
    
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

    getName(){
        return name;
    }

    setName(name: string){
        this.name = name;
    }

    getYearOfBirth(){
        return this.yearOfBirth;
    }

    setYearOfBirth(yearOfBirth: number){
        this.yearOfBirth = yearOfBirth;
    }

    getGrowth(){
        return this.growth;
    }

    setGrowth(growth: number){
        this.growth = growth;
    }

    getWeight(){
        return this.weight;
    }

    setWrowth(weight: number){
        this.weight = weight;
    }
}