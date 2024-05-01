<script>
	import Container from '../../Components/ui/Container.svelte';
	import ProductCard from '../../Components/ui/Product-card.svelte';
	import Section from '../../Components/ui/Section.svelte';
</script>

<main>
	<Container>
		<Section sectionTitle="popular products our customers loved" sectionicon="title_popular.png">
			<div class="popular-products">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</Section>
		<Section sectionTitle="offers" sectionicon="title_offers.png">
			<div class="popular-products">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</Section>
	</Container>
</main>

<style>
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
