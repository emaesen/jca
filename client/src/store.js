import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timeTick: new Date().getTime(),
    calendar: {
      today: null,
      month: {
        start: null,
        end: null
      },
      dayInFocus: null,
      dateRange: {
        start: null,
        end: null
      }
    },
  },
  getters: {
    timeTick: state => state.timeTick,
    calendar: state => state.calendar
  },
  mutations: {
    // can be used directly for synchronous events
    SET_TIME_TICK: (state, tick) => (state.timeTick = tick),
    SET_CALENDAR_MONTH: (state, payload) => {
      state.calendar.month.start = payload.start;
      state.calendar.month.end = payload.end;
    },
    SET_CALENDAR_DATERANGE: (state, payload) => {
      state.calendar.dateRange.start = payload.start;
      state.calendar.dateRange.end = payload.end;
    },
    SET_CALENDAR_DAYINFOCUS: (state, day) => {
      state.calendar.dayInFocus = day;
    },
    SET_CALENDAR_TODAY: (state, day) => {
      state.calendar.today = day;
    },
  },
  actions: {
  }
})
