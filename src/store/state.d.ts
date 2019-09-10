export interface userMsg {
    userName: string,
    token: string,
    avatar: string,
    userId: string
}

export interface routerMsg {
    from: string,
    to: string,
    query: {},
    instance: Array<any>,
}

export interface State {
    currRouter: routerMsg,
    userId: string | null,
    token: string | null,
    userName: string | null,
    userAvatar: string | null,
    isLoading: boolean | null,
    loadingMsg: string | null,
}
