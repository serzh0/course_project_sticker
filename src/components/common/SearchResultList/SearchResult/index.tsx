import style from './SearchResult.module.scss';

type SearchResultPropsType = {
  title: string;
  description: string;
  date: string;
};

const SearchResult = ({ title, description, date }: SearchResultPropsType) => (
  <li className={style['result-item']}>
    <a href="#!">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{date}</span>
    </a>
  </li>
);

export default SearchResult;
