import React from 'react';
import style from './SearchResultList.module.scss';

type SearchResultListPropsType = {
  children: React.ReactNode;
};

const SearchResultList: React.FC<SearchResultListPropsType> = ({ children }) => (
  <ul className={style['result-list']}>{children}</ul>
);

export default SearchResultList;
