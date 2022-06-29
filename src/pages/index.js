import { Intro } from 'components/intro';
import { About } from 'components/about';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Mavevisuals | Photographer</title>
        <link rel="canonical" href="https://www.mavevisuals.com" />
        <meta
          name="description"
          content="Matias Velasquez - photographer from chile also known as Mavevisuals. Photographer's portfolio 🌻"
        />
        <meta
          name="keywords"
          content="Mavevisuals, Matias Velasquez, Chile, photographer, portfolio, photo"
        />
        <meta property="og:title" content="Mavevisuals" />
        <meta
          property="og:description"
          content="Mavevisuals - photographer from Chile also known as Mavevisuals. Photographer's portfolio 🌻"
        />

        <meta name="twitter:title" content="Mavevisuals" />
        <meta
          name="twitter:description"
          content="Mavevisuals - photographer from Chile also known as Mavevisuals. Photographer's portfolio 🌻"
        />
        <meta name="twitter:url" content="https://www.mavevisuals.com" />
      </Head>
      <Intro />
      <About />
    </motion.div>
  );
};

export default Home;
