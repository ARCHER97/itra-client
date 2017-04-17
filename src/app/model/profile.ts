export class Profile {

    constructor(private id: number,
                private name: string,
                private yearOfBirth: number,
                private weight: number,
                private height: number,
                private sex: string,
                private typesOfPhotography: string){ }

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

    getYearOfBirth(){
        return this.yearOfBirth;
    }

    setYearOfBirth(yearOfBirth: number){
        this.yearOfBirth = yearOfBirth;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(weight: number){
        this.weight = weight;
    }

    getGrowth(){
        return this.height;
    }

    setGrowth(height: number){
        this.height = height;
    }

    getSex(){
        return this.sex;
    }

    setSex(sex: string){
        this.sex = sex;
    }

    gettypesOfPhotography(){
        return this.typesOfPhotography;
    }

    setTypesOfPhotography(typesOfPhotography: string){
        this.typesOfPhotography = typesOfPhotography;
    }
}
