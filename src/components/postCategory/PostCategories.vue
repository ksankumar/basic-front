<template>
    <div class="row">
        <my-postCategory
                v-for="postCategory in postCategories"
                @delete-postCategory="deletePostCategory(postCategory)"
                :authenticatedUser="authenticatedUser"
                :postCategory="postCategory">
        </my-postCategory>
    </div>
</template>

<script>
    import swal from 'sweetalert'
    import PostCategory from './PostCategory.vue'
    export default {
        data () {
            return {
                postCategories: []
            }
        },

        computed: {
            authenticatedUser(){
                return this.$auth.getAuthenticatedUser()
            }
        },
        components: {
            'my-postCategory': PostCategory
        },
        created () {
            this.$http.get('http://mcart.app/api/postcategory')
                .then(response => {
                    this.postCategories = response.body
                })
        },

        methods: {
            deletePostCategory(postCategory) {
                //console.log(postCategory);
                swal({
                        title: "Are you sure?",
                        text: "You will not be able to recover this category!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it!",
                        closeOnConfirm: false
                    },

                    function () {
                        this.$http.delete('http://mcart.app/api/postcategory/' + postCategory.id)
                            .then(response => {
                                let index = this.postCategories.indexOf(postCategory)
                                this.postCategories.splice(index, 1)

                                swal("Deleted!", "Your category has been deleted.", "success");

                            })

                    }.bind(this));
            }
        }
    }
</script>