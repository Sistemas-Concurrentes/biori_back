import { Controller, HttpCode, HttpStatus, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ConsultUsecase } from '../use_cases/consult.usecase';

@Controller('releases')
export class ReleasesEntrypoint {
  constructor (private consultUseCase: ConsultUsecase) {}

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('getAll')
  async getAll (){
    this.consultUseCase.run();
    return null;
  }

}