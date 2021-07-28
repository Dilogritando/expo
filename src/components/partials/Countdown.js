import '../../styles/hero.scss'
import React, { useRef, useState, useEffect } from 'react'

export default function Countdown () {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMins, setTimerMins] = useState("00");

    let interval = useRef();
    const startTimer = () => {
        const deadline = new Date("August 10, 2021 00:00:00").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = deadline -now;
            const days = Math.floor((diff / (1000 * 60 * 60 * 24)))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24) /(1000*60*60)))
            const mins = Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)))
            if (diff < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMins(mins)
            }
        }, 1000)
    };
    useEffect(()=>{
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    });

    return (
        <div className="hero__countdown__component">
            <div className="timer">
                <span id="day">{timerDays}</span>
                <p className="format">DAYS</p>
            </div>
            <div className="timer">
                <span id="hr">{timerHours}</span>
                <p className="format">HRS</p>
            </div>
            <div className="timer">
                <span id="min">{timerMins}</span>
                <p className="format">MIN</p>
            </div>
        </div>
    )
}
