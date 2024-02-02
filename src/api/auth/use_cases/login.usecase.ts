import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
//import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginUsecase {

  //const saltRounds: number = 10;

  constructor(private userTable: UserTable,
              private myJwt: MyJwtService) {}

  private isNotValidatedUser(passwordUser: string, passwordRequested:string): boolean {
    //const isMatch = await bcrypt.compare(pass, user.password);
    return passwordUser != passwordRequested;

  }

  async run(user_name: string, pass: string): Promise<{ access_token: string }> {
    const user:User  = await this.userTable.getUserByEmail(user_name);

    if (user && this.isNotValidatedUser(user.password, pass)){
      throw new UnauthorizedException('Invalid credentials')
    }

    return {
      access_token: this.myJwt.getAccessToken(user.user_name),
    };


  }
}
