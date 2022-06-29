import { ContactForm } from 'components/contact-form';
import Container from 'components/container';
import { motion } from 'framer-motion';
import Head from 'next/head';
import * as S from 'src/styles/pages/Contact.style';
import { pageVariants } from 'styles/animations/pageVariants';

const Contact = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Contact me - Mavevisuals</title>
        <link
          rel="canonical"
          href="https://www.mavevisuals.com/contact"
        />
        <meta
          name="description"
          content="If you need to discuss something with a photographer Mavevisuals, you can directly contact him using this form or by his email"
        />
        <meta
          name="keywords"
          content="mavevisuals, matias, chile, photographer, portfolio, photo, contact, contact me, email"
        />
        <meta property="og:title" content="Contact me - Mavevisuals" />
        <meta
          property="og:description"
          content="If you need to discuss something with a photographer Mavvisuals, you can directly contact him using this form or by his email"
        />
        <meta name="twitter:title" content="Contact me - Mavevisuals" />
        <meta
          name="twitter:description"
          content="If you need to discuss something with a photographer Mavevisuals , you can directly contact him using this form or by his email"
        />
        <meta
          name="twitter:url"
          content="https://www.mavevisuals.com/contact"
        />
      </Head>
      <S.Section>
        <Container>
          <S.Text>
            <S.Title>Contact me</S.Title>
            <p>
              If you need to discuss something with me or you want to purpose
              any collaboration you can reach me out directly using my email or
              by this form.
            </p>
            <S.Email>📧 contacto@mavevisuals.com</S.Email>
          </S.Text>
          <ContactForm />
        </Container>
      </S.Section>
    </motion.div>
  );
};

export default Contact;
