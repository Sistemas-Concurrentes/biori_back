import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { ValidationDto } from '../controller/dto/validation.dto';
import { ValidationUsecaseResult } from './dto/validationUsecase.result';

@Injectable()
export class ValidationUsecase {

  constructor(private userTable: UserTable,
              private myJwt: MyJwtService) {}

  private _getUserNameFromToken(token: string): string {
    return this.myJwt.getUserName(token);
  }



  async run(validationDto: ValidationDto): Promise<ValidationUsecaseResult> {
    const user_name: string = this._getUserNameFromToken(validationDto.token);

    const user:UsertableModel  = await this.userTable.getUserByEmail(user_name);

    if (user.register_code != validationDto.register_code){
      throw new UnauthorizedException('Invalid credentials')
    }

    // await this.userTable.updateUserRegisterCode(user_name);

    return {
      token: this.myJwt.getAccessToken(user.user_name, user.name),
    };

  }
}
