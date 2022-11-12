<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\postResource;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('category')
                    ->when(request('category'), function ($q){
                        $q->where('category_id', request('category'));
                    })
                    ->paginate(1);
        return PostResource::collection($posts);
    }
}
