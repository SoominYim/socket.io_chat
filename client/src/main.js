import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from "./plugins/vutify";
// import "./plugins";
// import bridge from "./plugins/birdge.plug.js";
// import emitterApi from "./api/emitter/emitter.api";
// import commonApi from "./api/common/common.api";

Vue.config.productionTip = false;

// Vue.use(bridge);
Vue.use(socketPlugin);
Vue.prototype.$emitterApi = emitterApi;
Vue.prototype.$commonApi = commonApi;

var vm = new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");

window.app = vm;
