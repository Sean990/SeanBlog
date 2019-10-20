<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <main class="col-md-8 main-content">
                    <article :id="item.id" class="post" v-for="item in articleList" :key="item.id">
                        <div class="post-head">
                            <h1 class="post-title">
                                <router-link :to="'/Article?id=' + item.id">{{item.article_title}}</router-link>
                            </h1>
                            <section class="post-meta">
                                <span class="author">作者：<router-link to="/About">{{item.user.nickname}}</router-link></span> •
                                <time class="post-date" :datetime="item.detail_time" :title="item.detail_time">
                                    {{item.create_time}}
                                </time>
                            </section>
                        </div>
                        <div class="featured-media" v-if="item.article_pic">
                            <router-link :to="'/Article?id=' + item.id">
                                <img :src="item.article_pic" :alt="item.article_title" />
                            </router-link>
                        </div>
                        <div class="post-content" v-html="item.article_cont"></div>
                        <div class="post-permalink">
                            <router-link :to="'/Article?id=' + item.id" class="more-link">continue reading</router-link>
                        </div>

                        <footer class="post-footer clearfix" v-if="item.tags.length > 1">
                            <div class="pull-left tag-list">
                                <i class="iconfont icontags"></i>
                                <template v-for="(tag,index) in item.tags">
                                    <template v-if="index > 0">,</template>
                                    <router-link :to="'/Tag?id=' + tag.id">{{tag.tag_title}}</router-link>
                                </template>
                            </div>
                            <div class="pull-right share"></div>
                        </footer>
                    </article>


<!--                    <nav class="pagination" role="navigation">-->
<!--                        &lt;!&ndash;              <router-link class="older-posts" to="/page/1/"><i class="fa fa-angle-left"></i></router-link>&ndash;&gt;-->
<!--                        <span class="page-number">第 1 页 ⁄ 共 1 页</span>-->
<!--                        &lt;!&ndash;            <router-link class="older-posts" to="/page/2/"><i class="fa fa-angle-right"></i></router-link>&ndash;&gt;-->
<!--                    </nav>-->
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
    export default class Home extends Vue {
        articleList:Array<any> = []
        created () {
            this.$axios({
                url: this.$request.HOME,
                method: 'get',
            }).then(res => {
                this.articleList = res;
            })
        }
    }
</script>

<style scoped>

</style>
