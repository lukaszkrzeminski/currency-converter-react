import React, { useEffect, useState } from 'react';
import "./style.css";

const Timer = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
                setCurrentDate(new Date());
        }, 1000);
    }, []);

    return (
        <p className="header__timer">
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
        </p>
    )
};

export default Timer;