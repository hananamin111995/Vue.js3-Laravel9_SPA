import { ref } from 'vue'
import { useRouter } from "vue-router";

export default function usePosts(){
    const router = useRouter()
    const posts = ref({});
    const validationErrors = ref({})
    const isLoading = ref(false);

    const getPosts = async (page = 1,
                            category = '',
                            order_column = 'created_at',
                            order_direction = 'desc'
    ) => {
        await axios.get(`/api/posts?page=${page}
                            &category=${category}
                            &order_column=${order_column}
                            &order_direction=${order_direction}`)
            .then(({data}) => posts.value = data)
            .catch(error => console.log(error))
    }

    const storePost = async (post)=>{
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {}

        let serializedPost = new FormData();
        for (const item in post) {
            if (post.hasOwnProperty(item)){
                serializedPost.append(item, post[item])
            }
        }

        axios.post('/api/posts', serializedPost)
            .then(response => {
                posts.value = response.data
                router.push({name:'posts.index'})
            })
            .catch(error => {
                if (error.response?.data){
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(()=> isLoading.value = false )
    }


    return {posts, getPosts, storePost, validationErrors, isLoading}
}
