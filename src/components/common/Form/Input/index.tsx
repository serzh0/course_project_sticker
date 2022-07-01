import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'text' | 'password';
};

const Input = ({ title, id, value, setValue, type = 'text' }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <label className={style.input__label} htmlFor={id}>
      <div className={style.input__wrapper}>
        <span className={style.input__title}>{title}</span>
        <input onChange={handler} value={value} className={style.input} id={id} type={type} />
      </div>
    </label>
  );
};

export default Input;
