import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState("");

	/**
	 * Función que se ejecuta cada vez que se realiza un cambio en el input y
	 * actualiza el valor del inputValue mediante el hook
	 * @param {*} e evento del input
	 */

	const handleInputChange = (e) => {
		// console.log(e.target.value);
		setInputValue(e.target.value);
	};

	/**
	 * Función que se ejecuta al enviar el formulario y actualiza el
	 * listado de categorías.
	 * @param {*} e evento del formulario
	 */

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			// console.log(e.target.inputValue.value);
			setCategories((state) => {
				// console.log(state);
				return [inputValue, ...state];
			});
			setInputValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="inputValue"
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
