<script>
	export let item;
</script>

<div class="category" style="background-color: {item.color};">
	<img src={item.image} alt="" />
	<h6>{item.label}</h6>
</div>

<style>
	.category {
		height: 135px;
		min-width: 185px;
		border-radius: var(--radius);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--gap);
	}

	img {
		height: 64px;
		width: 64px;
	}

	h6 {
		text-align: center;
		font-size: var(--font-regular);
		text-transform: capitalize;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
