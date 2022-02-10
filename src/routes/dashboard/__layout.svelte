<script>
    import Sidebar from "$lib/dashboard/Sidebar.svelte";
</script>
<div class="grid lg:grid-cols-12 gap-0 bg-white min-h-screen">
    <div class="col-span-2 h-full">
        <Sidebar />
    </div>
    <div class="col-span-10 bg-white px-4">
        <slot />
    </div>
</div>