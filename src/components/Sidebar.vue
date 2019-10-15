<template>
    <div>
        <aside class="col-md-4 sidebar">
            <!-- start widget -->
            <div class="widget">
                <h4 class="title">About Me</h4>
                <div class="widget-about">
                    <div class="wp-caption about-img-wrap">
                        <router-link to="/About">
                            <img src="../assets/images/185108-15142854680e0a.jpg" class="img-responsive center-block" alt="Sean">
                        </router-link>
                    </div>
                    <p>对技术的执着爱钻研的精神不轻易言弃，一直热爱着前端，这就是我。</p>
                    <object class="about-signature" type="image/svg+xml" data="http://view.jqueryfuns.com/2016/7/29/e2aa3c59a2dcb5b9eec7a37e5298b547/img/signature.svg"></object>
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
                <h4 class="title">最新文章</h4>
                <ul>
                    <li>
                        <router-link to="/Article?id=1" class="recent-post clearfix">
                            <div class="recent-post-img">
                                <img src="http://view.jqueryfuns.com/2016/7/29/e2aa3c59a2dcb5b9eec7a37e5298b547/img/post-icon-2.jpg" alt="发布">
                            </div>
                            <div class="recent-post-content">
                                <h2 class="entry-title">节日礼物指南</h2>
                                <span class="posted-on">
                                    <time class="entry-date published updated" datetime="2015-01-10T20:15:40+00:00">2016年3月15日</time>
                                </span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Article?id=1" class="recent-post clearfix">
                            <div class="recent-post-img">
                                <img src="http://view.jqueryfuns.com/2016/7/29/e2aa3c59a2dcb5b9eec7a37e5298b547/img/post-icon-2.jpg" alt="发布">
                            </div>
                            <div class="recent-post-content">
                                <h2 class="entry-title">节日礼物指南</h2>
                                <span class="posted-on">
                                    <time class="entry-date published updated" datetime="2015-01-10T20:15:40+00:00">2016年3月15日</time>
                                </span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- end widget -->

            <!-- start tag cloud widget -->
            <div class="widget">
                <h4 class="title">标签</h4>
                <div class="content tag-cloud">
                    <router-link :to="'/tag/name=' + item.tag_title" v-for="(item, index) in tagLis" :key="index">{{item.tag_title}}</router-link>
                </div>
            </div>
            <!-- end tag cloud widget -->

            <!-- start widget -->
            <div class="widget">
                <h4 class="title">友情链接</h4>
                <div class="content friend-links">
                    <a href="http://www.bootcss.com" title="Bootstrap中文网" target="_blank">Bootstrap中文网</a>
                    <a href="http://lodashjs.com/" title="Lodash中文文档" target="_blank">Lodash中文文档</a>
                    <a href="https://www.jquery123.com/" title="jQuery中文文档" target="_blank">jQuery中文文档</a>
                    <a href="https://www.webpackjs.com/" title="Webpack中文网" target="_blank">Webpack中文网</a>
                    <a href="https://www.nodeapp.cn/" title="Node.js中文文档" target="_blank">Node.js中文文档</a>
                    <a href="https://www.quanzhanketang.com/" title="全栈课堂" target="_blank">全栈课堂</a>
                    <a href="http://www.91php.com/" title="91PHP" target="_blank">91PHP</a>
                    <a href="https://www.npmjs.com.cn/" title="NPM中文文档" target="_blank">NPM中文文档</a>
                    <a href="http://www.sasschina.com/" title="SASS中文网" target="_blank">SASS中文网</a>
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
        tagLis: Array<any> = []

        created () {
            this.$axios({
                url: this.$request.USER_INFO,
                method: 'get',
                params: {id: 1}
            }).then(res => {
                this.userInfo = res;
            })

            this.$axios({
                url: this.$request.TAG,
                method: 'get'
            }).then(res => {
                this.tagLis = res;
            })
        }
    }
</script>
