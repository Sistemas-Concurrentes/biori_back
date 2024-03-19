import { Injectable } from '@nestjs/common';
import { ConsultResult } from './dto/consult.result';


@Injectable()
export class ConsultUsecase {

  constructor() {}

  async run(): Promise<ConsultResult> {
    return null;

  }
}
