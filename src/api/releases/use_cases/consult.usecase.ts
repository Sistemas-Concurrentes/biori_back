import { Injectable } from '@nestjs/common';
import { ConsultResult } from './dto/consult.result';
import { Advertisementtable } from '../../../datasource/db/advertisementtable/advertisementtable.usecase';
import { ReportTable } from '../../../datasource/db/reporttable/reporttable.usecase';
import { EventTable } from '../../../datasource/db/eventtable/eventtable.usecase';


@Injectable()
export class ConsultUsecase {

  constructor(private advertisementTable: Advertisementtable,
              private reportTable: ReportTable,
              private eventTable: EventTable) {}

  async run(): Promise<ConsultResult> {
    const allAdvertisements= await this.advertisementTable.getAll();
    const allReports= await this.reportTable.getAll();
    const allEvents = await this.eventTable.getAll();

    return {
      advertisements: allAdvertisements.map((advertisement) => {
        return {
          id: advertisement.id,
          title: advertisement.title,
          description: advertisement.description,
          groups: advertisement.groups,
          userName: advertisement.userName,
          userId: advertisement.userId,
          updatedAt: advertisement.updatedAt
        }
      }),
      reports: allReports.map((report) => {
        return {
          id: report.id,
          title: report.title,
          description: report.description,
          teacherName: report.teacherName,
          teacherId: report.teacherId,
          updatedAt: report.updatedAt
        }
      }),
      events: allEvents.map((event) => {
        return {
          id: event.id,
          title: event.title,
          category: event.category,
          description: event.description,
          organiser: event.organiser,
          organiserName: event.organiserName,
          dates: event.dates,
          location: event.location,
          likes: event.likes,
          dateEndInscription: event.dateEndInscription,
          updatedAt: event.updatedAt
        }
      }),
    };

  }
}
