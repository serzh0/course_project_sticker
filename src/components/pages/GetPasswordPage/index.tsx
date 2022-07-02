import classNames from 'classnames';
import { useState } from 'react';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import style from './GetPasswordPage.module.scss';

const GetPasswordPage = () => {
  const [email, setEmail] = useState('');
  return (
    <section className={classNames(style['page-section'], style['section-password'])}>
      <div className={style['section-password__wrapper']}>
        <div className={style['section-password__window']}>
          <h3>Восстановление пароля</h3>
          <div className={style['section-password__progress']}>
            <div className={style['section-password__stage']}>
              <div className={style['stage-number']}>1</div>
              <div className={style['stage-text']}>Проверка почты</div>
            </div>
            <div className={style['section-password__stage']}>
              <div className={style['stage-number']}>2</div>
              <div className={style['stage-text']}>Восстановление пароля</div>
            </div>
          </div>
          <Form>
            <Input title="Email" id="email" value={email} setValue={setEmail} />
            <button className={style['section-password__submit']} type="submit">
              Выслать ссылку
            </button>
            <span className={style['section-password__agreement']}>
              Выполняя вход в сервис, вы подтверждаете, что ознакомились с документами
              <a href="#!"> «политика конфидициальности»</a>,
              <a href="#!"> «согласие на обработку персональных данных»</a> и
              <a href="#!"> «пользовательское соглашение»</a> и согласны с ними.
            </span>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default GetPasswordPage;
