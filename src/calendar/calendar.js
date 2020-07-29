import React, { useState } from "react"
import 'react-calendar/dist/Calendar.css'
import Calendar from "react-calendar"

const ReactCalendar = (props) => {
    const [date, setDate] = useState(new Date())

    const onClickDay = date => {
      setDate(date);
      props.updateDate(date);
    }
  
    return (
      <div>
        <Calendar onClickDay={onClickDay} value={date} locale="en-EN"/>
      </div>
    );
  };

export default ReactCalendar;