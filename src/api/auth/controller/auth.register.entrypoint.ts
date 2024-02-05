import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterUsecase } from '../use_cases/register.usecase';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthRegisterEntrypoint {
  constructor (private registerUsecase: RegisterUsecase) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register (@Body() registerDto: RegisterDto){
    return await this.registerUsecase.run(registerDto);
  }

}