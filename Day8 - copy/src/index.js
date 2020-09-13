import $ from 'jquery';

// import './css/1.css';
import './css/2.less';
import './css/1.scss';

$(function() {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'green');
});
class Start {
    static info = '哈哈哈哈'; //static 静态属性 ，浏览器暂不支持
}
console.log(Start.info);

import Vue from 'vue';

// 导入单文件组件
import App from './components/App.vue';

const vm = new Vue({
    //.TODO: 只支持render函数,在webpack中使用render渲染；render渲染将#app容器替换掉
    el: '#app',
    render: (h) => h(App),
});