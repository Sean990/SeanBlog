<template>
    <exception-page type="404"/>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ExceptionPage from "@/components/ExceptionPage.vue";

    @Component({
        components: {
            ExceptionPage
        }
    })
    export default class Exception404 extends Vue {

    }
</script>

<style scoped>

</style>
