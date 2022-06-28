import { useParams } from 'react-router-dom';
import OpenedAdPage from '../../components/pages/OpenedAdPage';
import { data } from '../../helpers';

const OpenedAdContainer = () => {
  const { id, date, title, price, view, description, location } = useParams();

  return <OpenedAdPage adInfo={ad} />;
};
export default OpenedAdContainer;
