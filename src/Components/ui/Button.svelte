<script>
	export let label;
	export let icon;
	export let full;
	export let handleAction;
</script>

<button class="primary {full ? 'w-full' : ''}" on:click={handleAction}>
	{#if icon}
		<img src={icon} alt="" />
	{/if}
	<span>{label}</span>
</button>

<style>
	button {
		width: fit-content;
		text-transform: capitalize;
		padding: var(--gap);
		font-size: var(--font-regular);
		border: none;
		outline: none;
		border-radius: var(--radius);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--gap);
		cursor: pointer;
	}

	img {
		width: 20px;
		height: 20px;
		object-fit: contain;
	}

	.primary {
		background-color: var(--blue-accent);
		color: #fff;
	}

	.w-full {
		width: 100%;
	}
</style>
