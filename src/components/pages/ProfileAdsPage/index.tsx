import classNames from 'classnames';
import ProfileAdList from '../../common/ProfileAdList';
import ProfileAd from '../../common/ProfileAdList/ProfileAd';
import style from './ProfileAdsPage.module.scss';

const ProfileAdsPage = () => (
  <section className={classNames(style['page-section'], style['section-profile'])}>
    <div className={style['section-profile__wrapper']}>
      <div className={style['section-profile__navigate']}>
        <div className={style['section-profile__navigate-user']}>
          <div className={style['user-avatar']}>
            <img src="images/avatar-admin.svg" alt="user-avatar" />
          </div>
          <div className={style['user-text']}>
            <span className={style['user-admin']}>Super admin</span>
            <span className={style['user-rules']}>Админ-меню</span>
          </div>
        </div>
        <div
          className={classNames(
            style['section-profile__navigate-control'],
            style['navigate-active']
          )}>
          <img src="/images/profile-book.svg" alt="exit" />
          <button
            className={classNames(style['navigate-button__ads'], style['btn-active'])}
            type="button">
            Объявления
          </button>
        </div>
        <div className={style['section-profile__navigate-control']}>
          <img src="/images/profile-exit.svg" alt="exit" />
          <button className={style['navigate-button__exit']} type="button">
            Выход
          </button>
        </div>
      </div>
      <div className={style['section-profile__ads']}>
        <div className={style['ads-header']}>
          <div className={style['ads-header__text']}>
            <h2>Объявления</h2>
            <span>Всего: 45</span>
          </div>
          <div className={style['ads-header__btn']}>
            <button type="button">Добавить +</button>
          </div>
        </div>
        <div className={style['ads-control']}>
          <div className={style['ads-control__settings']}>
            <div className={style['ads-control__search']}>
              <input
                placeholder="Найти объявление"
                className={style['ads-control__input']}
                type="text"
              />
              <button className={style['ads-control__btn-search']} type="button">
                <img src="images/search.svg" alt="search" />
              </button>
            </div>
            <button className={style['ads-control__btn-filter']} type="button">
              Фильтровать
              <img src="images/profile-lines.svg" alt="lines" />
            </button>
          </div>
          <div className={style['ads-control__pagination']}>
            <span>1—8 из 145</span>
            <div className={style['ads-control__arrow']}>
              <button type="button">
                <img src="images/vector-left.svg" alt="vector" />
              </button>
              <button type="button">
                <img src="images/vector-right.svg" alt="vector" />
              </button>
            </div>
          </div>
        </div>
        <div className={style['ads-columns__header']}>
          <span>Название объявления</span>
          <span>Категория</span>
          <span>Дата публикации</span>
          <span>Публикация</span>
        </div>
        <div className={style['ads-columns__content']}>
          <ProfileAdList>
            <ProfileAd title="Чепчик" category="Одежда" date="12 апреля 2022" posted="Да" />
            <ProfileAd
              title="Самовар"
              category="Товары для дома"
              date="12 апреля 2022"
              posted="Да"
            />
            <ProfileAd
              title="Стиральная машина LG"
              category="Техника"
              date="11 апреля 2022"
              posted="Да"
            />
            <ProfileAd title="Часы Rolex" category="Аксессуары" date="10 апреля 2022" posted="Да" />
            <ProfileAd title="Lada Kalina" category="Автомобили" date="9 апреля 2022" posted="Да" />
            <ProfileAd
              title="Спортивный велосипед"
              category="Спорт"
              date="9 апреля 2022"
              posted="Да"
            />
            <ProfileAd
              title="Ботинки поношенные"
              category="Одежда"
              date="9 апреля 2022"
              posted="Да"
            />
            <ProfileAd
              title="Приставка Dendy"
              category="Техника"
              date="8 апреля 2022"
              posted="Да"
            />
          </ProfileAdList>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileAdsPage;
