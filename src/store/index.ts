import Vue from 'vue';
import Vuex from 'vuex';
import { State, routerMsg, userMsg } from "@/store/state"

Vue.use(Vuex);


export default new Vuex.Store<State>({
  state: {
    currRouter: {
      from: '',
      to: '',
      query: {},
      instance: [],
    },
    userId: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
    userName: localStorage.getItem('userName'),
    userAvatar: localStorage.getItem('userAvatar'),
    isLoading: false,
    loadingMsg: '数据加载中',
  },
  mutations: {
    // 控制loading显示隐藏
    LoadingStatus(state: State, payload) {
      state.isLoading = payload.isLoading;
      state.loadingMsg = payload.loadingMsg
    },
    LOGOUT (state) {
      state.token = ''
      state.userId = ''
      state.userName = ''
      state.userAvatar = ''
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('userName')
      localStorage.removeItem('userAvatar')
    },
    SET_CURR_ROUTER (state: State, payload: routerMsg) {
      let currRouter = state.currRouter
      currRouter.from = payload.from
      currRouter.to = payload.to
      currRouter.query = payload.query
      currRouter.instance = payload.instance
    },
    SET_USER_INFO (state: State, usermsg: userMsg) {
      state.userName = usermsg.userName
      state.token = usermsg.token
      state.userAvatar = usermsg.avatar
      state.userId = usermsg.userId
      localStorage.setItem('token', usermsg.token)
      localStorage.setItem('userName', usermsg.userName)
      localStorage.setItem('userAvatar', usermsg.avatar)
      localStorage.setItem('userId', usermsg.userId)
    },
  },
  getters: {},
  actions: {}
});
