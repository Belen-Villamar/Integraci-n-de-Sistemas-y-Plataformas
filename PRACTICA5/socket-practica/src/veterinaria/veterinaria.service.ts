import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVeterinariaDto } from './dto/create-veterinaria.dto';
import { UpdateVeterinariaDto } from './dto/update-veterinaria.dto';
import { Veterinaria } from './entities/veterinaria.entity';

@Injectable()
export class VeterinariaService {

  private readonly logger = new Logger('VeterinariaService');

  constructor( 
    @InjectRepository(Veterinaria) 
    private readonly VeterinariaRepository: Repository<Veterinaria>,

    ){}

  
  async create(createVeterinariaDto: CreateVeterinariaDto) {
    try {
      const veterinaria =  this.VeterinariaRepository.create(createVeterinariaDto);
      await this.VeterinariaRepository.save(veterinaria);
      return veterinaria;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.VeterinariaRepository.find({});
  }

  async findOne(id: string) {
    const veterinaria= await  this.VeterinariaRepository.findOneBy ({ id });
    if (!veterinaria)
      throw new NotFoundException(`Veterinaria ${id} no encontrado`);
    return veterinaria;

  }

  async update(id: string, updateVeterinariaDto: UpdateVeterinariaDto) {
    const veterinaria = await this.VeterinariaRepository.preload({
      id: id,
      ...updateVeterinariaDto
    });
    if (!veterinaria) throw new NotFoundException(`Veterinaria ${id} no encontrado`)

    try {
      await  this.VeterinariaRepository.save(veterinaria)
      return veterinaria;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const veterinaria = await this.findOne(id);
    await this.VeterinariaRepository.remove(veterinaria);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
