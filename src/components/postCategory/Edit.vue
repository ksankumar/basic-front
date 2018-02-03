<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="category.name"/>
                    </div>

                    <button class="btn btn-success pull-right"
                            @click="update" v-show="category.name">Update
                    </button>
                    <router-link class="btn btn-primary" to="/postcategory">Back</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import swal from 'sweetalert'
    export default {

        created() {
            this.getProduct()
        },
        data() {
            return {
                category: {}
            }
        },
        methods: {
            getProduct() {
                this.$http.get('http://mcart.app/api/postcategory/' + this.$route.params.category)
                        .then(response => {
                    this.category = response.body
            })
            },

            update() {
                this.$http.put("http://mcart.app/api/postcategory/" + this.$route.params.category, this.category)
                        .then(response => {
                    swal("Updated!", "Your Post Category has been updated!", "success")
            })
            }
        }
    }
</script>