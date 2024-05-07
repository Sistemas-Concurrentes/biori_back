import {Module} from '@nestjs/common';
import {LikeUsecase} from './like.usecase';
import {
  LikesModule,
} from '../../../../../datasource/db/liketable/liketable.module';
import {
  StudentModule,
} from '../../../../../datasource/db/studenttable/studenttable.module';

@Module({
  imports: [
    LikesModule,
    StudentModule,
  ],
  controllers: [],
  providers: [
    LikeUsecase],
  exports: [
    LikeUsecase,
  ],
})
export class UserInteractionUsecaseModule {
}
