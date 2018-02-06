<template>

    <nav class="light-blue lighten-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Learning App</a>
            <ul class="right hide-on-med-and-down">
                <router-link tag="li" to="/login" v-if=" ! isAuth">
                    <a>Login</a>
                </router-link>

                <router-link tag="li" to="/register" v-if=" ! isAuth">
                    <a>Register</a>
                </router-link>
                <router-link tag="li" to="/products/create" v-if=" isAuth">
                    <a>Add Product</a>
                </router-link>

                <router-link tag="li" to="/feed" v-if=" isAuth">
                    <a>Feed</a>
                </router-link>

                <router-link tag="li" to="/logout" v-if=" isAuth">
                    <a>Logout</a>
                </router-link>
            </ul>

            <ul id="nav-mobile" class="side-nav">
                <router-link tag="li" to="/login" v-if=" ! isAuth">
                    <a>Login</a>
                </router-link>

                <router-link tag="li" to="/register" v-if=" ! isAuth">
                    <a>Register</a>
                </router-link>
                <router-link tag="li" to="/products/create" v-if=" isAuth">
                    <a>Add Product</a>
                </router-link>

                <router-link tag="li" to="/feed" v-if=" isAuth">
                    <a>Feed</a>
                </router-link>

                <router-link tag="li" to="/logout" v-if=" isAuth">
                    <a>Logout</a>
                </router-link>
            </ul>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {isAuth: null}
        },

        created() {
            this.isAuth = this.$auth.isAuthenticated();

            this.setAuthenticatedUser()
        },

        methods: {
            setAuthenticatedUser() {
                this.$http.get('api/user')
                    .then(response => {
                        this.$auth.setAuthenticatedUser(response.body);

                        console.log(this.$auth.getAuthenticatedUser());
                    })
            }
        }
    }
</script>

<style>

</style>