import classNames from 'classnames';
// import { Form, Input } from 'antd';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import style from './AuthPage.module.scss';

const AuthPage = () => (
  <section className={classNames(style['page-section'], style['section-auth'])}>
    <div className={style['section-auth__wrapper']}>
      <div className={style['section-auth__window']}>
        <h3>Hello, world!</h3>
        <span>Пройдите авторизацию</span>
        <div className={style['section-auth__control']}>
          <button className={style['section-auth__btn-reg']} type="button">
            Регистрация
          </button>
          <button className={style['section-auth__btn-auth']} type="button">
            Авторизация
          </button>
        </div>
        <Form>
          <Input title="Email" id="1" placeholder=" " />
          <Input title="Пароль" id="1" placeholder=" " type="password" />
          <a href="#!">Забыли пароль?</a>
          <button className={style['section-auth__submit']} type="submit">
            Войти
          </button>
        </Form>
      </div>
    </div>
  </section>
);

export default AuthPage;
