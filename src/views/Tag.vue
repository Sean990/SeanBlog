<template>
    <div>
        <div class="post widget tag-info-box">
            <header class="post-head">
                <h1 class="post-title">{{pageData.tag_title}}</h1>
                <section class="post-meta">
                    <span>{{pageData.article_count}}文章</span>
                </section>
            </header>
        </div>
        <section class="content-wrap">
            <div class="container">
                <main class="main-content">
                    <article class="post widget recent-post-list">
                        <router-link v-for="(item, index) in pageData.articles" :key="index" :to="'/Article?id=' + item.id" class="recent-post clearfix">
                            <div class="recent-post-content">
                                <h2 class="entry-title">{{item.article_title}}</h2>
                                <div class="entry-content" v-html="item.article_cont"></div>
                                <span class="posted-on">
                                    <time class="entry-date published updated" :datetime="item.detail_time" :title="item.detail_time">{{item.create_time}}</time>
                                </span>
                            </div>
                            <div class="recent-post-img" v-if="item.article_pic" :style="{backgroundImage: 'url(' + item.article_pic + ')'}"></div>
                        </router-link>
                    </article>
                </main>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import {Component, Watch, Vue} from "vue-property-decorator";

    @Component
    export default class Tag extends Vue {
        pageData: Array<any> = []

        created () {
            this.$axios({
                url: this.$request.TAG_TO_ARTICLE,
                method: 'get',
                params: {id: this.$route.query.id}
            }).then(res => {
                this.pageData = res;
            })
        }
    }
</script>

<style scoped>

</style>
