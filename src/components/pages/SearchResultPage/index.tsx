import classNames from 'classnames';
import SearchResultList from '../../common/SearchResultList';
import SearchResult from '../../common/SearchResultList/SearchResult';
import style from './SearchResultPage.module.scss';

const SearchResultPage = () => (
  <section className={classNames(style['page-section'], style['section-search'])}>
    <span className={style['section-search__counted']}>Найдено: 26</span>
    <SearchResultList>
      <SearchResult
        title="Стиральная машина Bosch"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
          С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        date="14 апреля 2022"
      />
      <SearchResult
        title="Стиральная машина Eletroluxe"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
        С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        date="14 апреля 2022"
      />
      <SearchResult
        title="Стиральная машина Bosch"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
          С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        date="13 апреля 2022"
      />
      <SearchResult
        title="Стиральная машина Miele"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
          С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        date="12 апреля 2022"
      />
      <SearchResult
        title="Стиральная машина Candy"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
          С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        date="12 апреля 2022"
      />
      <SearchResult
        title="Стиральная машина Samsung"
        description="Стиральная машина в отличном состянии, чистая, без накипи.
          С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
        date="11 апреля 2022"
      />
    </SearchResultList>
    <div className={style['section-search__pagination']}>
      {/* <PaginationSearch /> */}
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
    </div>
  </section>
);

export default SearchResultPage;
