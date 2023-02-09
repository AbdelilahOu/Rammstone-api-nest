import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { SignInDto, SignUpDto } from 'src/models';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body('user') user: SignInDto) {
    return this.authService.signin(user);
  }

  @Post('signup')
  signup(@Body('user') user: SignUpDto) {
    return this.authService.signup(user);
  }
}
