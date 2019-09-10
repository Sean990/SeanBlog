<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <main class="col-md-8 main-content">
                    <article class="post">
                        <header class="post-head">
                            <h1 class="post-title">练习</h1>
                        </header>
                        <!--            <section class="featured-media">-->

                        <!--            </section>-->
                        <section class="post-content">
                            <h2>敬请期待！</h2>
                        </section>
                        <footer class="post-footer clearfix"></footer>
                    </article>
                </main>
                <Sidebar></Sidebar>

            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Sidebar from "@/components/Sidebar.vue";

    @Component({
        components: {
            Sidebar
        }
    })
    export default class Exercise extends Vue {

    }
</script>

<style scoped>

</style>
