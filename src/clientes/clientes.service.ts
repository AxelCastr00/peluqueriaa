import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './interfaces/clientes.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ClientesService {
  private users: Users[] = [
    {
      id: uuid(),
      name: 'Axel',
      lastName: 'Castro',
      age: 24,
    },
    {
      id: uuid(),
      name: 'Maxi',
      lastName: 'Castro',
      age: 25,
    },
    {
      id: uuid(),
      name: 'Joaco',
      lastName: 'Pérez',
      age: 22,
    },
  ];

  findAll() {
    return this.users;
  }

  findOneById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user)
      throw new NotFoundException(`El usuario con el '${id}' no se encuentra `);
    return user;
  }

  findOneByName(name: string) {
    const nombre = this.users.find((nombre) => nombre.name === name);
    if (!name)
      throw new NotFoundException(
        `El nombre '${name}' no es un usuario vigente`,
      );
    return nombre;
  }
}
