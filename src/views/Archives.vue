<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <main class="col-md-8 main-content">
                    <section id="main">
                        <section class="archives-wrap">
                            <div class="archive-year-wrap">
                                <router-link to="/Archives" class="archive-year">2019</router-link>
                            </div>
                            <div class="archives">
                                <article class="archive-article archive-type-post">
                                    <router-link class="archive-article-inner" to="/Article">
                                        <header class="archive-article-header">
                                            <div class="archive-article-date">
                                                <time datetime="2019-03-01T08:06:08.000Z" itemprop="datePublished">3月1</time>
                                            </div>
                                            <h1 itemprop="name">
                                                <div class="archive-article-title">第一篇文章</div>
                                            </h1>
                                        </header>
                                    </router-link>
                                </article>
                            </div>
                        </section>

<!--                        <nav class="pagination" role="navigation">-->
<!--                            <span class="page-number">第 1 页 ⁄ 共 9 页</span>-->
<!--                            <router-link class="older-posts" to="/page/2/"><i class="fa fa-angle-right"></i>-->
<!--                            </router-link>-->
<!--                        </nav>-->
                    </section>
                </main>
                <Sidebar></Sidebar>

            </div>
        </div>
    </section>
</template>

<script>
    import Sidebar from "@/components/Sidebar"
    export default {
        name: "Archives",
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
