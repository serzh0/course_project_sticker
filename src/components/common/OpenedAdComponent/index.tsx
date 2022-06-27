import React from 'react';
import style from './OpenedAdComponent.module.scss';

type OpenedAdComponentPropsType = {
  // children: React.ReactNode;
  date: string;
  title: string;
  price: string;
  // phoneNumber: string;
  id: string;
  view: string;
  description: string;
};

const OpenedAdComponent = ({
  // children,
  date,
  title,
  price,
  id,
  view = '0',
  description = 'empty',
}: OpenedAdComponentPropsType) => (
  <div className={style['section-ad__wrapper']}>
    <div className={style['section-ad__main']}>
      <button type="button">
        <img src="/images/arrow-back.svg" alt="arrow-back" />
      </button>
      <div className={style['section-ad__content-header']}>
        <span>{date}</span>
        <h2>{title}</h2>
        <span>{id}</span>
        <div>
          <span>
            <img src="images/icon-view.svg" alt="view" />
            {view}
          </span>
        </div>
      </div>
      <div className={style['section-ad__content-images']}>
        <ul>1</ul>
      </div>
      <div className={style['section-ad__content-description']}>
        <span>Описание: </span>
        <p>{description}</p>
      </div>
    </div>
    <div className={style['section-ad__secondary']}>
      <div>
        <span>{price}</span>
      </div>
      <button type="button">Показать номер</button>
      {/* {phoneNumber} */}
    </div>
  </div>
);

export default OpenedAdComponent;
