<script>
	import { useCartSidebar } from '../../stores/useCartSidebar';
	import { useCart } from '../../stores/useCart';
	import shoppingbag from '$lib/assets/shoppingbag.png';
	import search from '$lib/assets/search.png';
	import Container from './Container.svelte';
	import Hamburger from './Hamburger.svelte';
	import Icon from './Icon.svelte';
	import Input from './Input.svelte';
	import Logo from './Logo.svelte';

	let quantity;

	$: quantity = $useCart.items.reduce((a, b) => a + b.quantity, 0);
</script>

<nav>
	<Container>
		<div class="navbar-wrapper">
			<div class="logo-wrapper">
				<Hamburger />
				<Logo />
			</div>
			<div class="search-bar">
				<Input full />
				<img src={search} alt="search" class="search-icon" />
			</div>
			<div class="cart-wrapper">
				<div class="col" on:click={useCartSidebar.onOpen}>
					<div class="cart">
						<Icon src={shoppingbag} alt="shopping bag" />
						<span class="total-number">{quantity}</span>
					</div>
					<span class="total-amount">৳ {$useCart.total}</span>
				</div>
			</div>
		</div>
	</Container>
</nav>

<style>
	nav {
		background-color: var(--secondary-accent);
	}

	.navbar-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		gap: var(--gap);
	}

	.search-bar {
		flex: 3;
		background-color: #fff;
		display: none;
		border-radius: var(--radius);
		border: 2px solid var(--blue);
		overflow: hidden;
	}

	.search-icon {
		width: 35px;
		object-fit: contain;
		padding: var(--gap);
		cursor: pointer;
	}

	.cart-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.cart-wrapper .col {
		width: fit-content;
		display: flex;
		align-items: center;
		gap: var(--gap);
		cursor: pointer;
	}

	.cart {
		position: relative;
	}

	.total-number {
		font-size: calc(var(--font-regular) / 1.2);
		font-weight: 700;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20px;
		width: 20px;
		position: absolute;
		bottom: 0;
		right: -5px;
		background-color: var(--blue-accent);
		border-radius: 50%;
	}

	.total-amount {
		font-weight: 800;
		color: var(--blue);
		display: none;
	}

	@media (min-width: 1200px) {
		.search-bar {
			display: flex;
		}

		.total-amount {
			display: block;
		}
	}
</style>
