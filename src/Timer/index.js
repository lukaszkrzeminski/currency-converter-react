import React, { useEffect, useState } from 'react';
import "./style.css";

const Timer = () => {

    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
        setInterval(() => {
            const newDate = new Date().toLocaleString(
                'pl',
                {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                })
            setCurrentDate(newDate);
        }, 1000);
    }, []);

    return (
        <p className="header__timer">
            Dzisiaj jest {currentDate}
        </p>
    )
};

export default Timer;