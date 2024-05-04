<script>
	import { useCart } from '../../stores/useCart';
	import CartCapsule from './Cart-capsule.svelte';

	export let item;

	function handleRemove(id) {
		useCart.removeItem(id);
	}
</script>

<li>
	<span>{item?.title} - {item?.quantity} x ${item?.price?.toFixed(2)}</span>
	<CartCapsule product={item} />
	<button on:click={handleRemove(item?.id)}>Remove</button>
</li>
