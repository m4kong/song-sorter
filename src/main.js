import Vue from "vue";
import Vuetify, { VApp, VDataTable, VCard, VAvatar } from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.use(Vuetify, {
  components: {
    VApp,
    VDataTable,
    VCard,
    VAvatar
  },
  theme: {
    primary: "#ffe560"
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
