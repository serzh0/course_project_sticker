import classNames from 'classnames';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './OpenedAdPage.module.scss';

type OpenedAdPagePropsType = {
  adInfo:
    | {
        id: string;
        category: string;
        date: string;
        title: string;
        price: string;
        phoneNumber: string;
        view: string;
        description: string;
        location: string;
        image: string;
      }
    | undefined;
};

const OpenedAdPage = ({ adInfo }: OpenedAdPagePropsType) => {
  const navigate = useNavigate();
  const toBack = () => {
    navigate(-1);
  };
  const [numberVisible, setNumberVisible] = useState(false);

  const showNumber = () => {
    setNumberVisible((prev) => !prev);
  };

  return (
    <section className={classNames(style['page-section'], style['section-ad'])}>
      <div className={style['section-ad__wrapper']}>
        <div className={style['section-ad__main']}>
          <button onClick={toBack} type="button">
            <img src="/images/arrow-back.svg" alt="arrow-back" />
          </button>
          <div className={style['section-ad__header']}>
            <div className={style['section-ad__date']}>
              <span>{adInfo?.date}</span>
            </div>
            <h2 className={style['section-ad__title']}>{adInfo?.title}</h2>
            <div className={style['section-ad__id']}>
              <span>№{adInfo?.id}</span>
            </div>

            <div className={style['section-ad__view']}>
              <span>
                <img src="images/icon-view.svg" alt="view" />
                {adInfo?.view}
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
                  <img src={adInfo?.image} alt="ad-img" />
                </a>
              </li>
              {/* <li className={style['section-ad__images-item']}>
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
              </li> */}
            </ul>
          </div>
          <div className={style['section-ad__description']}>
            <span>Описание: </span>
            <p>{adInfo?.description}</p>
          </div>
          <div className={style['section-ad__location']}>
            <span> Местоположение: </span>
            {adInfo?.location}
          </div>
        </div>
        <div className={style['section-ad__secondary']}>
          <div className={style['section-ad__price']}>
            <span>{adInfo?.price}</span>
          </div>
          <div className={style['section-ad__wrapper-number']}>
            <button onClick={showNumber} className={style['section-ad__get-number']} type="button">
              Показать номер
            </button>
            {numberVisible && (
              <a href={`tel:${adInfo?.phoneNumber}`} className={style['section-ad__phone-number']}>
                {adInfo?.phoneNumber}
              </a>
            )}
          </div>

          <div className={style['section-ad__other-ads']}>
            <h3 className={style['other-ads__title']}>Смотрите также:</h3>
            <ul className={style['other-ads__list']}>
              <li className={style['other-ads__item']}>
                <Link to="/11">
                  <img src="images/img-content11.jpg" alt="other-img" />
                  <div>Стиральная машина Samsung</div>
                </Link>
              </li>
              <li className={style['other-ads__item']}>
                <Link to="/10">
                  <img src="images/img-content10.jpg" alt="other-img" />
                  <div>Стиральная машина Indesit</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenedAdPage;
