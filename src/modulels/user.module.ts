import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { PrismaService } from 'src/services/prisma.service';
import { UserService } from 'src/services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
