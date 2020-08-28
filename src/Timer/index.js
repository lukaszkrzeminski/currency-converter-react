import React from 'react';
import { TimerHeader } from "./styled"
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (currentDate) => currentDate.toLocaleString(undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

const Timer = () => {
    const currentDate = useCurrentDate();
    return (
        <TimerHeader>
            Dzisiaj jest
            {" "}
            {formatDate(currentDate)}
        </TimerHeader>
    )
};

export default Timer;