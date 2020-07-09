import React from "react";
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas del componente GifGridItem", () => {
	const title = "Un título";
	const url = "https://localhost/algo.jpg";
	let wrapper = shallow(<GifGridItem title={title} url={url} />);

	beforeEach(() => {
		wrapper = shallow(<GifGridItem title={title} url={url} />);
	});

	test("Debe de mostrar el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de tener un párrafo con el title", () => {
		const p = wrapper.find("p");
		expect(p.text().trim()).toBe(title);
	});

	test("Debe de tener la imagen igual al url y alt de los props", () => {
		const img = wrapper.find("img");
		// console.log(img.prop("src"));
		// console.log(img.props().src);
		// propiedades del html
		expect(img.prop("src")).toBe(url);
		expect(img.prop("alt")).toBe(title);
	});

	test('Debe de tener animate_fadeIn', () => {
		const div = wrapper.find('div');
		console.log(div.props().className);
		expect(div.props().className.includes('animate__fadeIn')).toBe(true);
	})
	
});
