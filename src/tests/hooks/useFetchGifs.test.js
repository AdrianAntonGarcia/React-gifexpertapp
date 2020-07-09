import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook <useFecthGifs/>", () => {
	test("Debe de retornar el estado incial", async() => {
		// Los hooks no se pueden llamar directamente, hay que instalar una librería para ello
		// react-hooks-testing-library
		// const { data, loading } = useFetchGifs('One Punch');
		const {result,waitForNextUpdate} = renderHook(() => useFetchGifs("One Punch"));
		// Aquí extraemos la data antes del await del useFetch
		// Tenemos que poner el await en todas las pruebas porque todas son dependientes entre sí
		const {data, loading} = result.current;

		await waitForNextUpdate();
		// console.log(data, loading);
		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
		const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("One Punch"));

		//Antes de extraer la informcion
		await waitForNextUpdate();

		const {data, loading} = result.current;
		
		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	})
	
});
