import { Navbar } from "../home/Navbar/Navbar";
import { useGetVacunas } from "./getVacunas.hook";

export function TablaVacunas() {
	const vacunas = useGetVacunas([
		{
			id_mascota: "",
			id_veterinario: "",
			id_producto: "",
			fecha_aplicacion: "",
			dosis: "",
		},
	]);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<th>Mascota</th>
					<th>Veterinario</th>
					<th>Producto</th>
					<th>Fecha Aplicacion</th>
					<th>Dosis</th>
				</thead>
				<tbody>
					{vacunas.map((vacuna) => {
						return (
							<tr key={vacuna._id}>
								<td>{vacuna.id_mascota}</td>
								<td>{vacuna.id_veterinario}</td>
								<td>{vacuna.id_producto}</td>
								<td>{vacuna.fecha_aplicacion}</td>
								<td>{vacuna.dosis}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
