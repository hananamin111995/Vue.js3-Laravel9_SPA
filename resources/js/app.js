import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './layouts/App.vue'
import router from './routes'
import { TailwindPagination } from 'laravel-vue-pagination';

const app = createApp(App)
app.use(router)
app.component('Pagination', TailwindPagination)
app.mount("#app")
