class AuthState {
    authState = false;
    constructor(){
        if(localStorage.getItem('jwt') != null)
            this.authState = true;
    }
}
export var authState = new AuthState();
