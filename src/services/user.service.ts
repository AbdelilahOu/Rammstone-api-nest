import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async getUser(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async createUser(user: User) {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async updateUser(id: number, user: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
