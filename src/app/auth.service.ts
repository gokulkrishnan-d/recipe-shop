export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800 );
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
        alert('Login Successful!!');
    }

    loggedOut() {
        this.loggedIn = false;
        alert('Success Logout');
    }
}
