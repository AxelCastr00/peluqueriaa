import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  getAllUsers() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.clientesService.findOneById(id);
  }

  @Get(':name')
  getUserByName(@Param('name') name: string) {
    return this.clientesService.findOneByName(name);
  }
}
