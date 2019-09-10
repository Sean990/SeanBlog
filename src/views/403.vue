<template>
    <exception-page type="403"/>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ExceptionPage from "@/components/ExceptionPage.vue";

    @Component({
        components: {
            ExceptionPage
        }
    })
    export default class Exception403 extends Vue {

    }
</script>

<style scoped>

</style>
