<script lang="ts">
	import '../app.css';
	import { ToastContainer, FlatToast }  from "svelte-toasts";
	import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<slot />
<ToastContainer let:data={data}>
    <FlatToast {data}  />
</ToastContainer>
<SvelteToast/>
