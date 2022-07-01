import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Search from '../Search';
import style from './Header.module.scss';
// import logo from '../../../images/logo.svg';

const Header = () => (
  <header className={style['page-header']}>
    <div className={classNames(style['page-header__wrapper'], 'container')}>
      <Link to="/">
        <img src="images/logo.svg" alt="logo" />
      </Link>
      <Search />
      <Link to="/profile-ads" className={style['add-ad']}>
        Подать объявление
      </Link>
      <div className={style['page-header__menu-wrapper']}>
        <Link to="/auth" className={style['page-header__login']}>
          <img src="images/login.svg" alt="login" />
          <span>Войти</span>
        </Link>
        <button className={style['page-header__menu']} type="button">
          <img src="images/header-menu.svg" alt="menu" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;
