import React from 'react';
import {
  Calendar,
  Views,
  momentLocalizer,
  dateFnsLocalizer,
} from 'react-big-calendar';
import events from './events';
// import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enIN from 'date-fns/locale/en-IN';

// const localizer = momentLocalizer(moment);
const locales = {
  'en-IN': enIN,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  });

let MyCalendar = () => (
  <Calendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    defaultDate={new Date()}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
    style={{ height: 500 }}
  />
);

export default MyCalendar;
