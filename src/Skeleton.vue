<template>
    <div class="skeleton-list">
        <header class="main-header">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12"><h1>&nbsp;</h1></div>
                </div>
            </div>
        </header>

        <nav class="main-navigation">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12" style="padding: 0">
                        <div class="navbar-header"></div>
                        <div class="collapse navbar-collapse" id="main-menu"></div>
                    </div>
                </div>
            </div>
        </nav>

        <section class="content-wrap">
            <div class="container">
                <div class="row">
                    <main class="col-md-8 main-content">
                        <article class="post">
                            <div class="post-head">
                                <h1 class="post-title"><div class="skeleton-row"></div></h1>
                                <section class="post-meta">
                                    <div class="skeleton-row"></div>
                                </section>
                            </div>
                            <div class="post-content">
                                <div class="skeleton-row"></div>
                                <div class="skeleton-row"></div>
                                <div class="skeleton-row"></div>
                                <div class="skeleton-row"></div>
                                <div class="skeleton-row"></div>
                                <div class="skeleton-row"></div>
                            </div>
                        </article>
                    </main>
                    <aside class="col-md-4 sidebar">
                        <div class="widget">
                            <h4><div class="skeleton-row"></div></h4>
                            <div class="content community">
                                <div class="skeleton-row"></div>
                                <div class="skeleton-row"></div>
                                <div class="skeleton-row"></div>
                            </div>
                        </div>
                        <div class="widget">
                            <h4><div class="skeleton-row"></div></h4>
                            <div class="btn btn-block skeleton-row"></div>
                            <div class="btn btn-block skeleton-row"></div>
                            <div class="btn btn-block skeleton-row"></div>
                        </div>
                        <div class="widget">
                            <h4><div class="skeleton-row"></div></h4>
                            <div class="content tag-cloud">
                                <span class="skeleton-row col-sm-5"></span>
                                <span class="skeleton-row col-sm-2"></span>
                                <span class="skeleton-row col-sm-3"></span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <footer class="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="widget">
                            <h4>&nbsp;</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">&nbsp;</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skeleton"
    }
</script>

<style scoped>
    .skeleton-row{margin-bottom: .8rem;height: 1.2rem;background-color: var(--main-color)}
    .skeleton-avatar{border-radius: 50%;background-color: var(--main-color)}

    .skeleton-list{overflow: hidden;--main-color: #f3f3f3;}
    .skeleton-list .skeleton-row{border: none !important;margin-bottom: 16px;background: linear-gradient(90deg,#f9f9f9,#edeff1,#f9f9f9);background-size: 480px 480px;animation: skeleton-stripes .6s linear infinite}
    .skeleton-list .post-title .skeleton-row{margin: 0 auto;height: 3rem;width: 30%}
    .skeleton-list .widget h4 .skeleton-row{height: 2rem;width: 30%}
    .skeleton-list .post-meta .skeleton-row{margin: 0 auto;width: 20%}
    .skeleton-list .post-content .skeleton-row:last-of-type{width: 60%}
    .widget .tag-cloud{overflow: hidden;}
    .widget .tag-cloud .skeleton-row{padding:2px 7px;line-height:1.5em;display:inline-block;margin:0 7px 7px 0;}
    @-moz-keyframes skeleton-stripes{
        0%{background-position: 0 0}
        to{background-position: 480px 0}
    }
    @-webkit-keyframes skeleton-stripes{
        0%{background-position: 0 0}
        to{background-position: 480px 0}
    }
    @-o-keyframes skeleton-stripes{
        0%{background-position: 0 0}
        to{background-position: 480px 0}
    }
    @keyframes skeleton-stripes{
        0%{background-position: 0 0}
        to{background-position: 480px 0}
    }
</style>
