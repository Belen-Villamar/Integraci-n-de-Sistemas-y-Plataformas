import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVeterinarioDto } from './dto/create-veterinario.dto';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';
import { VeterinarioService } from './veterinario.service';

@Controller('veterinario')
export class VeterinarioController {
  constructor(private readonly veterinarioService: VeterinarioService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateVeterinarioDto) {
    return this.veterinarioService.create(createEstudianteDto);
  }

  @Get()
  findAll() {
    return this.veterinarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.veterinarioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateVeterinarioDto: UpdateVeterinarioDto,
  ) {
    return this.veterinarioService.update(id, updateVeterinarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.veterinarioService.remove(id);
  }
}
