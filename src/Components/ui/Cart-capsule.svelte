<script>
	import { cart } from '../../store';
	export let product;

	function handleInc() {
		cart.increment(product);
	}

	function handleDec() {
		cart.decrement(product);
	}
</script>

<div>
	<span on:click={handleInc}>increase</span>
	<span on:click={handleDec}>decrease</span>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}
</style>
