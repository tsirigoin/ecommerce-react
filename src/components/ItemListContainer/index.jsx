import { useState } from "react";

function ItemListContainer({ greetings }) {
	const [saludo, setSaludo] = useState(greetings);

	function changeGreeting() {
		setSaludo("¿Helado?");
	}

	return (
		<div className="item-list-container">
			<Content saludo={saludo} changeGreeting={changeGreeting} />
		</div>
	);
}

function Content({ saludo, changeGreeting }) {
	return (
		<>
			<div className="text-center pb-12 md:pb-16">
				<h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">{saludo}</h1>
				<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={changeGreeting}>Dame click sin miedo</button>
			</div>
		</>
	);
}

export default ItemListContainer;