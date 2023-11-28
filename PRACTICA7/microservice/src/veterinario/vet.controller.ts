import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VeterinarioMsg } from 'src/common/constants';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';
import { CreateVeterinarioDto } from './dto/veterinario.dto';
import { VeterinarioService } from './veterinario.service';

@Controller('veternario')
export class VeterinarioController {
  constructor(private readonly veterinarioService: VeterinarioService) {}

  @MessagePattern(VeterinarioMsg.CREATE)
  create(@Payload() createVacunaDto: CreateVeterinarioDto) {
    return this.veterinarioService.create(createVacunaDto);
  }
  
  @MessagePattern(VeterinarioMsg.FIND_ALL)
  findAll() {
    return this.veterinarioService.findAll();
  }

  @MessagePattern(VeterinarioMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.veterinarioService.findOne(id);
  }

  @MessagePattern(VeterinarioMsg.UPDATE)
  update(
    @Payload() id: string,
    @Payload() updateVacunaDto: UpdateVeterinarioDto,
  ) {
    return this.veterinarioService.update(id, updateVacunaDto);
  }

  @MessagePattern(VeterinarioMsg.DELETE)
  remove(@Payload() id: string) {
    return this.veterinarioService.remove(id);
  }
}