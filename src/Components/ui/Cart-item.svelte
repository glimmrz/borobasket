<script>
	import { cart } from '../../store';
	import Button from './Button.svelte';
	import CartCapsule from './Cart-capsule.svelte';

	function handleRemove(id) {
		cart.removeItem(id);
	}
</script>

<section>
	<ul>
		{#each $cart.items as item (item.id)}
			<li>
				<span>{item.title} - {item.quantity} x ${item.price.toFixed(2)}</span>
				<CartCapsule product={item} />
				<button on:click={handleRemove(item.id)}>Remove</button>
			</li>
		{/each}
	</ul>
	<Button label="clear cart" handleAction={cart.clear} />
</section>
