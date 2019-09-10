<template>
    <div class="exception">
        <div class="imgBlock">
            <div class="imgEle" :style="{backgroundImage: `url(${config[type].img})`}">
            </div>
        </div>
        <div class="content">
            <h1>{{ config[type].title }}</h1>
            <div class="desc">{{ config[type].desc }}</div>
            <div class="actions">
                <button class="btn btn-default" type="button" @click="handleToHome">返回首页</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    const types: object = {
        403: {
            img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
            title: '403',
            desc: '抱歉，你无权访问该页面'
        },
        404: {
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
            title: '404',
            desc: '抱歉，你访问的页面不存在或仍在开发中'
        },
        500: {
            img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
            title: '500',
            desc: '抱歉，服务器出错了'
        }
    }
    @Component
    export default class ExceptionPage extends Vue{
        @Prop({default: '404'})
        type: String | undefined

        config: object = types

        handleToHome () {
            this.$router.push({ name: '/' })
        }
    }
</script>
<style lang="scss">

    .exception {
        display: flex;
        align-items: center;
        height: 80%;
        min-height: 500px;

        .imgBlock {
            flex: 0 0 62.5%;
            width: 62.5%;
            padding-right: 152px;
            zoom: 1;
            &::before,
            &::after {
                content: ' ';
                display: table;
            }
            &::after {
                clear: both;
                height: 0;
                font-size: 0;
                visibility: hidden;
            }
        }

        .imgEle {
            float: right;
            width: 100%;
            max-width: 430px;
            height: 360px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: contain;
        }

        .content {
            flex: auto;

            h1 {
                margin-bottom: 24px;
                color: #434e59;
                font-weight: 600;
                font-size: 72px;
                line-height: 72px;
            }

            .desc {
                margin-bottom: 16px;
                color: rgba(0, 0, 0, .45);
                font-size: 20px;
                line-height: 28px;
            }

            .actions {
                button:not(:last-child) {
                    margin-right: 8px;
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .exception {
            .imgBlock {
                padding-right: 88px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .exception {
            display: block;
            text-align: center;
            .imgBlock {
                margin: 0 auto 24px;
                padding-right: 0;
            }
        }
    }

    @media screen and (max-width: 480px) {
        .exception {
            .imgBlock {
                margin-bottom: -24px;
                overflow: hidden;
            }
        }
    }
</style>
