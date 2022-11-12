import { ref } from 'vue'

export default function usePosts(){
    const posts = ref({});
    const getPosts = async (page = 1, category='')=>{
        await axios.get(`/api/posts?page=${page}&category=${category}`)
            .then( ({data}) => posts.value = data)
            .catch(error => console.log(error))
    }
    return {posts, getPosts}
}
