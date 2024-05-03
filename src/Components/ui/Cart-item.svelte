<script>
	import { useCart } from '../../stores/useCart';
	import Button from './Button.svelte';
	import CartCapsule from './Cart-capsule.svelte';

	function handleRemove(id) {
		cart.removeItem(id);
	}
</script>

<section>
	<ul>
		{#each $useCart.items as item (item.id)}
			<li>
				<span>{item.title} - {item.quantity} x ${item.price.toFixed(2)}</span>
				<CartCapsule product={item} />
				<button on:click={handleRemove(item.id)}>Remove</button>
			</li>
		{/each}
	</ul>
	<Button label="clear cart" handleAction={useCart.clear} />
</section>
