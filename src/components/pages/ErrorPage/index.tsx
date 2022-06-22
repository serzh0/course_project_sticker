import classNames from 'classnames';
import PageWrapper from '../../common/PageWrapper';
import style from './ErrorPage.module.scss';

const ErrorPage = () => (
  <PageWrapper>
    <section className={classNames(style['page-section'], style['section-error'])}>
      <div className={style['section-error__wrapper']}>
        <div className={style['section-error__text']}>
          <h2>Упс! Кажется, на эту страницу прилег котик</h2>
          <p className={style['text-error']}>Ошибка 404</p>
          <p>Мы уже разбираемся, почему так получилось, скоро все починим.</p>
        </div>
        <div className={style['section-error__picture']}>
          <img src="images/404.jpg" alt="error" />
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default ErrorPage;
