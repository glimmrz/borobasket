<div class="container">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		max-width: 1440px;
		width: 100%;
		padding: var(--gap);
	}
</style>
