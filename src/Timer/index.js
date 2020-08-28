import React, { useEffect, useState } from 'react';
import { TimerHeader } from "./styled"

const Timer = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
                setCurrentDate(new Date());
        }, 1000);
    }, []);

    return (
        <TimerHeader>
            Dzisiaj jest
            {" "}
            {currentDate.toLocaleString(
                'pl',
                {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                })
            }
        </TimerHeader>
    )
};

export default Timer;