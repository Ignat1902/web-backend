import { Injectable, HttpStatus } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(user: User): User {
    this.datasourceService.addUser(user);
    return user;
  }

  findOne(id: number): User {
    return this.datasourceService.findUserById(id);
  }

  findAll(): User[] {
    return this.datasourceService.getUser();
  }

  update(id: number, updatedUser: User): User {
    const index = this.datasourceService
      .getUser()
      .findIndex((user) => user.id === id);

    this.datasourceService.getUser()[index] = updatedUser;
    return this.datasourceService.getUser()[index];
  }

  remove(id: number): HttpStatus {
    const index = this.datasourceService
      .getUser()
      .findIndex((user) => user.id === id);

    this.datasourceService.getUser().splice(index, 1);
    return HttpStatus.OK;
  }
}
