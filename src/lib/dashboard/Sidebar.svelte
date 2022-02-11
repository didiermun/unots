<script>
import { currentUser } from "$lib/store/currentUser";
import {goto} from '$app/navigation'
import { page } from '$app/stores';


    let user;

    currentUser.subscribe(newUser=>{
        user = newUser;
    })

let url = $page.url.pathname;
page.subscribe(newPage=>{
    url = newPage.url.pathname;
})
console.log(url);
</script>

<div class="w-full bg-gray-50 flex flex-col justify-between h-full px-4 py-3 pt-5">
    <div>
    <div class="flex flex-col gap-6 mb-10">
        <div class="bg-white py-2 px-2 flex gap-2 rounded cursor-pointer">
            <img class="w-10 h-10 rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1490769258271453184/jzkdIjWd_400x400.jpg" alt="">
            <div class="py-2 font-secondary flex gap-1">
                <p class="font-semibold text-black text-md">{user?.firstName.concat(user?.lastName).length < 15 ? user?.firstName+' '+user?.lastName : user?.firstName}</p>
                <img src="/svg/dashboard/drop.svg" class="py-1" alt="">
            </div>
        </div>
        <div class="py-3 px-0 flex gap-2 rounded cursor-pointer">
            <div class="container flex mx-auto">
                <div class="flex bg-white rounded">
                    <button class="flex items-center justify-center px-4">
                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                            </path>
                        </svg>
                        
                    </button>
                    <input type="text" class="font-secondary px-4 py-4 w-full focus:outline-none text-md" placeholder="Search...">
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <div class={`px-3 py-2 flex cursor-pointer ${url == "/dashboard/notes" ? "bg-white" :""}`} on:click={()=>{goto("/dashboard/notes")}}>
            <div class="flex gap-3">
                <img src="/svg/dashboard/notes.svg" alt="">
                <p class="text-md font-primary font-semibold text-black">Notes</p>
            </div>
            <div class="px-3">
                <img src="/svg/dashboard/more.svg" alt="">                 
            </div>
        </div>
        <div class={`px-3 py-2 flex cursor-pointer ${url == "/dashboard/todos" ? "bg-white" :""}`} on:click={()=>{goto("/dashboard/todos")}}>
            <div class="flex gap-3">
                <img src="/svg/dashboard/todos.svg" alt="">   
                    
                <p class="text-md font-primary font-semibold text-black">Todos</p>
            </div>
            <div class="px-3">
                <img src="/svg/dashboard/more.svg" alt="">                      
            </div>
        </div>
        <div class={`px-3 py-2 flex cursor-pointer ${url == "/dashboard/projects" ? "bg-white" :""}`} on:click={()=>{goto("/dashboard/projects")}}>
            <div class="flex gap-3">
                <img src="/svg/dashboard/project.svg" alt="">
                <p class="text-md font-primary font-semibold text-black">Projects</p>
            </div>
            <div class="px-3">
                <img src="/svg/dashboard/more.svg" alt="">                 
            </div>
        </div>
        <div class={`px-3 py-2 flex cursor-pointer ${url == "/dashboard/journals" ? "bg-white" :""}`} on:click={()=>{goto("/dashboard/journals")}}>
            <div class="flex gap-3">
                <img src="/svg/dashboard/edit.svg" alt="">   
                    
                <p class="text-md font-primary font-semibold text-black">Journals</p>
            </div>
            <div class="px-3">
                <img src="/svg/dashboard/more.svg" alt="">                      
            </div>
        </div>
        <div class={`px-3 py-2 flex cursor-pointer ${url == "/dashboard/list" ? "bg-white" :""}`} on:click={()=>{goto("/dashboard/list")}}>
            <div class="flex gap-3">
                <img src="/svg/dashboard/list.svg" alt="">
                <p class="text-md font-primary font-semibold text-black">Reading List</p>
            </div>
            <div class="px-3">
                <img src="/svg/dashboard/more.svg" alt="">                 
            </div>
        </div>
    </div>
</div>
    <div class="flex flex-col gap-3 mb-6">
        <div class={`px-3 py-2 flex cursor-pointer ${url == "/dashboard/new" ? "bg-white" :""}`} on:click={()=>{goto("/dashboard/new")}}>
            <div class="flex gap-3">
                <img src="/svg/dashboard/add.svg" alt="">
                <p class="text-md font-primary font-semibold text-black">Add New folder</p>
            </div>
        </div>
        <div class={`px-3 py-2 flex cursor-pointer ${url == "/dashboard/profile" ? "bg-white" :""}`}>
            <div class="flex gap-3">
                <img src="/svg/dashboard/settings.svg" alt="">
                <p class="text-md font-primary font-semibold text-black" on:click={()=>{goto("/dashboard/profile")}}>Settings</p>
            </div>
        </div>
    </div>
</div>