import {
  Controller,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get, Request,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ConsultUsecase } from '../use_cases/consult.usecase';

@Controller()
export class ReleasesEntrypoint {
  constructor(
      private consultUseCase: ConsultUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('getAll')
  async getAll(@Request() request: any) {
    return this.consultUseCase.run(request.id);
  }

}