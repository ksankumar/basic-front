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
                            @click="create">Create

                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                category: {
                    name: ''
                }
            }
        },
        methods: {
            create () {
                this.$http.post("http://mcart.app/api/postcategory", this.category)
                    .then(response => {
                        this.$router.push('/postcategory')
                    }
                )
            }
        }
    }
</script>