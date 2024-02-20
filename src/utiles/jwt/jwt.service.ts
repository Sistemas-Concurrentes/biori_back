import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MyJwtService {

  constructor(private jwtService: JwtService) {}
  getAccessToken(datos: string ): string {
    const payload = { data: datos };
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string): boolean {
    try {
      this.jwtService.verify(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  getUserName(token: string): string {
    const payload = this.jwtService.decode(token);
    return payload['data'];
  }

}
