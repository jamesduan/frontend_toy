import Vue from 'vue'
import App from './App'
// import VueRouter from './router/index'
import VueResource from 'vue-resource'

var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
      document.body.className +='ui-ios';
       }
     else if(isAndroid){
      document.body.className +='ui-android';
       }