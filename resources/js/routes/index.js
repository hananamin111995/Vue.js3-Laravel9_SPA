import { createRouter, createWebHistory } from "vue-router";
import PostsIndex from '../components/Posts/Index.vue'
import PostCreate from '../components/Posts/create.vue'
import PostEdit from '../components/Posts/edit.vue'
import GuestLayout from '../layouts/Guest.vue'
import AuthenticatedLayout from '../layouts/Authenticated.vue'
import Login from '../components/login/login.vue'

function auth(to, from, next){
    if (JSON.parse(localStorage.getItem('loggedIn'))){
        next();
    }
    next('/login');

}

const routes = [
    {
        path: '/',
        redirect: {name: 'login'},
        component: GuestLayout,
        children:[
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta:{
                    title:'Login'
                }
            }

        ]
    },
    {
        component: AuthenticatedLayout,
        beforeEnter: auth,
        children:[
            {
                path: '/',
                name: 'posts.index',
                component: PostsIndex,
                meta:{
                    title:'Posts'
                }
            },
            {
                path: '/posts/create',
                name: 'posts.create',
                component: PostCreate,
                meta:{
                    title:'Create Post'
                }
            },
            {
                path: '/posts/edit/:id',
                name: 'posts.edit',
                component: PostEdit,
                meta:{
                    title:'Edit Post'
                }
            }
        ]
    }
]

export default createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
});
