import { Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post('/login')
  async Login() {}

  @Post('/logout')
  async Logout() {}

  @Post('/register')
  async register() {}
}
