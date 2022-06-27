import './App.css';
import OpenedAdComponent from './components/common/OpenedAdComponent';
// import OpenedAdContainer from './containers/OpenedAdContainer';
// import GetPasswordContainer from './containers/GetPasswordContainer';
// import ProfileAdsContainer from './containers/ProfileAdsContainer';
// import AuthContainer from './containers/AuthContainer';
// import RegistrationContainer from './containers/RegistrationContainer';
// import ErrorContainer from './containers/ErrorContainer';
// import SearchResultContainer from './containers/SearchResultContainer';
// import AuthContainer from './containers/AuthContainer';
// import MainContainer from './containers/MainContainer';

const App = () => (
  <OpenedAdComponent
    date="14 апреля 2022"
    title="Стиральная машина Bosch"
    price="22 500 Р"
    id="0000001"
    view="356"
    description="Стиральная машина в отличном состянии, чистая, без накипи.
    С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
  />
);

export default App;
