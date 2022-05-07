import NextLink from 'next/link';
import { Box, Text, keyframes } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
        <Box as="img" src="/Logo.png" alt="" width="100px" height="100px" />


        <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'center' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
        textColor="black"
        
      ></Text>

        <h1 >Beniamin</h1>
        <h1 >CHAPTER 1</h1>
        <style jsx>{`
    @font-face {
      font-family: 'Sofia';
          src: url('/fonts/SofiaProBold.ttf');
          src: url('/fonts/SofiaProRegular.ttf');
    }
        h1 {
          font-family: 'Sofia';
        }
      `}</style>
      </Box>
    </NextLink>
  );
};
