<script>
    import NoteCard from "$lib/dashboard/NoteCard.svelte";
    import NoteDetails from "$lib/dashboard/NoteDetails.svelte";
    import { page } from '$app/stores';
    import { currentUser } from '$lib/store/currentUser';
    import { errorToast } from '$lib/toastify';
    import { goto } from "$app/navigation";

    let token = $currentUser?.token;
    let currentNote;
    let redirect = 0;

    let allNotes = [];

    currentUser.subscribe(newUser=>{
        token = newUser?.token;
    })

    function updateCurrent(note){
        console.log(note);
        currentNote = note;
    }

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
            if(content.error.code == 401 ){
                // goto("/signin");
                redirect = 1;
            }
            return;
        }
		else{
            allNotes = content;
            currentNote = allNotes[0];
			console.log(content);
            return content
		} 
	}

    if(typeof window !== 'undefined' && redirect === 1){
        goto("/signin");
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
                    <p class="font-primary font-semibold text-black text-sm" on:click={()=>{goto("/dashboard/notes/new")}}>Add new note</p>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                {#each allNotes as note} 
                <div on:click={()=>{updateCurrent(note)}}>
                <NoteCard  note={note} />
                </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="col-span-8 px-6 py-4 bg-white full-screen overflow-y-auto pr-4">
        <NoteDetails bind:note={currentNote} />
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