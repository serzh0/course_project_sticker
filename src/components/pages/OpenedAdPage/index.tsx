import classNames from 'classnames';
import PageWrapper from '../../common/PageWrapper';
import style from './OpenedAdPage.module.scss';

const OpenedAdPage = () => (
  <PageWrapper>
    <section className={classNames(style['page-section'], style['section-ad'])}>
      <div className={style['section-ad__wrapper']}>
        <div className={style['section-ad__main']}>
          <button type="button">
            <img src="/images/arrow-back.svg" alt="arrow-back" />
          </button>
          <div className={style['section-ad__content-header']}>
            <span>14 апреля 2022</span>
            <h2>Стиральная машина Bosch</h2>
            <span>WS-25645-253-55</span>
            <div>
              <span>
                <img src="images/icon-view.svg" alt="view" />
                356
              </span>
            </div>
          </div>
          <div className={style['section-ad__content-images']}>
            {/* лучше сделать отдельные компоненты для гибкости! */}
            <ul>
              <li>
                <a href="#!">
                  <img src="" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className={style['section-ad__content-description']}>
            <span>Описание: </span>
            <p>
              Стиральная машина в отличном состянии, чистая, без накипи. С машиной отдам новый шланг
              для подключения воды и упаковку средства против накипи.
            </p>
          </div>
        </div>
        <div className={style['section-ad__secondary']}>
          <div>
            <span>22 500 Р</span>
          </div>
          <button type="button">Показать номер</button>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default OpenedAdPage;
