import React from 'react';
import style from './ButtonContent.module.scss';

type ButtonContentPropsType = {
  title: string;
};

const ButtonContent: React.FC<ButtonContentPropsType> = ({ title }) => (
  <button className={style['btn-content']} type="button">
    {title}
  </button>
);

export default ButtonContent;
