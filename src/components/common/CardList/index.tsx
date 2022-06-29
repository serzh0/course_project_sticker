import React from 'react';
import style from './CardList.module.scss';

type CardListPropsType = {
  children: React.ReactNode;
};

const CardList = ({ children }: CardListPropsType) => (
  <ul className={style['card-list']}>{children}</ul>
);

export default CardList;
