import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { VeterinariaService } from 'src/veterinaria/veterinaria.service';
import { Repository } from 'typeorm';
import { Veterinaria } from '../veterinaria/entities/veterinaria.entity';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       veterinaria: Veterinaria
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Veterinaria)
     private readonly VeterinariaRepository: Repository<Veterinaria>,
     private readonly veterinariaService: VeterinariaService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.veterinariaService.prueba());
        const veterinaria =await  this.VeterinariaRepository.findOneBy({ nombre: name });
        if (!veterinaria) throw new Error('Veterinariia no encontrado');
        if (!veterinaria.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, veterinaria: veterinaria};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].veterinaria.nombre;
    }
}
