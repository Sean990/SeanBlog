<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">

                <main class="col-md-8 main-content">
                    <article class="post">
                        <header class="post-head">
                            <h1 class="post-title">{{pagesData.article_title}}</h1>
                            <section class="post-meta">

                                <span class="author">作者：<router-link to="/About">{{pagesData.user.nickname}}</router-link></span> •
                                <time class="post-date" :datetime="pagesData.detail_time" :title="pagesData.detail_time">
                                    {{pagesData.create_time}}
                                </time>
                            </section>
                        </header>
                        <section class="featured-media" v-if="pagesData.article_pic">
                            <img :src="pagesData.article_pic" :alt="pagesData.article_title">
                        </section>
                        <section class="post-content">{{pagesData.article_cont}}</section>
                        <footer class="post-footer clearfix" v-if="pagesData.tags.length > 1">
                            <div class="pull-left tag-list">
                                <i class="iconfont icontags"></i>
                                <template v-for="(tag,index) in pagesData.tags">
                                    <template v-if="index > 0">,</template>
                                    <router-link :to="'/Tag?id=' + tag.id">{{tag.tag_title}}</router-link>
                                </template>
                            </div>
                            <div class="pull-right share"></div>
                        </footer>
                    </article>

<!--                    <div class="prev-next-wrap clearfix">-->
<!--                        <router-link class="btn btn-default" to="/Article">没有下一篇<i class="iconfont iconangle-right fa-fw"></i>-->
<!--                        </router-link>-->
<!--                    </div>-->
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
    export default class Article extends Vue {
        pagesData: object = {
            user: {
                nickname: ''
            },
            tags: []
        }

        created () {
            this.$axios({
                url: this.$request.ARTICLE_DETAIL,
                method: 'get',
                params: {id: this.$route.query.id}
            }).then(res => {
                this.pagesData = res;
            })
        }
    }
</script>

<style scoped>

</style>
