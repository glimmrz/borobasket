<script>
	export let src;
	export let alt;
	export let handleAction;
</script>

<img {src} {alt} on:click={handleAction} />

<style>
	img {
		max-width: 30px;
		max-height: 30px;
		/* height: 100%;
		width: 100%; */
		object-fit: contain;
		cursor: pointer;
	}

	@media (min-width: 640px) {
		img {
			max-width: 32px;
			max-height: 32px;
		}
	}
</style>
