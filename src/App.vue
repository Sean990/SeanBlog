<template>
    <div>
        <keep-alive>
            <app-header></app-header>
        </keep-alive>
        <router-view></router-view>
        <keep-alive>
            <app-footer></app-footer>
        </keep-alive>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        data() {
            return {}
        },
        components: {
            appHeader: Header,
            appFooter: Footer
        },
        methods: {}
    }
</script>

<style lang="scss">
    @import './style/base/_base.scss';
</style>
