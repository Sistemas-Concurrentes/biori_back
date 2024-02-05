import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { LoginUsecaseResult } from './dto/loginUsecase.result';

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

  async run(user_name: string, pass: string): Promise<LoginUsecaseResult> {
    const user:UsertableModel  = await this.  userTable.getUserByEmail(user_name);

    if (this.isNotValidatedUser(user.password, pass)){
      throw new UnauthorizedException('Invalid credentials')
    }

    return {
        id: user.id,
        user_name: user.user_name,
        token: this.myJwt.getAccessToken(user.user_name)
      };
  }
}
