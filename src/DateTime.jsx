import React, { useEffect, useState } from 'react'

const DateTime = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

 
    useEffect(() => {
       
        const interval = setInterval(() => {
            const date = new Date();
            const fulldate = date.toLocaleDateString();
            setDate(fulldate)
            setTime(date.toLocaleTimeString())
        }, 1000)
        // below is cleanup function in useEffect --- 

        return () => clearInterval(interval)
    }, [])


  return (
    <>
      <h2 className='date-time'><span>{date}</span> <span>{time}</span></h2>
    </>
  )
}

export default DateTime
