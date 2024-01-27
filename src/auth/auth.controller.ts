import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dto/sing_in.dto';

@Controller('auth')
export class AuthController {
  constructor (private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async singIn (@Body() singInDto: SingInDto){
    return await this.authService.singIn(singInDto.user_name, singInDto.password);
  }

}
