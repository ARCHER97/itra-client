import { Role } from './role';
 
export class UserInfo {
    constructor(private idUser: number,
                private name: string,
                private colLike: number,
                private rating: string,
                private role: Role){ }

    getIdUser() {
        return this.idUser;
    }

    setIdUser(idUser: number) {
        this.idUser = idUser;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
    
    getColLike() {
        return this.colLike;
    }

    setColLike(colLike: number) {
        this.colLike = colLike;
    }

    getRating() {
        return this.rating;
    }

    setRating(rating: string) {
        this.rating = rating;
    }
    

    getRole(): Role {
        return this.role;
    }

    setRole(role: Role) {
        this.role = role;
    }

}
