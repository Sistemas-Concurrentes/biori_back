import { Injectable } from '@nestjs/common';
import {
  Advertisement,
  ConsultResult,
  Report,
  Event,
  EventGroup,
} from './dto/consult.result';
import { Advertisementtable } from '../../../datasource/db/advertisementtable/advertisementtable.usecase';
import { ReportTable } from '../../../datasource/db/reporttable/reporttable.usecase';
import { EventTable } from '../../../datasource/db/eventtable/eventtable.usecase';
import {
  EventModel,
} from '../../../datasource/db/eventtable/model/event.model';


@Injectable()
export class ConsultUsecase {
  allEvents: EventModel[] = [];
  allGeneralEvents: Event[] = [];
  allGroupEvents: EventGroup[] = [];

  constructor(private advertisementTable: Advertisementtable,
              private reportTable: ReportTable,
              private eventTable: EventTable) {}

  async run(): Promise<ConsultResult> {
    this.allEvents = await this.eventTable.getAll();

    const allAdvertisements = await this.getAdvertisents();
    const allReports= await this.getReports()
    await this.getEvents();

    const result: ConsultResult = {
      advertisements: allAdvertisements,
      reports: allReports,
      events: this.allGeneralEvents,
      eventsGroup: this.allGroupEvents,
    };

    this.resetEvents();

    return result;
  }

  async getAdvertisents(): Promise<Advertisement[]> {
    const allAdvertisements= await this.advertisementTable.getAll();
    return allAdvertisements.map((advertisement) => {
      return {
        id: advertisement.id,
        title: advertisement.title,
        description: advertisement.description,
        groups: advertisement.groups,
        userName: advertisement.userName,
        userId: advertisement.userId,
        updatedAt: advertisement.updatedAt
      }
    });
  }

  async getReports(): Promise<Report[]> {
    const allReports= await this.reportTable.getAll();
    return allReports.map((report) => {
      return {
        id: report.id,
        title: report.title,
        description: report.description,
        teacherName: report.teacherName,
        teacherId: report.teacherId,
        updatedAt: report.updatedAt
      }
    });
  }

  async getEvents() {
    this.allEvents.map((event) => {
      if (event.tags.length > 0) {
        this.allGeneralEvents.push({
          id: event.id,
          title: event.title,
          category: event.category,
          description: event.description,
          organiser: event.organiser,
          organiserName: event.organiserName,
          dates: event.dates,
          location: event.location,
          likes: event.likes,
          tags: event.tags,
          dateEndInscription: event.dateEndInscription,
          updatedAt: event.updatedAt,
        });
      } else if (event.groups.length > 0) {
        this.allGroupEvents.push({
          id: event.id,
          title: event.title,
          category: event.category,
          description: event.description,
          organiser: event.organiser,
          organiserName: event.organiserName,
          dates: event.dates,
          location: event.location,
          likes: event.likes,
          groups: event.groups,
          dateEndInscription: event.dateEndInscription,
          updatedAt: event.updatedAt,
        });
      }
    });
  }

  resetEvents() {
    this.allEvents = [];
    this.allGeneralEvents = [];
    this.allGroupEvents = [];
  }
}
