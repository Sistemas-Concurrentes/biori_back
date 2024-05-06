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
import {AddAdvertisementDto} from './dto/advertisement.dto';
import {AddReportDto} from './dto/report.dto';
import {AddAdvertisementUsecase} from '../use_cases/add_advertisement.usecase';
import {AddReportUsecase} from '../use_cases/add_report.usecase';

@Controller('releases')
export class ReleasesEntrypoint {
  constructor(
      private consultUseCase: ConsultUsecase,
      private addEventUseCase: AddEventUsecase,
      private addAdvertisementUseCase: AddAdvertisementUsecase,
      private addReportUseCase: AddReportUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('getAll')
  async getAll (){
    return this.consultUseCase.run();
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addEvent')
  async addEvent(@Body() addEventDto: AddEventDto, @Request() request: any) {
    return this.addEventUseCase.run(addEventDto, request.id);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addAdvertisement')
  async addAdvertisement(
      @Body() addAdvertisementDto: AddAdvertisementDto,
      @Request() request: any) {
    return this.addAdvertisementUseCase.run(addAdvertisementDto, request.id);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addReport')
  async addReport(@Body() addReportDto: AddReportDto, @Request() request: any) {
    return this.addReportUseCase.run(addReportDto, request.id);
  }
}