import { ConflictException, Injectable, ServiceUnavailableException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { RegisterDto } from '../controller/dto/register.dto';
import { RegisterUsecaseResult } from './dto/registerUsecase.result';
import { encodePassword} from '../../../utiles/bcrypt/mybcrypt';
import { MyMailerService } from '../../../utiles/mailer/mailer.service';


@Injectable()
export class RegisterUsecase {

  constructor(private userTable: UserTable,
              private myMailer: MyMailerService) {}

  async run(registerDto:RegisterDto): Promise<RegisterUsecaseResult> {
    const user:UsertableModel  = await this.userTable.getUserByEmail(registerDto.user_name);
    if (user.user_name){
      throw new ConflictException('User already exists')
    }

    registerDto.password = encodePassword(registerDto.password);

    try {
      await this.userTable.createUser(registerDto);
      const user:UsertableModel  = await this.userTable.getUserByEmail(registerDto.user_name);
      this.myMailer.sendVerificationCode(user.user_name, user.register_code.toString())

    } catch (error) {
      throw new ServiceUnavailableException('Error creating user, try again later.')
    }

    return {
      user_name: registerDto.user_name,
    }
  }
}
