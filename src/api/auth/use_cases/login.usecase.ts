import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { LoginUsecaseResult } from './dto/loginUsecase.result';
import { comparePassword} from '../../../utiles/bcrypt/mybcrypt';

@Injectable()
export class LoginUsecase {

  constructor(private userTable: UserTable,
              private myJwt: MyJwtService) {}

  private isValidatedUser(hashPassword: string, passwordRequested:string): boolean {
    if (!hashPassword)
      return false;

    return comparePassword(passwordRequested, hashPassword)
  }

  async run(user_name: string, pass: string): Promise<LoginUsecaseResult> {
    const user:UsertableModel  = await this.userTable.getUserByEmail(user_name);

    if (!this.isValidatedUser(user.password, pass)){
      throw new UnauthorizedException('Invalid credentials')
    }

    return {
        id: user.id,
        user_name: user.user_name,
      token: this.myJwt.getAccessToken(user.id, user.user_name, user.name,
        user.user_type, user.rol),
        register_code: user.register_code
      };
  }
}
