export class UserInfo {
    constructor(private idUser: number,
                private name: string,
                private yearOfBirth: number,
                private weight: number,
                private height: number,
                private sex: string,
                private typesOfPhotography: string,
                private rating: number,
                private role: string){ }

    getIdUser() {
        return this.idUser;
    }

    setIdUser(idUser: number) {
        this.idUser = idUser;
    }

    getRole() {
        return this.role;
    }

    setRole(role: string) {
        this.role = role;
    }
 
    getRating() {
        return this.rating;
    }

    setRating(rating: number) {
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
