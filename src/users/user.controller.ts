import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findItemById(@Param('id') id: number) {
    const user = this.userService.findOne(id);
    return user;
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedUser: User) {
    return this.userService.update(id, updatedUser);
  }
}
