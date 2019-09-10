<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <main class="col-md-8 main-content">
                    <article class="post widget">
                        <header class="post-head">
                            <h1 class="post-title">标签云</h1>
                        </header>
                        <section class="post-content tag-cloud">
                            <router-link to="/tag?name=HTML">HTML</router-link>
                            <router-link to="/tag?name=CSS">CSS</router-link>
                            <router-link to="/tag?name=JavaScript">JavaScript</router-link>
                            <router-link to="/tag?name=JQuery">JQuery</router-link>
                            <router-link to="/tag?name=Vue.js">Vue.js</router-link>
                            <router-link to="/tag?name=ES6">ES6</router-link>
                            <router-link to="/tag?name=WebPack">WebPack</router-link>
                            <router-link to="/tag?name=MySQL">MySQL</router-link>
                            <router-link to="/tag?name=Nginx">Nginx</router-link>
                            <router-link to="/tag?name=小程序">小程序</router-link>
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
    export default class Tag extends Vue {

    }
</script>

<style scoped>

</style>
