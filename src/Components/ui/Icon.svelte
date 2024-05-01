<script>
	export let src;
	export let alt;
</script>

<img {src} {alt} />

<style>
	img {
		width: 30px;
		height: 30px;
		object-fit: contain;
	}

	@media (min-width: 640px) {
		img {
			width: 32px;
			height: 32px;
		}
	}
</style>
