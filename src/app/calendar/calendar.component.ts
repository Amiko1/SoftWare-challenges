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
    const startDate = new Date(year, month, 1); // Start from the 1st day of the month
    const endDate = new Date(year, month + 1, 0); // End on the last day of the month

    const dates = [];
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      dates.push(new Date(date)); // Push a new date object to avoid mutating the original date
    }
    return dates;
  }
}
