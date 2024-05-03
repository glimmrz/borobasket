<script>
	import { useCartSidebar } from '../../stores/useCartSidebar';
	import { useCart } from '../../stores/useCart';
	import Icon from './Icon.svelte';
	import Button from './Button.svelte';
	import CartItem from './Cart-item.svelte';
</script>

<div class="cart" style="transform: translateX({$useCartSidebar.isOpen ? '0' : '800'}px)">
	<div class="cart-wrapper">
		<!-- Cart header -->
		<div class="cart-top">
			<div class="cart-indicator">
				<Icon src="groceries.png" />
				<span>my basket items</span>
			</div>
			<Icon src="close.png" handleAction={useCartSidebar.onClose} />
		</div>
		<!-- Cart items -->
		<div>
			<CartItem />
		</div>
		<!-- Cart total -->
		<div class="cart-bottom">
			<div class="bottom-content">
				<div class="cart-total">
					<p>sub total</p>
					<p>${$useCart.total}</p>
				</div>
				<div class="cart-total">
					<p>delivery charge</p>
					<p>00</p>
				</div>
				<div class="cart-total">
					<h6>grand total</h6>
					<p>${$useCart.total}</p>
				</div>
				<Button label="register / login" full />
			</div>
		</div>
	</div>
</div>

<style>
	.cart {
		width: 400px;
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		background-color: #fff;
		z-index: 5;
		transition: all 0.5s ease;
	}

	.cart-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.cart-top {
		padding: var(--gap);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--secondary-accent);
		border-bottom: 1px solid var(--blue-accent);
	}

	.cart-indicator {
		display: flex;
		align-items: center;
		gap: var(--gap);
		text-transform: uppercase;
		font-weight: 700;
		color: var(--secondary);
	}

	.cart-bottom {
		padding: var(--gap);
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.bottom-content {
		padding: var(--gap);
		background-color: var(--secondary-accent);
		border-radius: var(--radius);

		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}

	.cart-total {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cart-total p,
	h6 {
		text-transform: capitalize;
		font-size: var(--font-regular);
	}
</style>
