import SideNavMonth from "./SideNavMonth/SideNavMonth";
import style from './SideNav.module.css'; 

const SideNav = (props) => {

  return (
    <div className={style.SideNav}>
      {props.months.map((month, i) => {
        return <SideNavMonth key={i} setCurrentDate={props.setCurrentDate} month={month} />
      })}
    </div>
  );
};

export default SideNav;
