import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CurrentMonthContainer from './components/CurrentMonth/CurrentMonthContainer';
import SideNavContainer from './components/SideNav/SideNavContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SideNavContainer />
        <CurrentMonthContainer />
      </Provider>
    </div>
  );
}

export default App;
