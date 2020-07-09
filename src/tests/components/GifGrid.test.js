import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
/**
 * Cuando se use esta importación en los componentes de nuestra aplicación,
 * va a fingir con lo que nosotros definamos más abajo
 */
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas del componente <GifGrid/>", () => {
	const category = "One Punch";

	// beforeEach(() => {
	// 	// jest.resetAllMocks();
	// 	wrapper = shallow(<GifGrid category={category} />);
	// });

	test("Debe de comprobar que el componente cargue correctamente", () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar items cuando se cargan imagenes con el useFetchGifs", () => {
		/**
		 * Para esto usamos los mocks
		 */
		const gifs = [
			{
				id: "ABC",
				url: "https://localhost/cualquier/cosa.jpg",
				title: "Cualquier cosa",
			},
			{
				id: "123",
				url: "https://localhost/cualquier/cosa.jpg",
				title: "Cualquier cosa",
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false);
		/**
		 * Poniendo solamente el nombre del componente ya lo seleccionamos
		 */
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
