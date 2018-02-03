/**
 * Created by radhasoami on 21-01-2017.
 */

export default function (Vue) {
    let authenticatedUser = {};

    Vue.auth = {
        setToken(token, expiration) {
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expiration)
        },

        getToken() {
            const token = localStorage.getItem('token');
            const expiration = localStorage.getItem('expiration');

            if (!token || !expiration) {
                return null;
            }

            if (Date.now() > parseInt(expiration)) {
                this.destroyToken();
                return null;
            } else {
                return token;
            }
        },

        destroyToken() {
            localStorage.removeItem('token');
            localStorage.removeItem('expiration')
        },

        isAuthenticated() {
            return this.getToken();
        },

        setAuthenticatedUser(data) {
            authenticatedUser = data;
        },

        getAuthenticatedUser() {
            return authenticatedUser;
        }
    };

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })
}