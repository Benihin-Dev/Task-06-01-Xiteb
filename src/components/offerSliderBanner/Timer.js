import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

export default function Timer({ endDate }) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateRemainingTime = () => {
    const difference = endDate - currentTime;
    return difference > 0 ? difference : 0;
  };

  const renderTimer = ({ days, hours, minutes, seconds }) => {
    const daysStr = days > 0 ? `${days}d ` : "";
    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    return (
      <div className="timer-container flex my-3 gap-2 cursor-default font-semibold text-gray-700">
        <span className=" px-2 rounded bg-white">{daysStr}</span>
        <span className=" px-2 rounded bg-white">{hoursStr}</span>
        <span className=" text-white">:</span>
        <span className=" px-2 rounded bg-white">{minutesStr}</span>
        <span className=" text-white">:</span>
        <span className=" px-2 rounded bg-white w-fit">{secondsStr}</span>
      </div>
    );
  };

  const remainingTime = calculateRemainingTime();

  return (
    <div>
      {remainingTime > 0 ? (
        <Countdown date={endDate} renderer={renderTimer} />
      ) : (
        <p className="timer-expired px-2 rounded bg-white">Offer Expired</p>
      )}
    </div>
  );
}
