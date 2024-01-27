import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
//import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  //const saltRounds: number = 10;

  constructor(private usersService: UserService,
              private jwtService: JwtService) {}

  private isNotValidatedUser(passwordUser: string, passwordRequested:string): boolean {
    //const isMatch = await bcrypt.compare(pass, user.password);
    return passwordUser != passwordRequested;

  }

  async singIn(user_name: string, pass: string): Promise<{ access_token: string }> {
    const user:User  = await this.usersService.getOneUser(user_name);

    if (user && this.isNotValidatedUser(user.password, pass)){
      throw new UnauthorizedException('Invalid credentials')
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const  payload = { user_name: user.user_name, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };


  }
}
