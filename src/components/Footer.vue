<template>
    <div>
        <footer class="main-footer">
            <a :href="userInfo.github_link" target="_blank"
                         rel='noreferrer noopener'><i class="iconfont icongithub"></i></a>
            <a :href="userInfo.qq_link" target="_blank"
                     rel='noreferrer noopener'><i class="iconfont iconqq"></i></a>
            <a :href="userInfo.music_link" target="_blank"
                        rel='noreferrer noopener'><i class="iconfont iconmusic"></i></a>
<!--            <div class="copyright">-->
<!--                <div class="container">-->
<!--                    <div class="row">-->
<!--                        <div class="col-sm-12">-->
<!--                            <span>Copyright © <router-link to="/">Sean Blog</router-link></span> |-->
<!--                            <span><a href="http://gd.beian.miit.gov.cn" target="_blank">粤ICP备17162010号-1</a></span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </footer>
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
        tagLis: Array<any> = []
        userInfo: Array<any> = []

        // 回到顶部后回调
        onScrollTop() {
            alert("到达页面顶部了");
        }

        created() {
            this.$axios({
                url: this.$request.USER_INFO,
                method: 'get',
                params: {id: 1}
            }).then(res => {
                this.userInfo = res;
            })

            this.$axios({
                url: this.$request.TAG_LIST,
                method: "get"
            }).then(res => {
                this.tagLis = res;
            })
        }
    }
</script>

<style scoped>

</style>
