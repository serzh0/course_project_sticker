import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
// import { Form, Input } from 'antd';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const submitHandler = () => {
    if (password.length > 8 && email.length > 6) {
      setHasError(false);
      console.log({ userInfo: email, password });
    } else {
      setHasError(true);
      console.log('Error log');
    }
  };
  useEffect(() => {
    if (email.length > 6 && password.length > 10) {
      setHasError(false);
    } else if (email.length > 0 && password.length > 0) {
      setHasError(true);
    }
  }, [email, password]);

  return (
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
            <Input title="Email" id="email" value={email} setValue={setEmail} />
            {email && hasError && (
              <div className={style['section-auth__hasError']}>
                <span>Email должен быть больше 6 символов</span>
              </div>
            )}
            <Input
              title="Пароль"
              id="password"
              type="password"
              value={password}
              setValue={setPassword}
            />
            {password && hasError && (
              <div className={style['section-auth__hasError']}>
                <span>Пароль должен быть больше 8 символов</span>
              </div>
            )}
            <Link to="/get-pass">Забыли пароль?</Link>
            <button onClick={submitHandler} className={style['section-auth__submit']} type="button">
              Войти
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
