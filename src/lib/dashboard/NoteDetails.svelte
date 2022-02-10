<script>
// @ts-nocheck

    import Editor from 'cl-editor';
</script>
<div class="px-2 py-2">
    <div class="pb-2 border-b-2 w-full flex justify-between">
        <div class="flex gap-2 cursor-pointer">
        <p class="font-semibold font-secondary text-black">Notes</p>
        <img src="/svg/dashboard/right.svg" alt="not" class="h-4 w-4 my-1">
        <p class="font-semibold font-secondary text-black">Ideas to explore</p>
        </div>
        <div>
        <img class="w-10 h-6 cursor-pointer" src="/svg/dashboard/more.svg" alt="">
        </div>
    </div>
    <div class="flex flex-col gap-0 py-4 my-3 px-8 border-b-2 pb-4">
        <p class="font-bold text-xl text-black font-primary my-3">Ideas To Explore</p>
        <div class="flex gap-14 w-full">
            <div class="">
                <p class="text-md font-primary font-semibold text-gray-500">Created by</p>
            </div>
            <div class="bg-white px-2 flex gap-2 rounded cursor-pointer">
                <img class="w-8 h-8 rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1490769258271453184/jzkdIjWd_400x400.jpg" alt="">
                <div class="py-1 font-secondary flex gap-1">
                    <p class="font-semibold text-gray-500 ">Didier Chummy</p>
                </div>
            </div>
        </div>
        <div class="flex gap-10 w-full">
            <div class="">
                <p class="text-md font-primary font-semibold text-gray-500">Last Modified</p>
            </div>
            <div class="bg-white px-2 flex gap-2 rounded cursor-pointer">
                    <p class="font-semibold text-gray-500 font-secondary">19 April 2020, 20:34 PM</p>
            </div>
        </div>
        <div class="flex gap-24 w-full">
            <div class="">
                <p class="text-md font-primary font-semibold text-gray-500">Tags</p>
            </div>
            <div class="bg-white flex gap-2 rounded cursor-pointer px-4">
                <div class="flex flex-wrap gap-2 font-secondary">
                    <span class="rounded bg-gray-300 px-2.5 py-1 text-black text-sm">Design</span>
                    <span class="rounded bg-gray-300 px-2.5 py-1 text-black text-sm">Productivity</span>
                    <span class="rounded bg-gray-300 px-2.5 py-1 text-black text-sm">Training</span>
                    <span class="rounded bg-gray-300 px-2.5 py-1 text-black flex text-sm"><img src="/svg/dashboard/add.svg" class="h-4 w-4" alt=""> Add new Tag</span>
            </div>
            </div>
        </div>
    </div>
    <div class="editor">
        <Editor height="300px" class="px-3"/>
    </div>
</div>