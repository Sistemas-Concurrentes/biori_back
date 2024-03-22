import { Controller, HttpCode, HttpStatus, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';

@Controller('releases')
export class ReleasesEntrypoint {
  constructor () {}

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('getAll')
  async getAll (@Request() request: any){
    return null;
  }

}