const SET_CURRENT_DATE = "SET_CURRENT_DATE";

const initialState = {
  months: [
    {
      title: "January",
      id: 0,
    },
    {
      title: "February",
      id: 1,
    },
    {
      title: "March",
      id: 2,
    },
    {
      title: "April",
      id: 3,
    },
    {
      title: "May",
      id: 4,
    },
    {
      title: "June",
      id: 5,
    },
    {
      title: "July",
      id: 6,
    },
    {
      title: "August",
      id: 7,
    },
    {
      title: "September",
      id: 8,
    },
    {
      title: "October",
      id: 9,
    },
    {
      title: "November",
      id: 10,
    },
    {
      title: "December",
      id: 11,
    },
  ],
  currentDate: {
    year: undefined,
    month: {
      id: undefined,
      title: "",
    },
    currentDay: undefined,
    firstDayInMonth: undefined,
    days: undefined,
  },
};

const monthsReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case SET_CURRENT_DATE:
      return {
        ...state,
        currentDate: {
          year: action.date.getFullYear(),
          month: {
            id: action.date.getMonth(),
            title: state.months.filter(
              (month) => month.id === action.date.getMonth()
            )[0].title,
          },
          currentDay:
            action.date.getFullYear() === new Date().getFullYear() &&
            action.date.getMonth() === new Date().getMonth()
              ? new Date().getDate()
              : undefined,
          days: new Date(
            action.date.getFullYear(),
            action.date.getMonth() + 1,
            0
          ).getDate(),
          firstDayInMonth:
            new Date(
              action.date.getFullYear(),
              action.date.getMonth(),
              1
            ).getDay() === 0
              ? 7
              : new Date(
                  action.date.getFullYear(),
                  action.date.getMonth(),
                  1
                ).getDay(),
        },
      };
    default:
      return state;
  }
};

// Action creators
export const setCurrentDate = (date) => {
  return {
    type: SET_CURRENT_DATE,
    date: date,
  };
};

export default monthsReducer;
