import { IconButton } from 'components/icon-button';
import TwitterIcon from 'public/icons/icon-twitter.svg';
import InstagramIcon from 'public/icons/icon-instagram.svg';
import TikTokIcon from 'public/icons/icon-tiktok.svg';
import YouTubeIcon from 'public/icons/icon-youtube.svg';
import * as S from './Socials.style';
import { motion } from 'framer-motion';

const LINKS = [
  {
    name: 'Twitter',
    link: '',
    icon: <TwitterIcon alt="twitter" />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/mavevisuals_/',
    icon: <InstagramIcon />,
  },
  {
    name: 'TikTok',
    link: '',
    icon: <TikTokIcon />,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCVg4luXoZkjVbuvuZeYUaiA',
    icon: <YouTubeIcon />,
  },
];

const Socials = () => {
  return (
    <S.Wrapper
      key="socials"
      as={motion.div}
      initial={{ x: '-400%', y: '-50%', opacity: 0 }}
      animate={{ x: 0, y: '-50%', opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {LINKS.map(({ icon, link, name }) => (
        <IconButton href={link} icon={icon} key={name} title={name} />
      ))}
    </S.Wrapper>
  );
};

export default Socials;
