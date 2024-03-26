import { Injectable } from '@nestjs/common';
import { ConsultResult } from './dto/consult.result';
import { Advertisementtable } from '../../../datasource/db/advertisementtable/advertisementtable.usecase';
import { AdvertisementModel } from '../../../datasource/db/advertisementtable/model/advertisement.model';


@Injectable()
export class ConsultUsecase {

  constructor(private advertisementTable: Advertisementtable) {}

  async run(): Promise<ConsultResult> {
    const advertisements: Array<AdvertisementModel> = await this.advertisementTable.getAll();
    // recoger datos de advertisement
    // recoger los grupos de advertisement
    // crear ConsultResult
    return null;

  }
}
