import * as argon from 'argon2';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SignInDto, SignUpDto } from 'src/models';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async signIn(user: SignInDto) {
    try {
      const findUser = await this.prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });

      if (!findUser) throw new ForbiddenException('Credentials incorrect');

      const verifyPassword = await argon.verify(
        findUser.password,
        user.password,
      );

      if (!verifyPassword)
        throw new ForbiddenException('Credentials incorrect');

      return this.signToken(findUser.id, findUser.email);
    } catch (error) {
      return error;
    }
  }

  async signUp(user: SignUpDto) {
    // hash the password
    try {
      const hash = await argon.hash(user.password);
      const createdUser = await this.prisma.user.create({
        data: {
          email: user.email,
          password: hash,
        },
      });
      return createdUser ? createdUser : 'couldnt create the user';
    } catch (error) {
      return error;
    }
  }

  async signToken(
    id: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: id,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret,
    });

    return {
      access_token,
    };
  }
}
