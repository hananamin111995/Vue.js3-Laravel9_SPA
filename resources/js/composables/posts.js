import { ref } from 'vue'

export default function usePosts(){
    const posts = ref({});
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
    return {posts, getPosts}
}
