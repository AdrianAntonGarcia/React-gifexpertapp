import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
	// const categories = ["One Punch", "Samurai X", "Dragon Ball"];

	const [categories, setCategories] = useState(["One Punch"]);

	// const handleAdd = () => {
	// 	//setCategories([...categories, "Nuevo"]);
	// 	setCategories((categorias) => {
	// 		return [...categorias, "Nuevo"];
	// 	});
	// };

	return (
		<Fragment>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{
					/**
					 * El map retorna dos elementos, uno el elemento del array y otro el indice
					 */
					categories.map((category) => (
						<GifGrid key={category} category={category}/>
					))
				}
			</ol>
		</Fragment>
	);
};

export default GifExpertApp;
