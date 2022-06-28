import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style['page-footer']}>
    <div className="container">
      <div className={style['page-footer__wrapper']}>
        <div className={style['page-footer__logo']}>
          <Link to="/">
            <img src="images/logo.svg" alt="logo" />
          </Link>
          <div />
          <Link to="/">Доска объявлений</Link>
        </div>
        <a className={style['page-footer__copyright']} href="#!">
          © ООО «Доска диджитал», 2022
        </a>
        <div className={style['page-footer__social']}>
          <ul className={style['social-list']}>
            <li className={style['social-list__item']}>
              <a href="#!">
                <img src="images/fb.svg" alt="facebook" />
              </a>
            </li>
            <li className={style['social-list__item']}>
              <a href="#!">
                <img src="images/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li className={style['social-list__item']}>
              <a href="#!">
                <img src="images/vk.svg" alt="vk" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
