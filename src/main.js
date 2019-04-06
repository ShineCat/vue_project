// console.log("ok")
import Vue from "vue";
import App from './App.vue'
import { create } from "domain";
// 全局引入mint-ui
// import MintUI from 'mint-ui'
// import "mint-ui/lib/style.css";
// Vue.use(MintUI)

// 按需引入
// import { Button } from "mint-ui";
// Vue.component(Button.name, Button);

import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

// 导入mui
import './lib/mui/css/mui.css'
const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)
    }
})