<script lang="ts">
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<slot />
<ToastContainer let:data={data}>
    <FlatToast {data}  />
</ToastContainer>
<SvelteToast/>
