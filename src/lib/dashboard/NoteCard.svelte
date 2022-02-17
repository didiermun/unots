<script>
        export let note;
</script>
<div class="px-3 py-5 bg-gray-50 flex flex-col cursor-pointer rounded-lg">
        <p class="font-secondary uppercase font-semibold text-gray-300 text-xs">{note.date}</p>
        <p class="font-primary font-semibold text-gray-500 text-sm">{note.title}</p>
        <p class="font-secondary text-xs">{note.content.length < 120 ? note.content : note.content.substring(0, 120)+"..."}</p>
        <div class="flex flex-wrap gap-2 font-secondary">
                <span class="rounded bg-gray-300 px-2.5 py-1 text-black text-xs">Design</span>
                <span class="rounded bg-gray-300 px-2.5 py-1 text-black text-xs">Productivity</span>
                <span class="rounded bg-gray-300 px-2.5 py-1 text-black text-xs">Training</span>
        </div>
</div>