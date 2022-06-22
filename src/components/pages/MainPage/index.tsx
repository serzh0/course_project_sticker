import classNames from 'classnames';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';
import ButtonContent from '../../common/Buttons/ButtonContent';
import Card from '../../common/CardList/Card';
import CardList from '../../common/CardList';

const MainPage = () => (
  <PageWrapper>
    <section className={classNames(style['page-section'], style['section-description'])}>
      <div className={style['section-description__wrapper']}>
        <div className={style['section-description__text']}>
          <h1>Доска объявления</h1>
          <p>
            Находи тысячи разнообразных товаров и услуг от продавцов со всей страны. <br />{' '}
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
        <CardList>
          <Card
            imgSource="images/img-content1.jpg"
            category="Техника"
            title="Стиральная машина Bosch"
            description="Машина в хорошем состоянии.Возможен разумный торг"
            price="22 500 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content2.jpg"
            category="Одежда"
            title="Шапочка"
            description="Шапочка детская на ребенка 7-10 лет.
            60% шерст, 40% вискоза"
            price="500 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content3.jpg"
            category="Одежда"
            title="Толстовка"
            description="Новая толстовка белая без принта с карманом"
            price="2 000 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content4.jpg"
            category="Спорт"
            title="Велосипед"
            description="Велосипед в отличном состоянии.
            Ретро-стиль"
            price="28 000 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content5.jpg"
            category="Техника"
            title="Наушники"
            description="Наушники почти новые.
            Срок эксплуатации - меньше месяца"
            price="4 500 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content6.jpg"
            category="Техника"
            title="Кофемашина"
            description="Кофемашина с капучинатором.
            Пакет кофе 1 кг. - в подарок"
            price="8 500 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content7.jpg"
            category="Одежда"
            title="Сумка женская"
            description="Итальянска сумка из натуральной кожи
            Качественная фурнитура, состояние новой"
            price="7 500 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content8.jpg"
            category="Одежда"
            title="Ботинки мужские зимние"
            description="Ботинки почти новые, качественные, теплые.
            Носили 2 недели"
            price="8 000 Р"
            date="14 апреля 2021"
            view="356"
          />
          <Card
            imgSource="images/img-content9.jpg"
            category="Спорт"
            title="Доска для сноубординга"
            description="Качественная красиваядоска с креплениями"
            price="43 000 Р"
            date="14 апреля 2021"
            view="356"
          />
        </CardList>
        <div className={style['section-content__load-wrapper']}>
          <button type="button" className={style['btn-load']}>
            <img src="/images/icon-reload.svg" alt="img-reload" />
            Загрузить еще
          </button>
        </div>
      </div>
    </section>
    {/* <main className={style.content}>
      <h1> </h1>
    </main> */}
  </PageWrapper>
);

export default MainPage;
