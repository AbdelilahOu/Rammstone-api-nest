import { User } from '@prisma/client';
import {
  Controller,
  Delete,
  Param,
  Body,
  Post,
  Get,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/utils/user.decorator';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getCurrent(@GetUser() user: User) {
    console.log(user);
    return 'aaaaaaaa';
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
