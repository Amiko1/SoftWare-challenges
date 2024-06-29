import { Component } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  holidays = ['Saturday', 'Sunday'];
  date = new Date();

  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  getDatesInMonth(year: number, month: number): Date[] {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const dates = [];
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      dates.push(new Date(date));
    }
    return dates;
  }

  checkHoliday(dayNum: number) {
    const day = this.weekdays[dayNum];

    if (this.holidays.includes(day)) {
      return 'mark';
    }

    return '';
  }
}
