<template>
    <form @submit.prevent="storePost(post)">
        <div style="width: 200px;">
            <button @click="!scan"  class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded disabled:opacity-75 disabled:cursor-not-allowed" >Scan</button>
            <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded" ></StreamBarcodeReader>
        </div>
        <!-- Title -->
<!--        <div>-->
<!--            <label for="post-title" class="block font-medium text-sm text-gray-700">-->
<!--                Title-->
<!--            </label>-->
<!--            <input id="post-title" type="text" v-model="post.title"-->
<!--                   class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">-->
<!--            <div>-->
<!--            </div>-->
<!--            <div class="text-red-600 mt-1">-->
<!--                <div v-for="message in validationErrors?.title">-->
<!--                    {{ message }}-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <!-- Content -->
<!--        <div class="mt-4">-->
<!--            <label for="post-content" class="block font-medium text-sm text-gray-700">-->
<!--                Content-->
<!--            </label>-->
<!--            <textarea id="post-content" v-model="post.content"-->
<!--                      class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>-->
<!--            <div class="text-red-600 mt-1">-->
<!--                <div v-for="message in validationErrors?.content">-->
<!--                    {{ message }}-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <!-- Category -->
<!--        <div class="mt-4">-->
<!--            <label for="post-category" class="block font-medium text-sm text-gray-700">-->
<!--                Category-->
<!--            </label>-->
<!--            <select id="post-category" v-model="post.category_id"-->
<!--                    class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">-->
<!--                <option value="" selected>&#45;&#45; Choose category &#45;&#45;</option>-->
<!--                <option v-for="category in categories" :value="category.id">-->
<!--                    {{ category.name }}-->
<!--                </option>-->
<!--            </select>-->
<!--            <div class="text-red-600 mt-1">-->
<!--                <div v-for="message in validationErrors?.category_id">-->
<!--                    {{ message }}-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <!-- Thumbnail -->
<!--        <div class="mt-4">-->
<!--            <label for="thumbnail" class="block font-medium text-sm text-gray-700">-->
<!--                Thumbnail-->
<!--            </label>-->
<!--            <input @change="post.thumbnail = $event.target.files[0]" type="file" id="thumbnail" />-->
<!--            <div class="text-red-600 mt-1">-->
<!--                <div v-for="message in validationErrors?.thumbnail">-->
<!--                    {{ message }}-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->


        <!-- Buttons -->
<!--        <div class="mt-4">-->
<!--            <button :disabled="isLoading" class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded disabled:opacity-75 disabled:cursor-not-allowed">-->
<!--                <div v-show="isLoading" class="inline-block animate-spin w-4 h-4 mr-2 border-t-2 border-t-white border-r-2 border-r-white border-b-2 border-b-white border-l-2 border-l-blue-600 rounded-full"></div>-->
<!--                <span v-if="isLoading">Processing...</span>-->
<!--                <span v-else>Save</span>-->
<!--            </button>-->
<!--        </div>-->
    </form>
</template>


<script >
import useCategories from '../../composables/categories';
import usePosts from "../../composables/posts";
import {watch, onMounted, ref, reactive} from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    components:{
        StreamBarcodeReader
    },
    data(){
        return{
          scan:false
        }
    },
    methods:{
        onDecode (result) {
            console.log(result)
        } ,
        onLoaded (result) {
            console.log('hiiiiiiiiiiiiiiiiiiiiiiii')
        }
    }
    // setup() {
    //     const {categories, getCategories} = useCategories();
    //     const {storePost, validationErrors, isLoading} = usePosts();
    //     const post = reactive( {
    //         title:'',
    //         content:'',
    //         category_id:'',
    //         thumbnail:'',
    //         readerSize:{width: 640, height: 480},
    //         detecteds : []
    //     })
    //
    //     const logIt = (data)=>{
    //         console.log('detected', data)
    //     }
    //     onMounted( ()=> getCategories() ) ;
    //
    //     return {categories, storePost, post, validationErrors, isLoading, logIt}
    // }
}
</script>


<style scoped>

</style>
