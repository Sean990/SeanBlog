<template>
    <div id="goTop">
        <transition name="fade">
            <a href="javascript:void(0);" id="back-to-top" v-show="goTopShow" @click="goTop"><i
                    class="fa fa-angle-up"></i></a>
        </transition>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class ScrollTop extends Vue {
        scrollTop: number = 0;
        goTopShow: boolean = false;

        //窗口滚动监听
        handleScroll() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.goTopShow = (this.scrollTop > 100);
        }

        //返回顶部
        goTop() {
            let timer: number = 0, that: any = this;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn() {
                if (that.scrollTop > 0) {
                    that.scrollTop -= 50;
                    document.body.scrollTop = document.documentElement.scrollTop = that.scrollTop;
                    timer = requestAnimationFrame(fn);
                } else {
                    cancelAnimationFrame(timer);
                    that.goTopShow = false;
                }
            });
        }

        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        }

        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }

    }
</script>

<style scoped>

</style>
