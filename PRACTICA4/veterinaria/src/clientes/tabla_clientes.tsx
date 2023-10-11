import { Navbar } from "../home/Navbar/Navbar";
import { useGetClientes } from "./getClientes.hook";

export function TablaClientes() {
	const clientes = useGetClientes([
		{
			nombre: "",
			apellido: "",
			genero: "",
			direccion: "",
			telefono: "",
			fecha_registro: new Date(),
			ultima_visita: new Date(),
			antiguedad: "",
			ci: "",
			num_mascotas: 0,
		},
	]);

	return (
		<>
			<Navbar />
			<table className="table">
				<thead>
					<tr>
						<th>Nombres</th>
						<th>Apellidos</th>
						<th>Genero</th>
						<th>Direccion</th>
						<th>Telefono</th>
						<th>Cedula</th>
						<th>N° Mascotas</th>
					</tr>
				</thead>
				<tbody>
					{clientes.map((cliente) => {
						return (
							<tr key={cliente._id}>
								<td>{cliente.nombre}</td>
								<td>{cliente.apellido}</td>
								<td>{cliente.genero}</td>
								<td>{cliente.direccion}</td>
								<td>{cliente.telefono}</td>
								<td>{cliente.ci}</td>
								<td>{cliente.num_mascotas}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
