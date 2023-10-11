import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./404/NotFound";
import { TablaCitas } from "./cita/tabla_citas";
import { TablaClientes } from "./clientes/tabla_clientes";
import { TablaCompra } from "./compra/tabla_compra";
import { HomePage } from "./home/homePage";
import { TablaMascotas } from "./mascota/tabla_mascota";
import { TablaProductos } from "./producto/tabla_producto";
import { TablaVacunas } from "./vacuna/tabla_vacuna";
import { TablaVentas } from "./venta/tabla_venta";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/clientes" element={<TablaClientes />} />
				<Route path="/citas" element={<TablaCitas />} />
				<Route path="/compras" element={<TablaCompra />} />
				<Route path="/mascotas" element={<TablaMascotas />} />
				<Route path="/productos" element={<TablaProductos />} />
				<Route path="/vacunas" element={<TablaVacunas />} />
				<Route path="/ventas" element={<TablaVentas />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
