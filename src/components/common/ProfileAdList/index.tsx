import React from 'react';
import style from './ProfileAdList.module.scss';

type ProfileAdListPropsType = {
  children: React.ReactNode;
};

// const ProfileAdsList: React.FC<ProfileAdsListPropsType> = ({ children }) => (
//   <ul className={style['card-list']}>{children}</ul>
// );

const ProfileAdList = ({ children }: ProfileAdListPropsType) => (
  <ul className={style['ads-list']}>{children}</ul>
);

export default ProfileAdList;
