<script>
	import { page } from '$app/stores';
	import { categories } from '$lib/static';
	import Section from '../../../../Components/ui/Section.svelte';
	import Container from '../../../../Components/ui/Container.svelte';
	import Category from '../../../../Components/ui/Category.svelte';

	let slug = $page.params.id;
</script>

<Container>
	<Section sectionTitle={slug}>
		<div class="category-wrapper">
			{#each categories as category}
				<Category item={category} />
			{/each}
		</div>
	</Section>
</Container>

<style>
	.category-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--gap);
	}

	@media (min-width: 640px) {
		.category-wrapper {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.category-wrapper {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (min-width: 1200px) {
		.category-wrapper {
			grid-template-columns: repeat(6, 1fr);
		}
	}
</style>
