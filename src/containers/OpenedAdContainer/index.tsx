import { useParams } from 'react-router-dom';
import OpenedAdPage from '../../components/pages/OpenedAdPage';
import { data } from '../../helpers';

const OpenedAdContainer = () => {
  const { id } = useParams();

  const ad = data.find((el) => el.id === id);

  return <OpenedAdPage adInfo={ad} />;
};
export default OpenedAdContainer;
