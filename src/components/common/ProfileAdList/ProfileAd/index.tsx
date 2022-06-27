import style from './ProfileAd.module.scss';

type ProfileAdPropsType = {
  title: string;
  category: string;
  date: string;
  posted: 'Да' | 'Нет';
  // children: React.ReactNode;
};

const ProfileAd = ({
  title,
  category,
  date,
  posted,
}: // children,
ProfileAdPropsType) => (
  <li className={style.ad}>
    <a href="#!" className={style.ad__wrapper}>
      <span className={style.ad__title}>{title}</span>
      <span className={style.ad__category}>{category}</span>
      <span className={style.ad__date}>{date}</span>
      <span className={style.ad__posted}>{posted}</span>
      <button type="button">
        <img src="/images/profile-ad.svg" alt="points" />
      </button>
    </a>
  </li>
);

export default ProfileAd;
