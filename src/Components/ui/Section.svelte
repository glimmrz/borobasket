<script>
	import Icon from './Icon.svelte';

	export let sectionTitle;
	export let sectionicon;
</script>

<section>
	<div class="section-header">
		{#if sectionicon}
			<Icon src={sectionicon} alt={sectionTitle} />
		{/if}
		<h2>{sectionTitle}</h2>
	</div>
	<div class="section-content">
		<slot />
	</div>
</section>

<style>
	section {
		margin-top: var(--gap);
		margin-bottom: var(--gap);
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: calc(var(--gap) / 2);
		padding-top: var(--gap);
		padding-bottom: var(--gap);
		border-bottom: 1px solid var(--mute);
	}

	h2 {
		font-size: calc(var(--header) / 1.2);
		font-weight: 500;
		text-transform: capitalize;
	}

	.section-content {
		margin-top: var(--gap);
		margin-bottom: var(--gap);
	}

	@media (min-width: 640px) {
		h2 {
			font-size: var(--header);
		}
	}
</style>
