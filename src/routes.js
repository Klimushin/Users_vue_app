// default
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404"
import Users from "@/pages/Users";
import Product from "@/pages/Users";

// Routing
export default new VueRouter({
    mode: 'history', //если нужно убрать # из линка
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})
