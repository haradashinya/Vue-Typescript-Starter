import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello.vue';
Vue.use(Router);
var router = new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
    ]
});
export default router;
//# sourceMappingURL=index.js.map