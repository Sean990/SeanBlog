<template>
    <div class="alert" :class="'alert-' + status">
        <div class="close" data-dismiss="alert">&times;</div>
        <span>{{msg}}</span>
    </div>
</template>

<script>
    export default {
        name: "alert",
        props: {
            status: {
                type: String,
                default: 'success'
            },
            msg: {
                type: String,
                default: '提示'
            }
        }
    }
</script>

<style lang="scss">
    .alert{
        position: fixed;
        top: 13px;
        left: 10%;
        right: 10%;
        &.alert-success {
            box-shadow: 0 2px 10px rgba(60, 118, 61, .5), 0 2px 3px rgba(60, 118, 61, .5);
        }
        &.alert-info {
            box-shadow: 0 2px 10px rgba(49, 112, 143, .5), 0 2px 3px rgba(49, 112, 143, .5);
        }
        &.alert-warning {
            box-shadow: 0 2px 10px rgba(138, 109, 59, .5), 0 2px 3px rgba(138, 109, 59, .5);
        }
        &.alert-danger {
            box-shadow: 0 2px 10px rgba(169, 68, 66, .5), 0 2px 3px rgba(169, 68, 66, .5);
        }
    }
</style>
