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
  StudentRegisteredTableModule,
} from '../../../../../datasource/db/student_registeredtable/student_registeredtable.module';

@Module({
  imports: [
    LikesModule,
    StudentModule,
    StudentRegisteredTableModule,
    RegisteredTableModule,

  ],
  controllers: [],
  providers: [
    LikeUsecase,
    SubscribeUsecase],
  exports: [
    LikeUsecase,
    SubscribeUsecase,
  ],
})
export class UserInteractionUsecaseModule {
}
