import React, { useEffect, useState, useRef } from "react";
import "./CountDown.css";


const CountDown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef(null);

    const startTimer = () => {
        const countDownDate = new Date('Nov 11, 2024 00:00:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <section className="countdown-container">
           <div classname="border-grad"> <div className="countdown-header">
            <picture>
                    <source media="(max-width: 768px)" srcSet="/images/small.png" />
                    <img src="/images/large.png" alt="IEEE Week 2024" className="countdown-image" />
                </picture>
                <h3 className="ieee-week-dates">11th to 15th November</h3>
            </div>
            <section className="timer-container1">
                <section className="timer">
                    <div className="timer-body">
                        <section className="HENRY">
                            <p>{timerDays}</p>
                            <p><small>Days</small></p>
                        </section>
                        <span>:</span>
                        <section className="HENRY">
                            <p>{timerHours}</p>
                            <p><small>Hours</small></p>
                        </section>
                        <span>:</span>
                        <section className="HENRY">
                            <p>{timerMinutes}</p>
                            <p><small>Minutes</small></p>
                        </section>
                        <span>:</span>
                        <section className="HENRY">
                            <p>{timerSeconds}</p>
                            <p><small>Seconds</small></p>
                        </section>
                    </div>
                </section>
            </section>
            </div>
        </section>
    ); 
};

export default CountDown;
