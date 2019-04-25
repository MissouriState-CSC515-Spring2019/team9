import Vue from 'vue/dist/vue.esm.js';
window.Vue=Vue;
const app = new Vue({
    el: '#app',
    data: {
        start: "Hello",
        end: " There"
    }
});
const app2 = new Vue({
    el: '#app2',
    data: {
        start: "Hello there"
    }
});