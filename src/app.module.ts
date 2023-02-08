import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
