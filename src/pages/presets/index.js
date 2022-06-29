import * as S from 'styles/pages/presets.style';
import Container from 'components/container';
import { presetsCard } from 'components/presets-card';
import Head from 'next/head';
import { getFirestoreRecords } from 'lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from 'styles/animations/pageVariants';

const preset = ({ presets }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Presets - Mavevisuals</title>
        <link rel="canonical" href="https://www.mavevisuals.com/presets" />
        <meta
          name="description"
          content="List of sold and available photography presets created by Mavevisuals"
        />
        <meta
          name="keywords"
          content="Mavevisuals, Matias Velasquez, Chile, photographer, portfolio, links, foundation, Mavevisuals"
        />
        <meta property="og:title" content="Presets - Mavevisuals" />
        <meta
          property="og:description"
          content="List of sold and available photography presets created by Mavevisuals"
        />
        <meta name="twitter:title" content="Presets - Mavevisuals" />
        <meta
          name="twitter:description"
          content="List of sold and available photography Presets created by Mavevisuals"
        />
        <meta
          name="twitter:url"
          content="https://www.Mavevisuals.com/presets"
        />
      </Head>
      <S.Section>
        <Container>
          {presets.map(
            ({
              title,
              description,
              imgUrl,
              price,
              sold,
              edition,
              platform,
              url,
            }) => {
              return (
                <presetsCard
                  key={title}
                  title={title}
                  description={description}
                  imgUrl={imgUrl}
                  price={price}
                  sold={sold}
                  edition={edition}
                  platform={platform}
                  url={url}
                />
              );
            }
          )}
        </Container>
      </S.Section>
    </motion.div>
  );
};

export const getStaticProps = async (context) => {
  const presets = await getFirestoreRecords('presets');

  return {
    props: { presets },
  };
};

export default preset;
