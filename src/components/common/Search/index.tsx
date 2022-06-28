import style from './Search.module.scss';

const Search = () => {
  const redirect = () => {
    window.location.href = '/search';
  };

  return (
    <form className={style['search-form']}>
      <input type="text" />
      <img src="/images/search.svg" alt="search" />
      <button onClick={redirect} className={style['btn-search']} type="button">
        Искать
      </button>
    </form>
  );
};

export default Search;
