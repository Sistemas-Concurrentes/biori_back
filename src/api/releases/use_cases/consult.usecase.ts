import { Injectable } from '@nestjs/common';
import {
  Notices,
  ConsultResult,
  Report,
  Event,
  EventGroup,
} from './dto/consult.result';
import {
  NoticeTable,
} from '../../../datasource/db/noticetable/noticetable.usecase';
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

  constructor(
    private noticeTable: NoticeTable,
              private reportTable: ReportTable,
              private eventTable: EventTable) {}

  async run(): Promise<ConsultResult> {
    this.allEvents = await this.eventTable.getAll();

    const allNotices = await this.getNotices();
    const allReports= await this.getReports()
    await this.getEvents();

    const result: ConsultResult = {
      notices: allNotices,
      reports: allReports,
      events: this.allGeneralEvents,
      eventsGroup: this.allGroupEvents,
    };

    this.resetEvents();

    return result;
  }

  async getNotices(): Promise<Notices[]> {
    const allNotices = await this.noticeTable.getAll();
    return allNotices.map((advertisement) => {
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
        userName: report.userName,
        userId: report.userId,
        courses: report.courses,
        toTeachers: report.to_teachers,
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
