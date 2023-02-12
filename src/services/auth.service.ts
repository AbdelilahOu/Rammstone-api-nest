import * as argon from 'argon2';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SignInDto, SignUpDto } from 'src/models';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signin(user: SignInDto) {
    try {
    } catch (error) {
      return error;
    }
  }

  async signup(user: SignUpDto) {
    // hash the password
    try {
      const hash = await argon.hash(user.password);
      const createdUser = await this.prisma.user.create({
        data: {
          email: user.email,
          password: hash,
        },
      });
      return createdUser ? createdUser : 'coudnt create the user';
    } catch (error) {
      return error;
    }
  }
}
