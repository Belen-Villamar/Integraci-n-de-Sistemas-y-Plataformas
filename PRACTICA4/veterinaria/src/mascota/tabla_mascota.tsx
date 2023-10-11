import { Navbar } from "../home/Navbar/Navbar";
import { useGetMascotas } from "./getMascotas.hook";

export function TablaMascotas() {
	const mascotas = useGetMascotas([
		{
			id_cliente: "",
			id_tipo_mascota: "",
			id_habito: "",
			nombre_mascota: "",
			fecha_nacimiento: new Date(),
			genero: "",
			color: "",
			esterilizacion: "",
		},
	]);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<th>Cliente</th>
					<th>Tipo Mascota</th>
					<th>habito</th>
					<th>Nombre Mascota</th>
					<th>Fecha Nacimiento</th>
					<th>Genero</th>
					<th>Color</th>
					<th>Esterilizacion</th>
				</thead>
				<tbody>
					{mascotas.map((mascota) => {
						return (
							<tr key={mascota._id}>
								<td>{mascota.id_cliente}</td>
								<td>{mascota.id_tipo_mascota}</td>
								<td>{mascota.id_habito}</td>
								<td>{mascota.nombre_mascota}</td>
								<td>{mascota.fecha_nacimiento.toLocaleString()}</td>
								<td>{mascota.genero}</td>
								<td>{mascota.color}</td>
								<td>{mascota.esterilizacion}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
