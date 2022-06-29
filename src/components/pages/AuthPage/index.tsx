import classNames from 'classnames';
import { Link } from 'react-router-dom';
// import { Form, Input } from 'antd';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import style from './AuthPage.module.scss';

const AuthPage = () => (
  <section className={classNames(style['page-section'], style['section-auth'])}>
    <div className={style['section-auth__wrapper']}>
      <div className={style['section-auth__window']}>
        <h3>Hello, world!</h3>
        <span className={style['section-auth__description']}>Пройдите авторизацию</span>
        <div className={style['section-auth__control']}>
          <Link to="/reg">Регистрация</Link>
          <Link to="/auth">Авторизация</Link>
        </div>
        <Form>
          <Input title="Email" id="1" placeholder=" " />
          <Input title="Пароль" id="1" placeholder=" " type="password" />
          <Link to="/get-pass">Забыли пароль?</Link>
          <button className={style['section-auth__submit']} type="submit">
            Войти
          </button>
        </Form>
      </div>
    </div>
  </section>
);

export default AuthPage;
