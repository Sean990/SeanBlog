import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currRouter: {
            from: '',
            to: '',
            query: {},
            instance: [],
        },
        isLoading: false,
        loadingMsg: '数据加载中',
    },
    mutations: {
        // 控制loading显示隐藏
        LoadingStatus(state, payload) {
            state.isLoading = payload.isLoading;
            state.loadingMsg = payload.loadingMsg
        },
        SET_CURR_ROUTER (state, payload) {
            let currRouter = state.currRouter
            currRouter.from = payload.from
            currRouter.to = payload.to
            currRouter.query = payload.query
            currRouter.instance = payload.instance
        },
    },
    getters: {},
    actions: {}
})
