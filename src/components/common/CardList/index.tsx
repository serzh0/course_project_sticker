import React from 'react';
import style from './CardList.module.scss';

type CardListPropsType = {
  children: React.ReactNode;
};

const CardList: React.FC<CardListPropsType> = ({ children }) => (
  <ul className={style['card-list']}>{children}</ul>
);

export default CardList;
