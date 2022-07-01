import { Route, Routes } from 'react-router-dom';
import OpenedAdContainer from './containers/OpenedAdContainer';
import GetPasswordContainer from './containers/GetPasswordContainer';
import ProfileAdsContainer from './containers/ProfileAdsContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import ErrorContainer from './containers/ErrorContainer';
import SearchResultContainer from './containers/SearchResultContainer';
import AuthContainer from './containers/AuthContainer';
import MainContainer from './containers/MainContainer';
import PageWrapper from './components/common/PageWrapper';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="auth" element={<AuthContainer />} />
      <Route path="reg" element={<RegistrationContainer />} />
      <Route path="search" element={<SearchResultContainer />} />
      <Route path=":id" element={<OpenedAdContainer />} />
      <Route path="profile-ads" element={<ProfileAdsContainer />} />
      <Route path="get-pass" element={<GetPasswordContainer />} />
      <Route path="*" element={<ErrorContainer />} />
    </Route>
  </Routes>
);

export default App;
