import {
  Controller,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Body,
  Post,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ConsultUsecase } from '../use_cases/consult.usecase';
import {AddEventUsecase} from '../use_cases/add_event.usecase';
import {AddEventDto} from './dto/event.dto';

@Controller('releases')
export class ReleasesEntrypoint {
  constructor(
      private consultUseCase: ConsultUsecase,
      private addEventUseCase: AddEventUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('getAll')
  async getAll (){
    return this.consultUseCase.run();
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('addEvent')
  async addEvent(@Body() addEventDto: AddEventDto, @Request() request: any) {
    return this.addEventUseCase.run(addEventDto, request.id);
  }

}