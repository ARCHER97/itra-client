export class Profile {
    
    constructor(private id: number,
                private name: string,
                private yearOfBirth: number,
                private weight: number,
                private height: number,
                private sex: string,
                private typesOfPhotography: string,
                private rating: number){ }

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getRating() {
        return this.rating;
    }

    setrating(rating: number) {
        this.rating = rating;
    }
    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getYearOfBirth() {
        return this.yearOfBirth;
    }

    setYearOfBirth(yearOfBirth: number) {
        this.yearOfBirth = yearOfBirth;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight: number) {
        this.weight = weight;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height: number) {
        this.height = height;
    }

    getSex() {
        return this.sex;
    }

    setSex(sex: string) {
        this.sex = sex;
    }

    getTypesOfPhotography() {
        return this.typesOfPhotography;
    }

    setTypesOfPhotography(typesOfPhotography: string) {
        this.typesOfPhotography = typesOfPhotography;
    }

}
