import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from 'src/models';
import * as argon from 'argon2';
import { PrismaService } from './prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signin(user: SignInDto) {}

  async signup(user: SignUpDto) {
    // hash the password
    const hash = await argon.hash(user.password);
    const createdUser = await this.prisma.user.create({
      data: {
        email: user.email,
        password: hash,
      },
    });

    return createdUser;
  }
}
