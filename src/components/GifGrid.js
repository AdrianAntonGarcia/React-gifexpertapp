import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	// console.log(data);
	console.log(loading);

	// /**
	//  * Con el use effect ejecutamos la función dependiendo de la condición del segundo parámetro
	//  */

	/**
	 * Si lo ponemos aquí cada vez que react detecte un cambio en cualquier estado
	 * recargará el componente ejecutando la función cada vez
	 */
	// getGifs();
	return (
		<Fragment>
			<h3 className="animate__animated animate__fadeIn">{category}</h3>
			{loading && <p className="animate__animated animate__flash">Loading</p>}
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</Fragment>
	);
};

export default GifGrid;
