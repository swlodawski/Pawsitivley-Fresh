import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    LoggdIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decode = decode(token);
            if (decode.exp < Date.now()/1000){
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    logout() {
        localStorage.remove('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();