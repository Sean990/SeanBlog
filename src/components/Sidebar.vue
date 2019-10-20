<template>
    <div>
        <aside class="col-md-4 sidebar">
            <!-- start widget -->
            <div class="widget">
                <h4 class="title">About Me</h4>
                <div class="widget-about">
                    <div class="wp-caption about-img-wrap">
                        <router-link to="/About">
                            <img src="https://zay990.com/img/01.jpg" class="img-responsive center-block" alt="Sean">
                        </router-link>
                    </div>
                    <p>对技术的执着爱钻研的精神不轻易言弃，一直热爱着前端，这就是我。</p>
<!--                    <img class="about-signature" src="../assets/images/signature.png" />-->
                    <object class="about-signature" type="image/svg+xml" data="https://zay990.com/img/signature.svg"></object>
                </div>
            </div>
            <!-- end widget -->

            <!-- start tag cloud widget -->
            <div class="widget">
                <h4 class="title">Flow Me</h4>
                <div class="content community">
                    <a :href="userInfo.github_link" target="_blank"
                       rel='noreferrer noopener' class="iconfont icongithub"></a>
                    <a :href="userInfo.qq_link" target="_blank"
                       rel='noreferrer noopener' class="iconfont iconqq"></a>
                    <a :href="userInfo.music_link" target="_blank"
                       rel='noreferrer noopener' class="iconfont iconmusic"></a>
                </div>
            </div>
            <!-- end tag cloud widget -->

            <!-- start widget -->
            <div class="widget widget-subscribe-recent">
                <h4 class="title">Latest</h4>
                <ul>
                    <li v-for="(item, index) in recentList" :key="index">
                        <router-link :to="'/Article?id=' + item.id" class="recent-post clearfix">
                            <div class="recent-post-img" v-if="item.article_pic">
                                <img :src="item.article_pic" :alt="item.article_title">
                            </div>
                            <div class="recent-post-content">
                                <h2 class="entry-title">{{item.article_title}}</h2>
                                <span class="posted-on">
                                    <time class="entry-date published updated" :datetime="item.detail_time" :title="item.detail_time">{{item.create_time}}</time>
                                </span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- end widget -->

            <!-- start tag cloud widget -->
            <div class="widget">
                <h4 class="title">Tags</h4>
                <div class="content tag-cloud">
                    <router-link v-if="index <= 11" :to="'/Tag?id=' + item.id" v-for="(item, index) in tagList" :key="index">{{item.tag_title}}</router-link>
                    <router-link to="/TagCloud" v-else>...</router-link>
                </div>
            </div>
            <!-- end tag cloud widget -->

            <!-- start widget -->
            <div class="widget">
                <h4 class="title">Friend Links</h4>
                <div class="content friend-links">
                    <a v-for="(item, index) in friend_link" :key="index" :href="item.friendlink_url" :title="item.friendlink_title" target="_blank">{{item.friendlink_title}}</a>
                </div>
            </div>
            <!-- end widget -->
        </aside>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Sidebar extends Vue {
        userInfo: Array<any> = []
        tagList: Array<any> = []
        recentList: Array<any> = []
        friend_link: Array<any> = []

        created () {
            this.$axios({
                url: this.$request.USER_INFO,
                method: 'get',
                params: {id: 1}
            }).then(res => {
                this.userInfo = res;
            })

            this.$axios({
                url: this.$request.RECENT,
                method: 'get'
            }).then(res => {
                this.recentList = res;
            })

            this.$axios({
                url: this.$request.TAG_LIST,
                method: 'get'
            }).then(res => {
                this.tagList = res;
            })

            this.$axios({
                url: this.$request.FRIEND_LINK,
                method: 'get'
            }).then(res => {
                this.friend_link = res;
            })
        }
    }
</script>
