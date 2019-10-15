<template>
    <div :class="{'fixed-main' : isFixed}">
        <header class="main-header" :style="{backgroundImage: 'url(' + headerBg + ')'}">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1><span class="hide">Web - </span>Sean Blog</h1>
                        <h2 class="hide">Web THAT DOESN'T HURT. CODE HAPPY &amp; ENJOY THE FRESH AIR.</h2>
                        <img :src="headerBg" alt="Web" class="hide">
                    </div>
                    <div class="col-xs-12 hidden-xs hidden-sm header-sign">Keep an eye on the future.</div>
                    <!--<router-link class="btn btn-default btn-doc" :to="'/tag/name=' + item.tag_title" v-for="(item, index) in tagLis" :key="index">{{item.tag_title}}</router-link>-->
                </div>
            </div>
        </header>

        <nav class="main-navigation" :class="{'fixed-navigation' : isFixed}">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12" style="padding: 0">
                        <div class="navbar-header">
                            <span class="nav-toggle-button" :class="{'collapsed': isShowMenu}" @click.stop="toggleMenu"
                                  data-toggle="collapse" data-target="#main-menu">
                                <span class="sr-only">Toggle navigation</span>
                                <div class="menu-bars" :class="{'is-active':isShowMenu}">
                                    <div class="line"></div>
                                    <div class="line"></div>
                                    <div class="line"></div>
                                </div>
                            </span>
                        </div>
                        <div class="collapse navbar-collapse" :class="{'in': isShowMenu}" id="main-menu">
                            <ul class="menu">
                                <li :class="{ 'nav-current': currentRoute === item.url}"
                                    role="presentation" v-for="(item, index) in navList" :key="index">
                                    <router-link :to="item.url">{{item.name}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
    import {Component, Watch, Vue} from 'vue-property-decorator';
    import { Getter, Mutation } from 'vuex-class';

    @Component
    export default class Header extends Vue {
        // data
        navList: Array<any> = [{
            url: '/',
            name: '首页'
        }, {
            url: '/Archives',
            name: '归档'
        }, {
            url: '/Exercise',
            name: '练习'
        }, {
            url: '/About',
            name: '关于'
        }];
        currentRoute: string = '/';
        headerBg: object = require('../assets/images/bg_banner.jpg');
        isShowMenu: boolean = false;
        isFixed: boolean = false;
        tagLis: Array<any> = []

        @Getter('getIsFixedValue') getIsFixed

        @Watch('$route')
        routeChange(to, from): void {
            this.currentRoute = to.path;
        }

        @Watch('getIsFixed')
        getIsFixedChanged(val) {
            this.isFixed = val
        }

        toggleMenu() {
            this.isShowMenu = !this.isShowMenu;
        }

        // 生命周期
        created () {
            this.currentRoute = this.$route.path;
            this.$axios({
                url: this.$request.TAG,
                method: 'get'
            }).then(res => {
                this.tagLis = res;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .navbar-collapse{display: block;height: 0;overflow: hidden;background: #ffffff;transition: height 300ms;will-change: auto;}
    .navbar-collapse.in{height: 40vh;overflow-y: auto}

    .menu-bars{
        transform: translate3d(0, 50%, 0);
        .line{
            width: 24px;
            height: 4px;
            background-color: #505050;
            display: block;
            margin: 4px auto;
            transition: all 0.3s ease-in-out;
            will-change: auto;
        }
        &.is-active .line:nth-child(2){
            opacity: 0;
        }
        &.is-active .line:nth-child(1){
            transform: translate3d(0, 8px, 0) rotate(45deg);
        }
        &.is-active .line:nth-child(3){
            transform: translate3d(0, -8px, 0) rotate(-45deg);
        }
    }
</style>





<!--protected render() {-->
<!--return (-->
<!--<template>-->
<!--    <header class="main-header" style={{backgroundImage: 'url(' + this.headerBg + ')'}}>-->
<!--    <div class="container">-->
<!--        <div class="row">-->
<!--            <div class="col-xs-12">-->
<!--                <h1><span class="hide">Web - </span>Sean Blog</h1>-->
<!--                <h2 class="hide">Web THAT DOESN'T HURT. CODE HAPPY &amp; ENJOY THE FRESH AIR.</h2>-->
<!--                <img src={this.headerBg} alt="Web" class="hide"/>-->
<!--            </div>-->
<!--            <div class="col-xs-12 hidden-xs hidden-sm">-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=HTML">HTML</router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=CSS">CSS</router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=JavaScript">JavaScript-->
<!--                </router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=JQuery">JQuery-->
<!--                </router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=Vue">Vue.js</router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=ES6">ES6</router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=WebPack">WebPack-->
<!--                </router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=mysql">MySQL-->
<!--                </router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=nginx">Nginx-->
<!--                </router-link>-->
<!--                <router-link className="btn btn-default btn-doc" to="/tag/name=小程序">小程序</router-link>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    </header>-->
<!--    <nav class="main-navigation">-->
<!--        <div class="container">-->
<!--            <div class="row">-->
<!--                <div class="col-sm-12" style="padding: 0">-->
<!--                    <div class="navbar-header" onClick={(e) => {-->
<!--                    e.stopPropagation();-->
<!--                    this.toggleMenu;-->
<!--                    }}>-->
<!--                    <span class={'nav-toggle-button' + {'collapsed': this.isShowMenu}}-->
<!--                    data-toggle="collapse"-->
<!--                    data-target="#main-menu">-->
<!--                    <span class="sr-only">Toggle navigation</span>-->
<!--                    {/*fa fa-bars*/}-->
<!--                    {/*<i class="fa fa-bars" />*/}-->
<!--                    <div class={'menu-bars' + {'is-active': this.isShowMenu}}>-->
<!--                    <div class="line"></div>-->
<!--                    <div class="line"></div>-->
<!--                    <div class="line"></div>-->
<!--                </div>-->
<!--                </span>-->
<!--            </div>-->
<!--            <div class={'collapse navbar-collapse' + {'in': this.isShowMenu}} id="main-menu">-->
<!--            <ul class="menu">-->
<!--                {this.navList.map((item, index) => {-->
<!--                return <li class={{'nav-current': this.currentRoute === item.url}}-->
<!--                           role="presentation" key={{index}}>-->
<!--                <router-link to="item.url">{item.name}</router-link>-->
<!--            </li>;-->
<!--                })}-->
<!--            </ul>-->
<!--        </div>-->
<!--        </div>-->
<!--        </div>-->
<!--        </div>-->
<!--    </nav>-->
<!--</template>-->
<!--);-->
<!--}-->
