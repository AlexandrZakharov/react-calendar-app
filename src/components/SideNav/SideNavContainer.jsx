import {connect} from 'react-redux';
import SideNav from './SideNav';
import { setCurrentDate } from './../../redux/reducers/months';

const mapStateToProps = state => {
    return {
        months: state.month.months,
        currentDate: state.month.currentDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentDate: (date) => {
            dispatch(setCurrentDate(date))
        }
    }
}

const SideNavContainer = connect(mapStateToProps, mapDispatchToProps)(SideNav)
export default SideNavContainer;