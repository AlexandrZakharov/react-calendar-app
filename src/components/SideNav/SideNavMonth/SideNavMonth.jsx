const SideNavMonth = (props) => {
  const setCurrentDate = () => {
    props.setCurrentDate(new Date(2020, props.month.id));
  };
  return <div onClick={setCurrentDate}>{props.month.title}</div>;
};

export default SideNavMonth;
