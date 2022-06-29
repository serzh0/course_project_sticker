import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import style from './OpenedAdComponent.module.scss';

type OpenedAdComponentPropsType = {
  // children: React.ReactNode;
  date: string;
  title: string;
  price: string;
  // phoneNumber: string;
  id: string;
  view: number;
  description: string;
  location: string;
};

//             УДОЛИ
//             УДОЛИ
//             УДОЛИ
//             УДОЛИ
//             УДОЛИ

const OpenedAdComponent = ({
  // children,
  date,
  title,
  price,
  id,
  view = 0,
  description = 'empty',
  location,
}: // phoneNumber
OpenedAdComponentPropsType) => {
  const navigate = useNavigate();
  const toBack = () => {
    navigate(-1);
  };
  return (
    <div className={style['section-ad__wrapper']}>
      <div className={style['section-ad__main']}>
        <button onClick={toBack} type="button">
          <img src="/images/arrow-back.svg" alt="arrow-back" />
        </button>
        <div className={style['section-ad__header']}>
          <div className={style['section-ad__date']}>
            <span>{date}</span>
          </div>
          <h2 className={style['section-ad__title']}>{title}</h2>
          <div className={style['section-ad__id']}>
            <span>{id}</span>
          </div>

          <div className={style['section-ad__view']}>
            <span>
              <img src="images/icon-view.svg" alt="view" />
              {view}
            </span>
          </div>
        </div>
        <div className={style['section-ad__images']}>
          <ul className={style['section-ad__images-list']}>
            <li
              className={
                (classNames(style['section-ad__images-item']), style['section-ad__img--big'])
              }>
              <a href="#!">
                <img src="images/opened-ad-img1.jpg" alt="ad-img" />
              </a>
            </li>
            <li className={style['section-ad__images-item']}>
              <a href="#!">
                <img src="images/opened-ad-img2.jpg" alt="ad-img" />
              </a>
            </li>
            <li className={style['section-ad__images-item']}>
              <a href="#!">
                <img src="images/opened-ad-img3.jpg" alt="ad-img" />
              </a>
            </li>
            <li className={style['section-ad__images-item']}>
              <a href="#!">
                <img src="images/opened-ad-img4.jpg" alt="ad-img" />
              </a>
            </li>
            <li className={style['section-ad__images-item']}>
              <a href="#!">
                <img src="images/opened-ad-img5.jpg" alt="ad-img" />
              </a>
            </li>
          </ul>
        </div>
        <div className={style['section-ad__description']}>
          <span>Описание: </span>
          <p>{description}</p>
        </div>
        <div className={style['section-ad__location']}>
          <span> Местоположение: </span>
          {location}
        </div>
      </div>
      <div className={style['section-ad__secondary']}>
        <div className={style['section-ad__price']}>
          <span>{price}</span>
        </div>
        <button className={style['section-ad__get-number']} type="button">
          Показать номер
        </button>
        {/* {phoneNumber} */}
        <div className={style['section-ad__other-ads']}>
          <h3 className={style['other-ads__title']}>Смотрите также:</h3>
          <ul className={style['other-ads__list']}>
            <li className={style['other-ads__item']}>
              <a href="#!">
                <img src="images/other-ads-img1.jpg" alt="other-img" />
                <div>Стиральная машина Samsung</div>
              </a>
            </li>
            <li className={style['other-ads__item']}>
              <a href="#!">
                <img src="images/other-ads-img2.jpg" alt="other-img" />
                <div>Стиральная машина Indesit</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OpenedAdComponent;
