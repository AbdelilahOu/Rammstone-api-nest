import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';
import { PrismaModule } from './modules/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './utils/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
