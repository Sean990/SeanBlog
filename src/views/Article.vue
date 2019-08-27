<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">

                <main class="col-md-8 main-content">
                    <article class="post">
                        <header class="post-head">
                            <h1 class="post-title">前端技巧分享</h1>
                            <section class="post-meta">
                                <span class="author">作者：<router-link to="/Author/">Sean</router-link></span> •
                                <time class="post-date" datetime="2018年8月4日星期四凌晨3点41分" title="2018年8月4日星期四凌晨3点41分">2018年8月4日</time>
                            </section>
                        </header>
                        <section class="featured-media">
                            <img src="../../public/img/bg.png" alt="banner图片">
                        </section>
                        <section class="post-content">
                            <p>前端这几年，没有大的成就，就入门期间积累了不少技巧与心得，跟大家分享一下，不一定都适合每个人，毕竟人与人的教育背景与成长环境心理活动都有差别，但就别人的心得再结合自己的特点，然后探索适合自己的学习之路是比较好的。学习没有捷径，但学习是有技巧与方法。</p>
                            <h2>一，css入门篇：</h2>
                            <p>推荐书籍：css哪些事儿，精通css。</p>
                            <p>理由：css那些事儿，他是一本介绍css基础类的书，是入门的经典读物。</p>
                            <p>系统的介绍了css的选择符，伪类，工作环境，盒模型，两列，三列自适应布局。文字样式，图片处理，列表，表单，还有选项卡，相册，导航，新闻列表等其它大部分的实践。</p>
                            <p>精通css，这书已经出到第二版了，相比第一版，第二版的大部分目录结构保持不变，内容变得更丰满了。此书从一另一个视角介绍了css的博大精深。 </p>
                            <h2>二，js入门篇：</h2>
                            <p>1, 建议阅读“javascript高级程序设计”第三版电子版。</p>
                            <p>2, 建议欣赏，妙味及智能社视频资料。 </p>
                            <p>敲出来的代码，思路不清晰时，可以在firebug,chrome里边打个断点跟一下，理理思路，理解代码的逻辑，这样影响才会深刻。初学者没办法都是这样，也只能这样。但是初期可能稍为慢一点，但一直不会这么慢，也不</p>
                            <p>会想象的那么长，因为随着基本概念的掌握，编码技巧的熟悉，开发工具的熟练，消化视频的速度会越来越快。</p>
                            <p>3. 等这些消化之后，阅读其它js书籍建议如下：</p>
                            <p>js dom编程艺术(2 version)->js高级程序设计 (3 version)-> js dom高级程序设计 -> js 语言精粹 -> 精通js -> 编写可维护的js -> 高性能js -> js面向对象编程指南  -> js模式 -> js权威指南(6 version) -> js语言精髓与编程实践</p>
                            <p>js dom编程艺术 : 他只是截取了js中的部分概念进行了介绍，并不完整或深入。</p>
                            <p>js高级程序设计 : 经典的js基础书，之所为经典是因为系统完善的介绍了js的历史，基础及预测了当下的流行趋势。与犀牛比更测重于实践结合</p>
                            <p>js dom高级程序设计 : 主要讲如何去写一个框架或库。</p>
                            <p>js 语言精粹：json作者，道格拉斯写的，主要解析js语言本质或内涵。</p>
                            <p>精通js：jquery作者写的，浅浅的解析了jquery一些方法的实现，注意是很浅。</p>
                            <p>编写可维护的js，高性能js：这两本是高程作者尼古拉斯的，出版日期在高程后，深度可想而知。</p>
                            <p>js面向对象编程指南：主要讲面向对象的一些东西。</p>
                            <p>js模式： -> js权威指南(6 version)</p>
                            <p>js模式，这两本是淘宝团队翻译的，模式主要一半讲模式一半讲基础。</p>
                            <p>js权威指南(6 version)，经典犀牛，一半讲基础，一讲是参考。</p>
                            <h2>4. 编辑器推荐：</h2>
                            <p>a.新手： sublime-text, <a href="http://github.com/jikeytang/sublime-text">http://github.com/jikeytang/sublime-text</a></p>
                            <p>b.熟手： webstorm: <a href="http://note.youdao.com/share/?id=2d7ff03aeca64808fdc0f394ffb520bf&type=notebook">http://note.youdao.com/share/?id=2d7ff03aeca64808fdc0f394ffb520bf&type=notebook</a></p>
                            <p>推荐这两个的原因在于，有个技术叫emmet, http://docs.emmet.io，而这两个对他的支持是：</p>
                            <p>sublime text 是所有编辑器里边支持emmet比较好的的唯一一款。</p>
                            <p>webstorm(jetbrains系列产品，intellij idea, phpstorm, pycharm)是所有编辑器里边唯一内置emmet的一款，并且把emmet精神在往前推了一步的一款。</p>
                            <p>c. 其它：editplus, notepad++,vim.</p>
                            <p>准备多款的原因在于，没有最好的编辑器，只有最合适的，每个下面都有一款特色功能终究会吸引你。</p>
                        </section>
                        <footer class="post-footer clearfix"></footer>
                    </article>

                    <div class="prev-next-wrap clearfix">
                        <router-link class="btn btn-default" to="/Article">没有下一篇<i class="fa fa-angle-right fa-fw"></i></router-link>
                    </div>
                </main>
                <Sidebar></Sidebar>

            </div>
        </div>
    </section>
</template>

<script>
    import Sidebar from "@/components/Sidebar"

    export default {
        name: "Article",
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
