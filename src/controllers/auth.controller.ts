import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { signin } from 'src/models';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() data: signin) {
    return this.authService.signin();
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
