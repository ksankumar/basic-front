<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form @submit.prevent="create">
                        <div class="form-group">
                            <label for="image">File:</label>
                            <input id="image" name="image" type="file" class="form-control"
                                   @change="imageChanged"/>
                        </div>

                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input id="name" name="name" type="text" class="form-control"
                                   v-validate="'required'"
                                   v-model="product.name"/>
                            <div class="help-block alert alert-danger"
                                 v-show="errors.has('name')">
                                {{ errors.first('name')}}
                            </div>

                        </div>

                        <div class="form-group">
                            <label for="price">Price:</label>
                            <input name="price" id="price" type="number" class="form-control"
                                   v-validate="'max_value:50|min_value:1|required'"
                                   v-model="product.price"/>
                            <div class="help-block alert alert-danger"
                                 v-show="errors.has('price')">
                                {{ errors.first('price')}}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea id="description" class="form-control" v-model="product.description"></textarea>
                        </div>
                        <input type="submit" class="btn btn-success pull-right"
                               value="Create">

                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                product: {
                    name: '',
                    price: 0,
                    description: '',
                    image: ''
                }
            }
        },
        methods: {
            imageChanged(e) {
                console.log(e.target.files[0]);
                const fileReader = new FileReader();
                fileReader.readAsDataURL(e.target.files[0]);

                fileReader.onload = (e) => {
                    this.product.image = e.target.result;
                }

            },
            create() {
                this.$validator.validateAll()
                    .then(() => {
                        this.$http.post("api/products", this.product)
                            .then(response => {
                                this.$router.push('/feed');
                            })
                    })
            }
        }
    }
</script>

<style>

</style>