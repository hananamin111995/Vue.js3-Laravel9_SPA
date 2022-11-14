import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './layouts/App.vue'
import router from './routes'
import { TailwindPagination } from 'laravel-vue-pagination';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.component('Pagination', TailwindPagination)
app.mount("#app")
