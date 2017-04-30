import { AdminService } from '../services/admin.service';

class AuthState {
    authState: boolean = false;
    adminState: boolean = false;
    constructor(){
        if(localStorage.getItem('jwt') != null){
            this.authState = true;
        }
    }
}
export var authState = new AuthState();
