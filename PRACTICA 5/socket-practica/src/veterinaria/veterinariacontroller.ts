import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateVeterinariaDto } from './dto/create-veterinaria.dto';
import { UpdateVeterinariaDto } from './dto/update-veterinaria.dto';
import { VeterinariaService } from './veterinaria.service';

@Controller('veterinaria')
export class VeterinariaController {
  constructor(private readonly veterinariaService: VeterinariaService) {}

  @Post()
  create(@Body() createVeterinariaDto: CreateVeterinariaDto) {
    return this.veterinariaService.create(createVeterinariaDto);
  }

  @Get()
  findAll()  {
    return this.veterinariaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.veterinariaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateVeterinariaDto: UpdateVeterinariaDto) {
    return this.veterinariaService.update(id, updateVeterinariaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.veterinariaService.remove(id);
  }
}
