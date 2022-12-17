import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import router from './routes'
import { TailwindPagination } from 'laravel-vue-pagination';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {onMounted} from "vue";
import useAuth from "./composables/Auth";
import { abilitiesPlugin } from '@casl/vue';
import ability from './services/ability';
// import VueQuagga from 'vue-quaggajs';

const app = createApp({
    setup(){
        const {getUser} = useAuth()
        onMounted(getUser)
    }
})
app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true
})
app.use(router)
app.use(VueSweetalert2)
app.component('Pagination', TailwindPagination)
app.mount("#app")
