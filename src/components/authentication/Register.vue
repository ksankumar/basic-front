<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <input v-model="name" class="form-control" type="text" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <input v-model="email" class="form-control" type="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input v-model="password" class="form-control" type="password" placeholder="Password">
                    </div>
                    <button @click="register" class="btn btn-success pull-right">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                let data = {
                    client_id: 2,
                    client_secret: 'O4vhIS9C4J8NHDRobzdWJcW49F3kryjkxpiJdNU7',
                    grant_type: 'password',
                    name: this.name,
                    username: this.email,
                    password: this.password
                };
                this.$http.post("oauth/token", data)
                    .then(response => {
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())

                        this.$router.push("/feed")
                    });
            }
        }
    }

</script>

<style>

</style>
