import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Form, Input } from 'antd';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLatsName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  return (
    <section className={classNames(style['page-section'], style['section-reg'])}>
      <div className={style['section-reg__wrapper']}>
        <div className={style['section-reg__window']}>
          <h3>Hello, world!</h3>
          <span className={style['section-reg__description']}>Создайте аккаунт</span>
          <div className={style['section-reg__control']}>
            <Link to="/reg">Регистрация</Link>
            <Link to="/auth">Авторизация</Link>
          </div>
          <Form>
            <Input title="Имя" id="name" value={name} setValue={setName} />
            <Input title="Фамилия" id="lastname" value={lastName} setValue={setLatsName} />
            <Input title="Email" id="email" value={email} setValue={setEmail} />
            <Input
              title="Пароль"
              id="password"
              type="password"
              value={password}
              setValue={setPassword}
            />
            <Input
              title="Повторите пароль"
              id="repeatPassword"
              type="password"
              value={repeatPassword}
              setValue={setRepeatPassword}
            />
            <label className={style['section-reg__checkbox']} htmlFor="check">
              <input id="check" className={style.checkbox__input} type="checkbox" />
              <span className={style.checkbox__text}>
                Принимаю условия
                <a href="#!">Пользовательского соглашения</a>
              </span>
            </label>
            <button className={style['section-reg__submit']} type="submit">
              Создать аккаунт
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
