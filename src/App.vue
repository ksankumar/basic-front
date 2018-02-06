<template>
    <div class="container" id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'

    export default {
        components: {
            'navbar': Navbar
        }
    }

</script>

<style>
    .icon-block {
        padding: 0 15px;
    }

    .icon-block .material-icons {
        font-size: inherit;
    }

</style>
