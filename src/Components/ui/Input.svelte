<script>
	export let full;
	export let border;
</script>

<input
	type="text"
	placeholder="Search for products"
	required
	class="{full ? 'full' : ''} {border ? 'border' : ''}"
/>

<style>
	input {
		padding: var(--gap);
		border: none;
		outline: none;
		border-radius: var(--radius);
		font-size: var(--font-regular);
	}

	.full {
		width: 100%;
	}
</style>
