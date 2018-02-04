import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/login",
            component: require('./components/authentication/Login.vue'),
            meta: {
                forVisitors: true
            }
        },
        {
            path: "/register",
            component: require('./components/authentication/Register.vue'),
            meta: {
                forVisitors: true
            }
        },
        {
            path: "/shopping",
            component: require('./components/Shopping.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/shopping/products",
            component: require('./components/Shopping/Products.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/product/create",
            component: require('./components/Shopping/product/Create.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/product/show",
            component: require('./components/Shopping/product/Show.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/products/:product/edit",
            component: require('./components/Shopping/product/Edit.vue'),
            meta: {
                forAuth: true
            }
        }
    ],

    linkActiveClass: 'active',

    mode: 'history'
});

export default router