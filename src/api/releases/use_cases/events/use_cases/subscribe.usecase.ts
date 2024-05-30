import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {SubscribeDto} from '../controller/dto/subscribe.dto';
import {
  RegisteredTable,
} from '../../../../../datasource/db/registeredtable/registeredtable.usecase';
import {
  UserRegisteredTable,
} from '../../../../../datasource/db/user_registeredtable/user_registeredtable.usecase';

@Injectable()
export class SubscribeUsecase {

  constructor(
    private userRegisteredTable: UserRegisteredTable,
      private registeredTable: RegisteredTable) {
  }

  async run(subscribeDto: SubscribeDto, userId: number): Promise<boolean> {
    const registerEventId = await this.registeredTable.getRegisterIdEventById(
        subscribeDto.idEvent);
    const existsInscription = await this.userRegisteredTable.existsInscription(
      userId, registerEventId);

    if (userId == 0) {
      throw new HttpException('user not found', HttpStatus.FORBIDDEN);
    }
    if (registerEventId == -1) {
      throw new HttpException('register not found', HttpStatus.FORBIDDEN);
    }
    if (existsInscription) {
      throw new HttpException('Event already subscribed found',
          HttpStatus.FORBIDDEN);
    }

    await this.userRegisteredTable.addInscription(userId,
        registerEventId);

    return true;

  }
}
