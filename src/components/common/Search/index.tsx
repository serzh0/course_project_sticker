import style from './Search.module.scss';

const Search = () => (
  <form className={style['search-form']}>
    <input type="text" />
    <img src="/images/search.svg" alt="search" />
    <button className={style['btn-search']} type="button">
      Искать
    </button>
  </form>
);

export default Search;
