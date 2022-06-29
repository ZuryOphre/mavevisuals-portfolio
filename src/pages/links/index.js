import Container from 'components/container';
import * as S from 'src/styles/pages/Links.style';
import logoFoundation from 'public/images/logo-foundation.png';
import logoInstagram from 'public/images/logo-instagram.png';
import logoYouTube from 'public/images/logo-youtube.png';
import logoFilterGrade from 'public/images/logo-fg.png';
import logoTwitter from 'public/images/logo-twitter.png';
import LinkBox from 'components/link-box/LinkBox';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { pageVariants } from 'styles/animations/pageVariants';

const links = [
  {
    img: logoFoundation,
    title: 'Foundation',
    desc: '',
    url: 'https://foundation.app/',
  },
  {
    img: logoInstagram,
    title: 'Instagram | @mavevisuals_',
    desc: 'https://www.instagram.com/mavevisuals_/',
    url: 'https://www.instagram.com/mavevisuals_/',
  },
  {
    img: logoYouTube,
    title: 'YouTube channel',
    desc: 'https://www.youtube.com/channel/UCVg4luXoZkjVbuvuZeYUaiA',
    url: 'https://www.youtube.com/channel/UCVg4luXoZkjVbuvuZeYUaiA',
  },
  {
    img: logoTwitter,
    title: 'Twitter | ',
    desc: '',
    url: '',
  },
  {
    img: logoFilterGrade,
    title: 'Lightroom presets',
    desc: 'presets for PC & Mobile',
    url: 'https://filtergrade.com/',
  },
];

const Links = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Links - Mavevisuals</title>
        <link rel="canonical" href="https://www.mavevisuals.com/links" />
        <meta
          name="description"
          content="Useful social media links (instagram, twitter, youtube, tiktok), lightroom presets and other resourses by Mavevisuals"
        />
        <meta
          name="keywords"
          content="Mavevisuals, Matias Velasquez, Chile, photographer, portfolio, links, social media, presets"
        />
        <meta property="og:title" content="Links - Mavevisuals" />
        <meta
          property="og:description"
          content="Useful social media links (instagram, twitter, youtube, tiktok), lightroom presets and other resourses by Mavevisuals"
        />
        <meta name="twitter:title" content="Links - Mavevisuals" />
        <meta
          name="twitter:description"
          content="Useful social media links (instagram, twitter, youtube, tiktok), lightroom presets and other resourses by Mavevisuals"
        />
        <meta
          name="twitter:url"
          content="https://www.mavevisuals.com/links"
        />
      </Head>
      <S.Section>
        <Container>
          <S.Grid>
            {links.map(({ title, desc, url, img }) => {
              return (
                <LinkBox
                  key={title}
                  img={img}
                  title={title}
                  desc={desc}
                  url={url}
                />
              );
            })}
          </S.Grid>
        </Container>
      </S.Section>
    </motion.div>
  );
};

export default Links;
