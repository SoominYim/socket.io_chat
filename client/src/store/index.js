import Vue from "vue";
import Vuex from "vuex";
// import SignUp from "./modules/SignUp";
// import EmitterService from "./modules/EmitterService";
// import RouteUrl from "./modules/RouteUrl";
// import Common from "./modules/Common";
// import User from "./modules/User";
// import Chat from "./modules/Chat";
// import NewBid from "./modules/NewBid";
// import CollectorService from "./modules/CollectorService";

// 새로고침시 vuex 데이터 초기화 방지

Vue.use(Vuex);

const store = new Vuex.Store({
    // modules: {
    //     SignUp: SignUp,
    //     EmitterService: EmitterService,
    //     RouteUrl: RouteUrl,
    //     Common: Common,
    //     User: User,
    //     NewBid: NewBid,
    //     CollectorService: CollectorService,
    //     Chat: Chat,
    // },
    // plugins: [
    //     createPersistedState({
    //         path: ["SignUp", "EmitterService", "RouteUrl", "Common", "User", "NewBid", "CollectorService", "Chat"],
    //     }),
    // ],
    state: {},
    getters: {},
    mutations: {},
    actions: {},
});

export default store;
