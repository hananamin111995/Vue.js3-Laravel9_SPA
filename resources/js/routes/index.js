import { createRouter, createWebHashHistory } from "vue-router";
import PostsIndex from '../components/Posts/Index.vue'
import PostCreate from '../components/Posts/create.vue'
import PostEdit from '../components/Posts/edit.vue'

const routes = [
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

export default createRouter({
    history:createWebHashHistory(),
    routes
});
