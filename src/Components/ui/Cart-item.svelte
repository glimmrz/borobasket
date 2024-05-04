<script>
	import { useCart } from '../../stores/useCart';
	import CartCapsule from './Cart-capsule.svelte';
	import Button from '../ui/Button.svelte';

	export let item;

	function handleRemove() {
		useCart.removeItem(item.id);
	}
</script>

<li>
	<h4>{item?.title} - {item?.quantity} x ৳{item?.price?.toFixed(2)}</h4>
	<CartCapsule product={item} />
	<Button handleAction={handleRemove} label="remove" full />
</li>

<style>
	li {
		padding: var(--gap);
		margin-top: var(--gap);
		margin-bottom: var(--gap);
		background-color: var(--secondary-accent);
		border-radius: var(--radius);
	}
</style>
