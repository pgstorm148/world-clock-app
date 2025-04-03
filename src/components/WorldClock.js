// src/components/WorldClock.js
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

function WorldClock({ timezone, timeFormat, dateFormat }) {
    const [time, setTime] = useState(moment().tz(timezone).format(timeFormat));
    const [date, setDate] = useState(moment().tz(timezone).format(dateFormat));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().tz(timezone).format(timeFormat));
            setDate(moment().tz(timezone).format(dateFormat));
        }, 1000);

        return () => clearInterval(interval);
    }, [timezone, timeFormat, dateFormat]);

    return (
        <div>
            {timezone}: {time} ({date})
        </div>
    );
}

export default WorldClock;
