import React, {useEffect, useState, useRef} from "react";
import "./CountDown.css";
const CountDown = () => {
    const  [timerDays, setTimerDays] = React.useState('00');
    const  [timerHours, setTimerHours] = React.useState('00');
    const  [timerMinutes, setTimerMinutes] = React.useState('00');
    const  [timerSeconds, setTimerSeconds] = React.useState('00');

    let interval = useRef();

    const startTimer = () =>{
        const  countDownDate = new Date('Nov 11, 2024 00:00:00').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const  distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000*60*60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)/(1000*60)));
            const seconds = Math.floor((distance % (1000 * 60)/(1000)));

            if(distance < 0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        },1000);
    }

    useEffect(() => {
        startTimer();
        return() =>{
            clearInterval(interval.current);
        };
    });
    return ( 
        <section className="timer-container">
            <section className="timer">
                <div>
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
     );
}
 
export default CountDown;