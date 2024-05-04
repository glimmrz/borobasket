<script>
	import { useCart } from '../../stores/useCart';
	import basket from '$lib/assets/basket.png';
	import Button from './Button.svelte';
	import Container from './Container.svelte';

	export let item;

	const handleClick = () => {
		useCart.addItem(item);
	};
</script>

<div class="product-card">
	<Container>
		<div class="image-wrapper">
			<img src={item.image} alt="" class="product-image" />
		</div>
		<div class="details">
			<a href="/">
				<h3 class="title">{item?.title}</h3>
			</a>
			<h3 class="weight">{item?.weight}gm</h3>
			<span class="price-wrapepr">
				<h4 class="price">৳ {item?.price}</h4>
				<h3 class="discounted-price">৳ {item?.discountedPrice}</h3>
			</span>
			<Button icon={basket} label="add to basket" handleAction={handleClick} />
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
		cursor: pointer;
	}

	.product-card:hover {
		border: 2px solid var(--blue-accent);
	}

	.image-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.product-image {
		height: 100%;
		width: 100%;
		object-fit: cover;

		max-height: 180px;
		max-width: 180px;
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
