export default class Gigasecond {
  startDate: Date;

  constructor(startDate: Date) {
    this.startDate = startDate;
  }

  date(): Date {
    return new Date(this.startDate.getTime() + 1e12);
  }
}
