import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
import { UsertableModel } from '../../../datasource/db/usertable/model/usertable.model';
import { MyMailerService } from '../../../utiles/mailer/mailer.service';

@Injectable()
export class ResendUsecase {

  constructor(private userTable: UserTable,
              private myJwt: MyJwtService,
              private myMailer: MyMailerService) {}

  async run(username: string): Promise<{'ok': string}> {
    const user:UsertableModel  = await this.userTable.getUserByEmail(username);

    if (!user || user.register_code == 0){
      throw new UnauthorizedException('Invalid credentials')
    }

    this.myMailer.sendVerificationCode(user.user_name, user.register_code.toString());

    return {
      ok: "true",
    };

  }
}
