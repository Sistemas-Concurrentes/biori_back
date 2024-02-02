import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SingInDto } from '../dto/sing_in.dto';
import { LoginUsecase } from '../use_cases/login.usecase';

@Controller('auth')
export class AuthLoginEntrypoint {
  constructor (private loginUseCase: LoginUsecase) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async singIn (@Body() singInDto: SingInDto){
    return await this.loginUseCase.run(singInDto.user_name, singInDto.password);
  }

}