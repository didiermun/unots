<script>
    import NoteCard from "$lib/dashboard/NoteCard.svelte";
</script>

<div class="py-4 px-2 grid grid-cols-10 bg-white">
    <div class="col-span-2 full-screen overflow-y-auto">
        <div class="flex flex-col gap-6">
            <h1 class="font-primary font-bold text-black">My Notes</h1>
            <div class="px-3 py-5 bg-gray-100 flex cursor-pointer rounded-lg">
                <div class="flex gap-3">
                    <img src="/svg/dashboard/add.svg" alt="">
                    <p class="text-xl font-primary font-semibold text-black">Add new note</p>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </div>
        </div>
    </div>
    <div class="col-span-8">
        <div>Stringify</div>
    </div>
</div>

<style>
    .full-screen{
        height: calc(100vh - 36px);
    }
    .full-screen::-webkit-scrollbar {
        display: none;
    }
    
</style>