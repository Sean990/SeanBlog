<template>
    <exception-page type="500"/>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ExceptionPage from "@/components/ExceptionPage.vue";

    @Component({
        components: {
            ExceptionPage
        }
    })
    export default class Exception500 extends Vue {

    }
</script>

<style scoped>

</style>
