import { connect } from "react-redux";
import { setCurrentDate } from './../../redux/reducers/months';
import CurrentMonth from './CurrentMonth';

const mapStateToProps = (state) => {

  return {
    currentDate: state.month.currentDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDate: date => {
      dispatch(setCurrentDate(date))
    }
  };
};

const CurrentMonthContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentMonth);

export default CurrentMonthContainer;
