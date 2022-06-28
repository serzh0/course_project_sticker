import classNames from 'classnames';
import OpenedAdComponent from '../../common/OpenedAdComponent';
import style from './OpenedAdPage.module.scss';

type OpenedAdPagePropsType = {
  adInfo: {
    id: string;
    date: string;
    title: string;
    price: string;
    view: number;
    description: string;
    location: string;
  };
};

const OpenedAdPage = ({ adInfo }: OpenedAdPagePropsType) => (
  <section className={classNames(style['page-section'], style['section-ad'])}>
    <OpenedAdComponent
      date="14 апреля 2022"
      title="Стиральная машина Bosch"
      price="22 500 Р"
      id={adInfo.id}
      view={356}
      description="Стиральная машина в отличном состянии, чистая, без накипи.
    С машиной отдам новый шланг для подключения воды и упаковку средства против накипи."
      location="г.Кстово"
    />
  </section>
);

export default OpenedAdPage;
