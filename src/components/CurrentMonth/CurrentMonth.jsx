import { useEffect } from "react";
import style from "./CurrentMonth.module.css";
import DayCell from "./DayCell/DayCell";

const CurrentMonth = (props) => {
  const setDayCells = () => {
    const cells = [];
    let numberOfCells =
      props.currentDate.firstDayInMonth - 1 + props.currentDate.days > 35
        ? 42
        : 35;
    for (let i = 1; i <= numberOfCells; i++) {
      cells.push("");
    }
    for (let i = 1; i <= props.currentDate.days; i++) {
      cells[props.currentDate.firstDayInMonth - 2 + i] = i;
    }
    return cells;
  };

  useEffect(() => {
    props.setCurrentDate(new Date());
  }, []);
  return (
    <div className={style.currentMonthWrapper}>
      <div className={style.currentMonthTitle}>
        {props.currentDate.month.title}
      </div>
      <div className={style.currentMonth}>
        {setDayCells().map((day, index) => {
          return (
            <DayCell
              key={index}
              day={day}
              currentDay={props.currentDate.currentDay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CurrentMonth;
