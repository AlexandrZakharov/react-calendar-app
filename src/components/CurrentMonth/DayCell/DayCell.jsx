import style from "./DayCell.module.css";

const DayCell = (props) => {
  const classes =
    props.currentDay === props.day
      ? `${style.dayCell} ${style.dayCellActive}`
      : `${style.dayCell}`;
  if (props.currentDay === props.day) {
  }
  return (
    <div className={classes}>{props.day}</div>
  );
};

export default DayCell;
