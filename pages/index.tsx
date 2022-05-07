import type { NextPage } from 'next';
import { Box, Show } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { HeroImage } from '../components/HeroImage';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'about']} />
      </HeaderMenu>
      <Box
        display="flex"
        justifyContent="space-between"
        gap="32px"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <MintHero />
        <HeroImage />
      </Box>
    </MainLayout>
  );
};

export default Home;
