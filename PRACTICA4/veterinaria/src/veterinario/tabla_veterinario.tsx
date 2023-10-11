import { Navbar } from "../home/Navbar/Navbar";
import { useGetVeterinarios } from "./getVeterinarios.hook";

export function TablaVentas() {
	const veterinarios = useGetVeterinarios([
		{
			id_veterinaria: "",
			nombre_veterinaria: "",
			nombre: "",
			apellido: "",
		},
	]);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<th>Veterinaria</th>
					<th>Nombre</th>
					<th>Apellido</th>
				</thead>
				<tbody>
					{veterinarios.map((veterinario) => {
						return (
							<tr key={veterinario._id}>
								<td>{veterinario.nombre_veterinaria}</td>
								<td>{veterinario.nombre}</td>
								<td>{veterinario.apellido}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
