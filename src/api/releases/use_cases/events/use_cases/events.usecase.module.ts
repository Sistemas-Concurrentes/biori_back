import {Module} from '@nestjs/common';
import {LikeUsecase} from './like.usecase';
import {
  LikesModule,
} from '../../../../../datasource/db/liketable/liketable.module';
import {
  StudentModule,
} from '../../../../../datasource/db/studenttable/studenttable.module';
import {
  RegisteredTableModule,
} from '../../../../../datasource/db/registeredtable/registeredtable.module';
import {SubscribeUsecase} from './subscribe.usecase';
import {
  UserRegisteredTableModule,
} from '../../../../../datasource/db/user_registeredtable/user_registeredtable.module';
import {AddEventUsecase} from './add_event.usecase';
import {
  EventtableModule,
} from '../../../../../datasource/db/eventtable/eventtable.module';
import {
  UsertableModule,
} from '../../../../../datasource/db/usertable/usertable.module';

@Module({
  imports: [
    LikesModule,
    StudentModule,
    UserRegisteredTableModule,
    RegisteredTableModule,
    EventtableModule,
    UsertableModule,
  ],
  controllers: [],
  providers: [
    AddEventUsecase,
    LikeUsecase,
    SubscribeUsecase],
  exports: [
    LikeUsecase,
    SubscribeUsecase,
    AddEventUsecase,
  ],
})
export class EventsUsecaseModule {
}
