<script>
	import { categories, products } from '../../lib/static.js';
	import offer_icon from '$lib/assets/title_offers.png';
	import popular_icon from '$lib/assets/title_popular.png';
	import Container from '../../Components/ui/Container.svelte';
	import ProductCard from '../../Components/ui/Product-card.svelte';
	import Section from '../../Components/ui/Section.svelte';
	import Category from '../../Components/ui/Category.svelte';
	import Slider from '../../Components/ui/Slider.svelte';
</script>

<main>
	<Container>
		<!-- Slider -->
		<Slider />
		<!-- Categories -->
		<div class="categories">
			{#each categories as cat}
				<Category item={cat} />
			{/each}
		</div>
		<Section sectionTitle="popular products our customers loved" sectionicon={popular_icon}>
			<div class="popular-products">
				{#each products as product}
					<ProductCard item={product} />
				{/each}
			</div>
		</Section>
		<Section sectionTitle="offers" sectionicon={offer_icon}>
			<div class="popular-products">
				{#each products as product}
					<ProductCard item={product} />
				{/each}
			</div>
		</Section>
	</Container>
</main>

<style>
	.categories {
		display: flex;
		gap: var(--gap);
		overflow-x: scroll;
	}

	.popular-products {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--gap);
	}

	@media (min-width: 640px) {
		.popular-products {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 800px) {
		.popular-products {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.popular-products {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	@media (min-width: 1200px) {
		.popular-products {
			grid-template-columns: repeat(6, 1fr);
		}
	}
</style>
