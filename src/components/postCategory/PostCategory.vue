<template>
    <div class="row">
        <div class="thumbnail">
            <div class="caption">
                <h3>{{ postCategory.name }}</h3>

                <p v-if="postCategory.user_id == authenticatedUser.id">
                    <a href="#" @click="$emit('delete-postCategory')" class="btn btn-danger" role="button">
                        Delete
                    </a>
                    <router-link class="btn btn-success" :to="'/postcategory/' + postCategory.id + '/edit'">Edit</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["postCategory", "authenticatedUser"]
    }
</script>