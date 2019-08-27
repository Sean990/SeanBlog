<template>
  <section class="content-wrap">
    <div class="container">
      <div class="row">

        <main class="col-md-8 main-content">
          <article class="post">
            <header class="post-head">
              <h1 class="post-title">留言</h1>
            </header>
            <section class="featured-media">
              <img src="../../public/img/pic01.png" alt="回忆">
            </section>
            <section class="post-content">
              <div class="issue-box">
                <textarea class="issue-content" placeholder="说点什么吧..." maxlength="300" @input="issueInput" v-model="issue" />
                <span class="issue-number">{{issueNumber}}/300</span>
              </div>
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
    name: "Issue",
    data() {
      return {
        issue: '',
        issueNumber: 0
      }
    },
    methods: {
      issueInput(){
        this.issueNumber = this.issue.length
      }
    },

    components: {
      Sidebar: Sidebar
    },
  }
</script>

<style scoped>
  .issue-box{position: relative;border: 1px solid #ebebeb;height: 130px;}
  .issue-content{border: none;width: 100%;height: 100%;resize: none;font-size: 16px;padding: 8px 15px;}
  .issue-content::-webkit-input-placeholder{font-size: 16px;}
  .issue-number{position: absolute;bottom: 15px;right: 15px;font-size: 14px;}
</style>
