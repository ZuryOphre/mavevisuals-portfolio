import Container from 'components/container';
import * as S from './About.style';
import ExploreIcon from 'public/icons/icon-compass.svg';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const About = () => {
  const router = useRouter();
  const onExploreButtonClickHandler = () => {
    router.push('/portfolio');
  };

  return (
    <S.Section id="about">
      <Container>
        <S.Text
          as={motion.div}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          Hi, I'm Matias Velazquez or, as most people know me, Mavevisuals, a 21
          -year-old photographer from a small town in Chile. 
          <br />
          <br />
          By now, I have been doing photography for about 5 years and I really enjoy it.
          It all started by taking photos of landscapes, people and everyday situations 
          as always. But as I got older, my view of the world was constantly updated. 
          And it is reflected in the concept of beauty that I wanted. I started to create 
          different magical scenes and save images of them using a camera. 
          <br />
          <br />I believe that my photography demonstrates the beauty of each of the situations 
          and people. I try to share all my feelings, the ones you felt when I was taking my 
          camera to capture the moment. So I want people to forget about all the bad things in 
          their life and be able to express who they are.
          <br />
          <br />
          <span>Join me in this incredible journey!✨</span>
        </S.Text>
        <S.ButtonBox
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          <S.ExploreButton
            icon={<ExploreIcon />}
            onClick={onExploreButtonClickHandler}
          >
            explore portfolio
          </S.ExploreButton>
        </S.ButtonBox>
      </Container>
    </S.Section>
  );
};

export default About;
