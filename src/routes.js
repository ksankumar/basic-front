import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: require('./components/Index.vue'),
            meta: {
                forVisitors: true
            }
        },
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
            path: "/shop",
            component: require('./components/Shopping/Product/Products.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/home",
            component: require('./components/Home.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/product/create",
            component: require('./components/Shopping/Product/Create.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/product/show",
            component: require('./components/Shopping/Product/Product.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: "/products/:Product/edit",
            component: require('./components/Shopping/Product/Edit.vue'),
            meta: {
                forAuth: true
            }
        }
    ],

    linkActiveClass: 'active',

    mode: 'history'
});

export default router