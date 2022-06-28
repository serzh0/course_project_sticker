import classNames from 'classnames';
// import { Form, Input } from 'antd';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => (
  <section className={classNames(style['page-section'], style['section-reg'])}>
    <div className={style['section-reg__wrapper']}>
      <div className={style['section-reg__window']}>
        <h3>Hello, world!</h3>
        <span>Создайте аккаунт</span>
        <div className={style['section-reg__control']}>
          <button className={style['section-reg__btn-reg']} type="button">
            Регистрация
          </button>
          <button className={style['section-reg__btn-auth']} type="button">
            Авторизация
          </button>
        </div>
        <Form>
          <Input title="Имя" id="1" placeholder=" " />
          <Input title="Фамилия" id="1" placeholder=" " />
          <Input title="Email" id="1" placeholder=" " />
          <Input title="Пароль" id="1" placeholder=" " type="password" />
          <Input title="Повторите пароль" id="1" placeholder=" " type="password" />
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

export default RegistrationPage;
