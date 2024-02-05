import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { LoginUsecaseResult } from './dto/loginUsecase.result';
import { RegisterDto } from '../controller/dto/register.dto';


@Injectable()
export class RegisterUsecase {

  constructor(private userTable: UserTable) {}

  async run(registerDto:RegisterDto): Promise<LoginUsecaseResult> {
    const user:UsertableModel  = await this.userTable.getUserByEmail(registerDto.user_name);
    if (user){
      throw new UnauthorizedException('User already exists')
    }





    return
  }
}
