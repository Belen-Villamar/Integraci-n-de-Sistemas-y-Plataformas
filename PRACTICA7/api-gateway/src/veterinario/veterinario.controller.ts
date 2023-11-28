import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { VeterinarioMsg } from '../common/constants';
import { ClientProxyVeterinaria } from '../common/proxy/client-proxy';
import { VeterinarioDTO } from './dto/veterinario.dto';
import { IVeterinario } from './entities/veterinario.entity';

@Controller('api/veterinario')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyVeterinaria) {}
  private _clientProxyUser = this.clientProxy.clientProxyVeterinario();

  @Post()
  create(@Body() userDTO: VeterinarioDTO): Observable<IVeterinario> {
    return this._clientProxyUser.send(VeterinarioMsg.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<IVeterinario[]> {
    return this._clientProxyUser.send(VeterinarioMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IVeterinario> {
    return this._clientProxyUser.send(VeterinarioMsg.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userDTO: VeterinarioDTO,
  ): Observable<IVeterinario> {
    return this._clientProxyUser.send(VeterinarioMsg.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(VeterinarioMsg.DELETE, id);
  }
}
