import classNames from 'classnames';
import style from './MainPage.module.scss';
import ButtonContent from '../../common/Buttons/ButtonContent';
import Card from '../../common/CardList/Card';
import CardList from '../../common/CardList';
import { data } from '../../../helpers';

const MainPage = () => (
  <>
    <section className={classNames(style['page-section'], style['section-description'])}>
      <div className={style['section-description__wrapper']}>
        <div className={style['section-description__text']}>
          <h1>Доска объявления</h1>
          <p>
            Находи тысячи разнообразных товаров и услуг от продавцов со всей страны. <br />
            Безопасные расчеты. Удобный сервис доставки
          </p>
        </div>
        <img src="/images/cart.png" alt="cart" />
      </div>
    </section>
    <section className={classNames(style['page-section'], style['section-content'])}>
      <div className={style['section-content__control']}>
        <ButtonContent title="Вся доска" />
        <ButtonContent title="Автомобили" />
        <ButtonContent title="Аксессуары" />
        <ButtonContent title="Мебель" />
        <ButtonContent title="Одежда" />
        <ButtonContent title="Спорт" />
        <ButtonContent title="Техника" />
        <ButtonContent title="Товары для дома" />
      </div>
      <h2>Вся лента</h2>
      <div className={style['card-list__wrapper']}>
        <CardList data={data} />
        <div className={style['section-content__load-wrapper']}>
          <button type="button" className={style['btn-load']}>
            <img src="/images/icon-reload.svg" alt="img-reload" />
            Загрузить еще
          </button>
        </div>
      </div>
    </section>
  </>
);

export default MainPage;
