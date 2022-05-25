import "bootstrap/js/dist/base-component"
import "bootstrap/js/dist/popover"
import "bootstrap/js/dist/dropdown"
import "bootstrap/js/dist/collapse"

import {createApp} from 'vue'

/**
 * *import lib Toast
 * @see https://github.com/Maronato/vue-toastification/tree/next
 * **/

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

// import customm css
import "../sass/main.scss";

const vm = createApp(App);
const options = {};

vm.use(router);
vm.use(Toast,options);
vm.mount('#app');