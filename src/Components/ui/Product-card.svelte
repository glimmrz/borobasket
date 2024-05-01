<script>
	import Button from './Button.svelte';
	import Container from './Container.svelte';
</script>

<div class="product-card">
	<Container>
		<div class="image-wrapper">
			<img src="cat.jpg" alt="" class="product-image" />
		</div>
		<div class="details">
			<a href="">
				<h3 class="title">Rok Dish Washing Liquid(Free Scotch Brite)</h3>
			</a>
			<h3 class="weight">500gm</h3>
			<span class="price-wrapepr">
				<h4 class="price">20.00</h4>
				<h3 class="discounted-price">12.00</h3>
			</span>
			<Button icon="basket.png" label="add to basket" />
		</div>
	</Container>
</div>

<style>
	.product-card {
		max-width: 300px;
		width: 100%;
		border-radius: var(--radius);
		overflow: hidden;
		border: 2px solid transparent;
	}

	.product-card:hover {
		border: 2px solid var(--blue-accent);
	}

	.image-wrapper {
		max-width: 210px;
		max-height: 210px;
	}

	.product-image {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	.details {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: calc(var(--gap) / 2);
	}

	.title {
		font-size: var(--font-regular);
		color: var(--blue);

		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		-webkit-box-orient: vertical;
	}

	.weight {
		font-size: calc(var(--font-regular) / 1.3);
	}

	.price {
		color: orange;
		text-decoration: line-through;
	}

	.discounted-price {
		font-size: var(--header);
		color: var(--blue-accent);
	}
</style>
