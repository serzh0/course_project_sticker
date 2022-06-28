import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Search from '../Search';
import style from './Header.module.scss';
// import logo from '../../../images/logo.svg';

const Header = () => (
  <header className={style['page-header']}>
    <div className={classNames(style['page-header__menu'], 'container')}>
      <Link to="/">
        <img src="images/logo.svg" alt="logo" />
      </Link>
      <Search />
      <a className={style['add-ad']} href="#!">
        Подать объявление
      </a>
      <div className={style['page-header__login']}>
        <img src="images/login.svg" alt="login" />
        <Link to="/auth">Войти</Link>
      </div>
    </div>
  </header>
);

export default Header;
