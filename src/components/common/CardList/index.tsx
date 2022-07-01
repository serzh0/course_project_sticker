// import React from 'react';
// import style from './CardList.module.scss';

// type CardListPropsType = {
//   children: React.ReactNode;
// };

// const CardList = ({ children }: CardListPropsType) => (
//   <ul className={style['card-list']}>{children}</ul>
// );

// export default CardList;

import Card from './Card';
import style from './CardList.module.scss';

type CardListPropsType = {
  data: {
    id: string;
    category: string;
    date: string;
    title: string;
    price: string;
    view: string;
    description: string;
    image: string;
  }[];
};

const CardList = ({ data }: CardListPropsType) => (
  <ul className={style['card-list']}>
    {data.map((el) => (
      <Card
        key={el.id}
        id={el.id}
        category={el.category}
        date={el.date}
        title={el.title}
        price={el.price}
        view={el.view}
        description={el.description}
        image={el.image}
      />
    ))}
  </ul>
);

export default CardList;
