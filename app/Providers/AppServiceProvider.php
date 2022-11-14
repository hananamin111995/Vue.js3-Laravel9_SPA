<?php

namespace App\Providers;

use App\Models\Permission;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        foreach (Permission::pluck('name') as $permission){
            Gate::define($permission, function ($user)use($permission){
                return $user->roles()->whereHas('permissions', function ($q) use($permission){
                    $q->where('name', $permission);
                })->exists();
            });
        }

    }
}
