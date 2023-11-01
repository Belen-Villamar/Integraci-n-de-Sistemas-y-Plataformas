import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Estudiante } from '../estudiante/entities/estudiante.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteService } from 'src/estudiante/estudiante.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       estudiante: Estudiante
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Estudiante)
     private readonly estudianteRepository: Repository<Estudiante>,
     private readonly estudianteService: EstudianteService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.estudianteService.prueba());
        const estudiante =await  this.estudianteRepository.findOneBy({ nombre: name });
        if (!estudiante) throw new Error('Estudiante no encontrado');
        if (!estudiante.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, estudiante: estudiante};
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
        return this.connectedClients[id].estudiante.nombre;
    }
}
