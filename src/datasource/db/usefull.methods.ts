export class UsefullMethods {
  static dateTimeToBdFormat(date: Date): string {
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() +
        ' ' + date.getHours() + ':' + date.getMinutes() + ':' +
        date.getSeconds();
  }
}