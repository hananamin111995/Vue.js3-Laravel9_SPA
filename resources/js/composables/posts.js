import { ref } from 'vue'
import { useRouter } from "vue-router";

export default function usePosts(){
    const router = useRouter()
    const posts = ref({});
    const validationErrors = ref({})

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
        axios.post('/api/posts')
            .then(response => {
                posts.value = response.data
                router.push('posts.index')
            })
            .catch(error => {
                if (error.response?.data){
                    validationErrors.value = error.response.data.errors
                }
            })
    }


    return {posts, getPosts, storePost, validationErrors}
}
