import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { RegisterDto } from '../controller/dto/register.dto';
import { RegisterUsecaseResult } from './dto/registerUsecase.result';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
import { encodePassword} from '../../../utiles/bcrypt/mybcrypt';


@Injectable()
export class RegisterUsecase {

  constructor(private userTable: UserTable,
              private myJwt: MyJwtService) {}

  async run(registerDto:RegisterDto): Promise<RegisterUsecaseResult> {
    const user:UsertableModel  = await this.userTable.getUserByEmail(registerDto.user_name);
    if (user.user_name){
      throw new UnauthorizedException('User already exists')
    }

    registerDto.password = encodePassword(registerDto.password);

    try {
      await this.userTable.createUser(registerDto);
    } catch (error) {
      throw new ConflictException('Error creating user, try again later.')
    }

    return {
      user_name: registerDto.user_name,
      token: this.myJwt.getAccessToken(registerDto.user_name)
    }
  }
}
