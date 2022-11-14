import { ref, inject } from 'vue'
import { useRouter } from "vue-router";

export default function usePosts(){
    const router = useRouter()
    const posts = ref({});
    const post = ref({});
    const validationErrors = ref({})
    const isLoading = ref(false);
    const swal = inject('$swal')

    const getPosts = async (page = 1,
                            search_category = '',
                            search_id = '',
                            search_title = '',
                            search_content = '',
                            search_global = '',
                            order_column = 'created_at',
                            order_direction = 'desc'
    ) => {
        await axios.get(`/api/posts?page=${page}
                            &search_category=${search_category}
                            &search_id=${search_id}
                            &search_title=${search_title}
                            &search_content=${search_content}
                            &search_global=${search_global}
                            &order_column=${order_column}
                            &order_direction=${order_direction}`)
            .then(({data}) => posts.value = data)
            .catch(error => console.log(error))
    }

    const getPost = async (id)=>{
        await axios.get(`/api/posts/${id}`)
            .then(({data}) => post.value = data.data)
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
                swal({
                    'icon':'success',
                    'title':'Post Saved Successfully'
                })
            })
            .catch(error => {
                if (error.response?.data){
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(()=> isLoading.value = false )
    }

    const updatePost = async (post)=>{
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {}

        let serializedPost = new FormData();
        for (const item in post) {
            if (post.hasOwnProperty(item)){
                serializedPost.append(item, post[item])
            }
        }
        serializedPost.append('_method', 'put')
        axios.post(`/api/posts/${post.id}`, serializedPost)
            .then(response => {
                posts.value = response.data
                router.push({name:'posts.index'})
                swal({
                    'icon':'success',
                    'title':'Post Updated Successfully'
                })
            })
            .catch(error => {
                if (error.response?.data){
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(()=> isLoading.value = false )
    }

    const deletePost = async (post)=>{

        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/posts/${post.id}`)
                    .then(response => {
                        router.push({name:'posts.index'})
                        swal({
                            'icon':'success',
                            'title':'Post Deleted Successfully'
                        })
                    })
                    .catch(error => {
                        if (error.response?.data){
                            swal({
                                'icon':'error',
                                'title':'something went wrong'
                            })
                        }
                    })
            }
        })
    }


    return {posts, post, getPost, getPosts, storePost, updatePost, validationErrors, isLoading, deletePost}
}
