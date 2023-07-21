import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function CartWidget() {
	return (
		<li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-gray-400 hover:text-gray-700">
			<a href="#" role="button" className="relative flex">
				<ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
				<span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
				</span>
			</a>
		</li>
	);
}

export default CartWidget;
