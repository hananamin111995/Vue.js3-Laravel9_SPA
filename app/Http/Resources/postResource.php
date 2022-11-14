<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class postResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category' => $this->category->name,
            'category_id' => $this->category_id,
            'title' => $this->title,
            'content' => substr($this->content, 0, 50).' ...',
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
