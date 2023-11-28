import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; // Importa Model desde mongoose
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';
import { CreateVeterinarioDto } from './dto/veterinario.dto';
import { Veterinario } from './entities/veterinario.entity';

@Injectable()
export class VeterinarioService {
  private readonly logger = new Logger('VeterinarioService');

  constructor(
    @InjectModel('veterinarios')
    private readonly veterinarioModel: Model<Veterinario>,
  ) {}

  async create(createVeterinarioDto: CreateVeterinarioDto) {
    try {
      const veterinario = new this.veterinarioModel(createVeterinarioDto);
      await veterinario.save();
      return veterinario;
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        throw new BadRequestException('Registro duplicado');
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    return this.veterinarioModel.find({}).exec();
  }

  async findOne(id: string) {
    const veterinario = await this.veterinarioModel.findById(id).exec();
    if (!veterinario) {
      throw new NotFoundException(`Veterinario ${id} no encontrado`);
    }
    return veterinario;
  }

  async update(id: string, updateVeterinarioDto: UpdateVeterinarioDto) {
    const veterinario = await this.veterinarioModel
      .findByIdAndUpdate(id, updateVeterinarioDto, { new: true })
      .exec();
    if (!veterinario) {
      throw new NotFoundException(`Veterinario ${id} no encontrado`);
    }
    return veterinario;
  }

  async remove(id: string) {
    const veterinario = await this.findOne(id);
    await veterinario.updateOne({ active: false });
    return veterinario;
  }

  prueba(): string[] {
    return ['uno', 'dos', 'tres'];
  }

  async updateAllActive() {
    await this.veterinarioModel.updateMany({ active: true });
  }
}
