import { Navbar } from "../home/Navbar/Navbar";
import { useGetCompras } from "./getCompras.hook";

export function TablaCompra() {
	const compra = useGetCompras([
		{
			id_veterinaria: "",
			id_producto: "",
			id_proveedor: "",
			fecha_compra: "",
		},
	]);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<th>Veterinario</th>
					<th>Producto</th>
					<th>Proveedor</th>
					<th>Fecha Compra</th>
				</thead>
				<tbody>
					{compra.map((compra) => {
						return (
							<tr key={compra._id}>
								<td>{compra.id_veterinaria}</td>
								<td>{compra.id_producto}</td>
								<td>{compra.id_proveedor}</td>
								<td>{compra.fecha_compra}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
