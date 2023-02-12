import { User } from '@prisma/client';
import {
  Controller,
  Delete,
  Param,
  Body,
  Post,
  Get,
  Put,
} from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body('User') User: User) {
    return this.userService.createUser(User);
  }

  @Put(':id')
  updateUser(
    @Param() id: string,
    @Body('User') User: Partial<Omit<User, 'id'>>,
  ) {
    return this.userService.updateUser(id, User);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
