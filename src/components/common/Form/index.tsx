import React from 'react';
import style from './Form.module.scss';

type FormPropsType = {
  children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({ children }) => (
  <div className={style.form}>
    <form className={style.form__body}>{children}</form>
  </div>
);

export default Form;
