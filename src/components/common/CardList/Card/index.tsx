import { Link } from 'react-router-dom';
import style from './Card.module.scss';
import { data } from '../../../../helpers';

type CardPropsType = {
  imgSource: string;
  category: string;
  title: string;
  description: string;
  price: string;
  date: string;
  view: string;
  id: string;
  // children: React.ReactNode;
};

const Card = ({
  imgSource,
  category,
  title,
  description,
  price,
  date,
  view,
  id,
}: CardPropsType) => (
  <li className={style.card}>
    <Link to={id} className={style.card__wrapper}>
      <div className={style.card__photo}>
        <img src={imgSource} alt="card-img" />
        <span className={style.card__category}>{category}</span>
      </div>
      <div className={style.card__info}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={style.card__price}>{price}</span>
        <div className={style.card__row}>
          <span className={style.card__date}>{date}</span>
          <div className={style.card__view}>
            <img src="images/icon-view.svg" alt="eyes-img" />
            <span>{view}</span>
          </div>
        </div>
      </div>
    </Link>
  </li>
);

export default Card;
