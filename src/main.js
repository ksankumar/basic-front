import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth'
import VeeValidate from 'vee-validate'
import MaterializeJS from 'materialize-css';
import MaterializeCSS from 'materialize-css/dist/css/materialize.min.css';

Vue.use(VueResource);
Vue.use(Auth);
Vue.use(VeeValidate);
Vue.use(MaterializeJS);
Vue.use(MaterializeCSS);

Vue.http.options.root = 'http://localhost:8000';

Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

Vue.http.interceptors.push((request, next) => {
    next(response => {
        if (response.status === 404)
            swal(response.status.toString(), response.body.error, "error");
        else if (response.status === 500)
            swal(response.status.toString(), "We are experiencing a problem in our servers!");
    })
});

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) {
            if (Vue.auth.isAuthenticated()) {
                next({
                    path: '/feed'
                })
            } else next()
        }
        else if (to.matched.some(record => record.meta.forAuth)) {
            if (!Vue.auth.isAuthenticated()) {
                next({
                    path: '/login'
                })
            } else next()
        }
        else next()
    }
);

new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
});

(function ($) {
    $(function () {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space
