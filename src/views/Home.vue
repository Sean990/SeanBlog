<template>
  <section class="content-wrap">
    <div class="container">
      <div class="row">
        <main class="col-md-8 main-content">
          <article id="1" class="post">
            <div class="post-head">
              <h1 class="post-title"><router-link to="/Article/id=1">前端技巧分享</router-link></h1>
              <section class="post-meta">
                <span class="author">作者：<router-link to="/About">Sean</router-link></span> •
                <time class="post-date" datetime="2018年8月4日星期四凌晨3点41分" title="2018年8月4日星期四凌晨3点41分">2018年8月4日</time>
              </section>
            </div>
            <div class="post-content">
              <p>前端这几年，没有大的成就，就入门期间积累了不少技巧与心得，跟大家分享一下，不一定都适合每个人，毕竟人与人的教育背景与成长环境心理活动都有差别，但就别人的心得再结合自己的特点，然后探索适合自己的学习之路是比较好的。学习没有捷径，但学习是有技巧与方法。</p>
            </div>
            <div class="post-permalink">
              <router-link to="/Article/id=1" class="btn btn-default">阅读全文</router-link>
            </div>

            <footer class="post-footer clearfix">
              <div class="pull-left tag-list">
                <i class="fa fa-tags"></i>
                <router-link to="/tag/name=CSS">CSS</router-link>, <router-link to="/tag/name=JavaScript">JavaScript</router-link>
              </div>
              <div class="pull-right share">
              </div>
            </footer>
          </article>


          <nav class="pagination" role="navigation">
<!--              <router-link class="older-posts" to="/page/1/"><i class="fa fa-angle-left"></i></router-link>-->
            <span class="page-number">第 1 页 ⁄ 共 1 页</span>
<!--            <router-link class="older-posts" to="/page/2/"><i class="fa fa-angle-right"></i></router-link>-->
          </nav>
        </main>
        <Sidebar></Sidebar>
      </div>
    </div>
  </section>
</template>

<script>
  import Sidebar from "@/components/Sidebar"
  export default {
    name: "Home",
    data() {
      return {}
    },
    components: {
      Sidebar: Sidebar
    },
    created() {
      this.$axios({
        url: '/Index'
      })
    }
  }
</script>

<style scoped>

</style>
