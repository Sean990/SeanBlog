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
                            <router-link :to="'/Tag?id=' + item.id" v-for="(item, index) in tagList" :key="index">{{item.tag_title}}</router-link>
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
        tagList: Array<any> = []

        created () {
            this.$axios({
                url: this.$request.TAG_LIST,
                method: 'get'
            }).then(res => {
                this.tagList = res;
            })
        }
    }
</script>

<style scoped>

</style>
