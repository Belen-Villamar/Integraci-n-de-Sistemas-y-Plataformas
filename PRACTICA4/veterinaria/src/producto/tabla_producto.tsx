import { Navbar } from "../home/Navbar/Navbar";
import { useGetProductos } from "./getProductos.hook";

export function TablaProductos() {
	const productos = useGetProductos([
		{
			nombre: "",
			id_tipo_producto: "",
		},
	]);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<th>Nombres</th>
					<th>Tipo Producto</th>
				</thead>
				<tbody>
					{productos.map((producto) => {
						return (
							<tr key={producto._id}>
								<td>{producto.nombre}</td>
								<td>{producto.id_tipo_producto}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
