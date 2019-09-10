<template>
    <div>
        <footer class="main-footer">
            <div class="container">
                <div class="row">

                    <div class="col-sm-4">
                        <div class="widget"><h4 class="title">最新文章</h4>
                            <div class="content recent-post">
                                <div class="recent-single-post">
                                    <router-link to="/Article/id=1" class="post-title">前端技巧分享</router-link>
                                    <div class="date">2018年02月08日</div>
                                </div>
                                <!--                                <div class="recent-single-post">-->
                                <!--                                    <router-link to="/" class="post-title">Laravel 5.5 将是下一个 LTS 版本，预计 7/8 月份发布</router-link>-->
                                <!--                                    <div class="date">2017年02月20日</div>-->
                                <!--                                </div>-->
                                <!--                                <div class="recent-single-post">-->
                                <!--                                    <router-link to="/" class="post-title">Laravel 5.4 版本正式发布</router-link>-->
                                <!--                                    <div class="date">2017年01月24日</div>-->
                                <!--                                </div>-->
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="widget">
                            <h4 class="title">标签云</h4>
                            <div class="content tag-cloud">
                                <router-link to="/tag/name=HTML">HTML</router-link>
                                <router-link to="/tag/name=CSS">CSS</router-link>
                                <router-link to="/tag/name=JavaScript">JavaScript</router-link>
                                <router-link to="/tag/name=JQuery">JQuery</router-link>
                                <router-link to="/tag/name=Vue.js">Vue.js</router-link>
                                <router-link to="/tag/name=ES6">ES6</router-link>
                                <router-link to="/tag/name=WebPack">WebPack</router-link>
                                <router-link to="/tag/name=MySQL">MySQL</router-link>
                                <router-link to="/tag/name=Nginx">Nginx</router-link>
                                <router-link to="/tag/name=小程序">小程序</router-link>
                                <!--                                <router-link to="/TagCloud/">...</router-link>-->
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="widget">
                            <h4 class="title">友链</h4>
                            <div class="content tag-cloud friend-links">
                                <!--                                <a href="http://www.bootcss.com" title="Bootstrap中文网" target="_blank">Bootstrap中文网</a>-->
                                <!--                                <a href="http://lodashjs.com/" title="Lodash中文文档" target="_blank">Lodash中文文档</a>-->
                                <!--                                <a href="https://www.jquery123.com/" title="jQuery中文文档" target="_blank">jQuery中文文档</a>-->
                                <!--                                <a href="https://www.webpackjs.com/" title="Webpack中文网" target="_blank">Webpack中文网</a>-->
                                <!--                                <a href="https://www.nodeapp.cn/" title="Node.js中文文档" target="_blank">Node.js中文文档</a>-->
                                <!--                                <a href="https://www.quanzhanketang.com/" title="全栈课堂" target="_blank">全栈课堂</a>-->
                                <!--                                <a href="http://www.91php.com/" title="91PHP" target="_blank">91PHP</a>-->
                                <!--                                <a href="https://www.npmjs.com.cn/" title="NPM中文文档" target="_blank">NPM中文文档</a>-->
                                <!--                                <a href="http://www.sasschina.com/" title="SASS中文网" target="_blank">SASS中文网</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <span>Copyright © <router-link to="/">Sean Blog</router-link></span> |
                        <span><a href="http://gd.beian.miit.gov.cn" target="_blank">粤ICP备17162010号-1</a></span>
                        <!-- |-->
                        <!--            <span>京公网安备11010802014853</span>-->
                    </div>
                </div>
            </div>
        </div>
        <scroll-top></scroll-top>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ScrollTop from "@/components/ScrollTop.vue";

    @Component({
        components: {
            ScrollTop
        }
    })
    export default class Footer extends Vue {
        // 回到顶部后回调
        onScollTop() {
            alert("到达页面顶部了");
        }
    }
</script>

<style scoped>

</style>
