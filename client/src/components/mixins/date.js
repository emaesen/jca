/**
 * mixin with date methods - ported from my productivity app
 */
      
const NRMILLISECINMINUTE = 1000 * 60;
const NRMILLISECINHOUR = NRMILLISECINMINUTE * 60;
const NRMILLISECINDAY = NRMILLISECINHOUR * 24;

const names = {
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};

export default {
  data () {
    return {
      // properties to add to the importer of this mixin

    }
  },

  methods: {
    firstDateOfMonth(date) {
      if (!date) date = new Date();
      return new Date(date.getFullYear(), date.getMonth(), 1);
    },

    lastDateOfMonth(date) {
      if (!date) date = new Date();
      return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    },

    shiftMonth(date, shift) {
      return new Date(date.setMonth(date.getMonth() - shift));
    },

    startOfWeek(date, firstDay = 0) {
      firstDay = firstDay < 0 || firstDay > 6 ? 0 : firstDay;
    
      let day = date.getDay();
      let weekStart = new Date(date);
    
      let diff = weekStart.getDate() - day + ((day === 0 ? -7 : 0) + firstDay);
      weekStart.setDate(diff);
    
      return weekStart > date
        ? weekStart.setDate(weekStart.getDate() - 7)
        : weekStart;
    },

    calendarMonth(startDate, firstDay = 1) {
      let month = [];
      let today = new Date().setHours(0, 0, 0, 0);
      startDate = startDate || new Date();
      let calendarDate = this.startOfWeek(startDate, firstDay);
      for (let weekNr = 0; weekNr < 6; weekNr++) {
        let week = [];
    
        for (let day = 0; day < 7; day++) {
          week.push({
            weekDay: day,
            date: calendarDate,
            isSunday: day === 0,
            isSaturday: day === 6,
            isWeekend: day === 0 || day === 6,
            monthDay: calendarDate.getDate(),
            isPast: calendarDate.getTime() < today,
            isToday: calendarDate.getTime() === today,
            isCurrentMonth: calendarDate.getMonth() === startDate.getMonth()
          });
    
          let nextDay = calendarDate.getDate() + 1;
          calendarDate = new Date(
            calendarDate.getFullYear(),
            calendarDate.getMonth(),
            nextDay,
            0,
            0,
            0
          );
        }
    
        month.push(week);
      }
    
      return month;
    },

    padZeros(n, td) {
      var ns = n.toString(),
        l = ns.length,
        z = "";
      if (td > l) {
        for (var i = l; i < td; i++) {
          z += "0";
        }
      }
      return z + ns;
    },

    yyyy_mm_dd(date) {
      // return a yyyy-mm-dd string for date object
      return date == null
        ? null
        : date.getFullYear() +
            "-" +
            this.padZeros(date.getMonth() + 1, 2) +
            "-" +
            this.padZeros(date.getDate(), 2);
    },

    yyyymmdd(date) {
      // return a yyyymmdd string for date object (or yyyy-mm-dd date string)
      return date == null
        ? null
        : typeof date === "string"
          ? date.replace(/-/g, "")
          : date.getFullYear() +
            this.padZeros(date.getMonth() + 1, 2) +
            this.padZeros(date.getDate(), 2);
    },

    ensureDate(date, type) {
      if(typeof date === "string") {
        if (type==="time") {
          date = new Date("2000-01-01" + "T" + date);
        } else {
          date = new Date(date);
        }
      }
      return date;
    },

    formattedDate(date, opts) {
      date = date || new Date();
      date = this.ensureDate(date);
      let weekdayStr;
      let monthStr;
      let dayNrStr = date.getDate();
      let yearStr = date.getFullYear();
      let dateStr = "";
      if (opts.shortForm) {
        weekdayStr = names.daysShort[date.getDay()];
        monthStr = names.monthsShort[date.getMonth()];
      } else {
        weekdayStr = names.days[date.getDay()];
        monthStr = names.months[date.getMonth()];
      }
      if (opts.obj) {
        return { weekdayStr, monthStr, dayNrStr, yearStr }
      } else {
        dateStr = weekdayStr + ", " + monthStr + " " + dayNrStr;
        if (opts.showYear) {
          dateStr += ", " + date.getFullYear();
        }
        return dateStr;
      }
    },

    formattedTime(date, opts) {
      date = date || new Date();
      date = this.ensureDate(date, "time");
      let hours = date.getHours();
      let ampmStr;
      let timeStr;
      if (opts.ampm) {
        ampmStr = hours > 12 ? "PM" : "AM";
        if (hours > 12) {
          hours = hours - 12;
        }
      }
      timeStr = hours + ":" + this.padZeros(date.getMinutes(), 2);
      if (opts.seconds) {
        timeStr += ":" + this.padZeros(date.getSeconds(), 2);
      }
      if (opts.ampm) {
        if (opts.obj) {
          return { timeStr, ampmStr };
        } else {
          return timeStr + " " + ampmStr;
        }
      } else {
        return timeStr;
      }
    },

    dateObj(obj) {
      // return Date object for obj:{date, time} object
      if (obj.time) {
        return new Date(obj.date + "T" + obj.time);
      } else {
        return new Date(obj.date + "T00:00:00");
      }
    },

    dayDiff(d1, d2) {
      // d1 and d2 must be date objects
      if (typeof d1.getTime === "function" && typeof d2.getTime === "function") {
        let d1clone = new Date(d1.getTime());
        let d2clone = new Date(d2.getTime());
        return (
          (d1clone.setHours(0, 0, 0, 0) - d2clone.setHours(0, 0, 0, 0)) /
          NRMILLISECINDAY
        );
      } else {
        return null;
      }
    },

    timeDiff(d1, d2) {
      // d1 and d2 must be date objects
      if (typeof d1.getTime === "function" && typeof d2.getTime === "function") {
        return d1.getTime() - d2.getTime();
      } else {
        return null;
      }
    },

    upcomingDate(dateAttr) {
      // dateAttr: { date: 'yyyy-mm-dd', time: 'hh:mm', weekdays: [daynr{1,7}], startDate:'yyyy-mm-dd' }
      let today = new Date();
      let startDate = dateAttr.startDate
        ? new Date(dateAttr.startDate + "T00:00:00")
        : today;
      if (this.timeDiff(startDate, today) < 0) {
        startDate = today;
      }
      let timeArr = dateAttr.time.split(":");
      let skipToday =
        startDate.getHours() >= 1 * timeArr[0] &&
        60 * startDate.getHours() + startDate.getMinutes() >=
          60 * timeArr[0] + 1 * timeArr[1];
      let dayOfTheWeek = startDate.getDay();
      let offset = skipToday ? 1 : 0;
      // taking into account the time of the day (offset),
      // find the lowest number that's higher or equal than the current day number (relMin)
      // -as well as- the lowest number overall (min)
      let wdMins = dateAttr.weekdays.reduce(
        (result, current) => {
          let min = current < result.min ? current : result.min;
          let relMin =
            current < result.relMin && current - offset >= dayOfTheWeek
              ? current
              : result.relMin;
          return { min, relMin };
        },
        { min: 99, relMin: 99 }
      );
      // if a relMin was found, we use that relMin,
      // else we use min (because we need to cycle past the end of the week)
      let reminderWeekday = wdMins.relMin === 99 ? wdMins.min : wdMins.relMin;
      let dayDelta = reminderWeekday - dayOfTheWeek;
      if (dayDelta < 0) dayDelta = dayDelta + 7;
      let nextReminderDate = new Date();
      nextReminderDate.setDate(startDate.getDate() + dayDelta);
      nextReminderDate.setHours(timeArr[0], timeArr[1], 0, 0);
    
      return nextReminderDate;
    },

  },
}

