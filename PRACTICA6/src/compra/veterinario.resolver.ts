import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateVeterinarioDto } from './dto/create-veterinario.dto';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';
import { Veterinario } from './entities/veterinario.entity';
import { VeterinarioService } from './veterinario.service';

@Resolver(() => Veterinario)
export class VeterinarioResolver {
  constructor(private readonly veterinarioService: VeterinarioService) {}

  @Query(() => [Veterinario], { name: 'veterinarios' })
  async getVeterinarios(): Promise<Veterinario[]> {
    return this.veterinarioService.findAll();
  }

  @Query(() => Veterinario, { name: 'veterinario' })
  async getVeterinario(@Args('id', { type: () => ID }) id: string): Promise<Veterinario> {
    return this.veterinarioService.findOne(id);
  }

  @Mutation(() => Veterinario)
  async createVeterinario(
    @Args('createVeterinarioDto') createVeterinarioDto: CreateVeterinarioDto,
  ): Promise<Veterinario> {
    return this.veterinarioService.create(createVeterinarioDto);
  }

  @Mutation(() => Veterinario)
  async updateVeterinario(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateVeterinarioDto') updateVeterinarioDto: UpdateVeterinarioDto,
  ): Promise<Veterinario> {
    return this.veterinarioService.update(id, updateVeterinarioDto);
  }

  @Mutation(() => Veterinario)
  async removeVeterinario(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Veterinario> {
    return this.veterinarioService.remove(id);
  }

  @Mutation(() => Veterinario)
  async updateAllActiveVet(): Promise<void> {
    return this.veterinarioService.updateAllActive();
  }
}
