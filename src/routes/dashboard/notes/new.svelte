<script>
    import NoteCard from "$lib/dashboard/NoteCard.svelte";
    import { page } from '$app/stores';
    let params = $page.url.searchParams.get('id');
    import { currentUser } from '$lib/store/currentUser';
    import { errorToast } from '$lib/toastify';
    import NewNote from "$lib/dashboard/NewNote.svelte";

    let token = $currentUser?.token;

let allNotes = [];

currentUser.subscribe(newUser=>{
    token = newUser?.token;
})

async function getNotes() {
    const res = await fetch(`https://unots.herokuapp.com/api/notes`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});
    const content = await res.json();
    if(content.error){
        errorToast(content.error.details);
        return;
    }
    else{
        allNotes = content;
        console.log(content);
        return content
    } 
}

let notes = getNotes();

</script>

<div class="py-4 px-2 grid grid-cols-10 bg-white">
    <div class="col-span-2 full-screen overflow-y-auto pr-4 border-r-2">
        <div class="flex flex-col gap-6">
            <h1 class="font-primary text-xl font-bold text-black">My Notes</h1>
            <div class="px-3 py-2 bg-gray-100 flex cursor-pointer rounded-lg">
                <div class="flex gap-3">
                    <img src="/svg/dashboard/add.svg" alt="">
                    <p class="font-primary font-semibold text-black text-sm">Add new note</p>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                {#each allNotes as note} 
                <NoteCard note={note} />
                {/each}
            </div>
        </div>
    </div>
    <div class="col-span-8 px-6 py-4 bg-white full-screen overflow-y-auto pr-4">
        <NewNote />
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