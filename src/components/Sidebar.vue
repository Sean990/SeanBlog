<template>
    <div>
        <aside class="col-md-4 sidebar">
            <!-- start widget -->
            <!-- end widget -->

            <!-- start tag cloud widget -->
            <div class="widget">
                <h4 class="title">联系作者</h4>
                <div class="content community">
                    <p>GitHub：<a href="https://github.com/Sean990" target="_blank" rel='noreferrer noopener'>@Sean990</a></p>
                    <p>QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=1291955481&site=qq&menu=yes" target="_blank" rel='noreferrer noopener'>@bià bià bià~</a></p>
                    <p>网易云音乐：<a href="https://music.163.com/#/user/home?id=254853579" target="_blank" rel='noreferrer noopener'>@Sean990</a></p>
                </div>
            </div>
            <!-- end tag cloud widget -->

            <!-- start widget -->
            <div class="widget">
                <h4 class="title">最新文章</h4>
                <router-link to="/Article?id=1" class="btn btn-default btn-block">前端技巧分享</router-link>
            </div>
            <!-- end widget -->

            <!-- start tag cloud widget -->
            <div class="widget">
                <h4 class="title">标签</h4>
                <div class="content tag-cloud">
                    <router-link to="/tag/name=CSS">CSS</router-link>
                    <router-link to="/tag/name=JavaScript">JavaScript</router-link>
                    <router-link to="/tag/name=promise">Promise</router-link>
                    <router-link to="/tag/name=mysql">MySQL</router-link>
                    <router-link to="/tag/name=nginx">Nginx</router-link>
                </div>
            </div>
            <!-- end tag cloud widget -->

            <!-- start widget -->
            <!-- end widget -->
        </aside>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>
<style scoped>

</style>
