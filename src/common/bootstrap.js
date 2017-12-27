import Vue from 'vue';
import App from './App';
export default function (props) {
    return new Vue({
        el: '#app',
        render(createElement) {
            return createElement('App');
        },
        components: { App },
        ...props,
        mounted() {
            log('App loaded, spend', +new Date() - window.appStartAt, 'ms');
        }
    });
}
