import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  // value: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'text' | 'password';
};

const Input = ({ title, id, placeholder, type = 'text' }: InputPropsType) => (
  <label className={style.input__label} htmlFor={id}>
    <div className={style.input__wrapper}>
      <span className={style.input__title}>{title}</span>
      <input className={style.input} id={id} placeholder={placeholder} type={type} />
    </div>
  </label>
);

export default Input;
