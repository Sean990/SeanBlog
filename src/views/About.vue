<template>
  <section class="content-wrap">
    <div class="container">
      <div class="row">

        <main class="col-md-8 main-content">
          <article class="post">
            <header class="post-head">
              <h1 class="post-title">关于</h1>
<!--              <section class="post-meta">-->
<!--                <span class="author">作者：<router-link to="/Author/">Sean</router-link></span> •-->
<!--                <time class="post-date" datetime="2019年4月28日星期日凌晨3点41分" title="2019年4月28日星期日凌晨3点41分">2019年4月28日</time>-->
<!--              </section>-->
            </header>
            <section class="featured-media">
              <img src="../../public/img/making_bg.png" alt="JavaScript">
            </section>
            <section class="post-content">
              <h2>联系</h2>
              <p>GitHub：<a href="https://github.com/Sean990" target="_blank" rel='noreferrer noopener'>@Sean990</a></p>
              <p>QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=1291955481&site=qq&menu=yes" target="_blank" rel='noreferrer noopener'>@bià bià bià~</a></p>
              <p>网易云音乐：<a href="https://music.163.com/#/user/home?id=254853579" target="_blank" rel='noreferrer noopener'>@Sean990</a></p>
              <h2>经历</h2>
              <p>2016年6月，本因再读一年，我跟两个朋友决定直接挂读，就到了广州做PHP实习生，当时真的是满心期待，事后证明，的确值得期待，来到番禺大学城，开始了程序员生涯。</p>
              <p>2017年3月，换了份工作，因为上一家公司散伙了，特别感谢能给我实习的这个机会，让我在公司学到了很多东西，这时的我已经来到了东莞，做前端开发，期间也做过PHP维护工作！</p>
            </section>
            <footer class="post-footer clearfix"></footer>
          </article>
        </main>
        <Sidebar></Sidebar>

      </div>
    </div>
  </section>
</template>

<script>
  import Sidebar from "@/components/Sidebar"

  export default {
    name: "About",
    data() {
      return {}
    },
    components: {
      Sidebar: Sidebar
    },
  }
</script>

<style scoped>

</style>
