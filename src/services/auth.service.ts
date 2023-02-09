import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from 'src/models';

@Injectable()
export class AuthService {
  signin(user: SignInDto) {
    console.log(user);
  }

  signup(user: SignUpDto) {}
}
