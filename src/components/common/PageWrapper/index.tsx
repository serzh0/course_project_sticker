import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

type PageWrapperPropsType = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperPropsType> = ({ children }) => (
  <div className={style.page_wrapper}>
    <Header />
    <main className="container">{children}</main>
    <Footer />
  </div>
);

export default PageWrapper;
