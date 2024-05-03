<script>
	import { useCart } from '../../stores/useCart';
	export let product;

	function handleInc() {
		useCart.increment(product);
	}

	function handleDec() {
		useCart.decrement(product);
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
