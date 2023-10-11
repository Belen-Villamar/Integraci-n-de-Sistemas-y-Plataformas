import { Navbar } from "../home/Navbar/Navbar";
import { useGetCitas } from "./getCitas.hook";

export function TablaCitas() {
	const citas = useGetCitas([
		{
			id_veterinario: "",
			id_cliente: "",
			nombre_cliente: "",
			fecha_programada: new Date(),
		},
	]);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<th>Veterinario</th>
					<th>Cliente</th>
					<th>Nombre Cliente</th>
					<th>Fecha Programada</th>
				</thead>
				<tbody>
					{citas.map((cita) => {
						return (
							<tr key={cita._id}>
								<td>{cita.id_veterinario}</td>
								<td>{cita.id_cliente}</td>
								<td>{cita.nombre_cliente}</td>
								<td>{cita.fecha_programada.toLocaleString()}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
