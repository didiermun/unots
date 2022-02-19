<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status: status,
                message: error.message
			}
		};
	}
</script>

<script>
	export let status;
    export let message;
</script>

<div class="flex flex-col mx-auto items-center justify-center w-screen h-screen bg-black">
    <p class="text-white font-bold text-5xl">{status}</p>
    <p class="text-white">{message}</p>
</div>