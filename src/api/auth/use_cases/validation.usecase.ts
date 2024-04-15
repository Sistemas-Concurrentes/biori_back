import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { ValidationUsecaseResult } from './dto/validationUsecase.result';
import { ValidationModel } from '../controller/model/validation.model';

@Injectable()
export class ValidationUsecase {

  constructor(private userTable: UserTable,
              private myJwt: MyJwtService) {}

  async run(validationModel: ValidationModel): Promise<ValidationUsecaseResult> {

    const user:UsertableModel  = await this.userTable.getUserByEmail(validationModel.username);

    if (user.register_code != validationModel.register_code){
      throw new UnauthorizedException('Invalid credentials')
    }

    await this.userTable.updateUserRegisterCode(user.user_name);

    return {
      token: this.myJwt.getAccessToken(user.id, user.user_name, user.name),
    };

  }
}
