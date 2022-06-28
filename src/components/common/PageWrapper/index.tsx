import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <main className="container">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
