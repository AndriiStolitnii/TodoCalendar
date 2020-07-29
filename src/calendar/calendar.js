import React, { useState } from "react"
import 'react-calendar/dist/Calendar.css'
import Calendar from "react-calendar"

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date())

    const onClickDay = date => {
      setDate(date);
      console.log(date);
    }
  
    return (
      <div>
        <Calendar onClickDay={onClickDay} value={date} />
      </div>
    );
  };

export default ReactCalendar;