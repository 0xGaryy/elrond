import NextLink from 'next/link';
import { Box, Text, keyframes } from '@chakra-ui/react';
import Link from 'next/link';

export const Logo = () => {
  return (
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
    
     

    <a href="https://www.beniamins-adventures.com"><h1><b>HOME</b></h1></a>
        <a href="https://www.beniamins-adventures.com/chapter1"><h1 ><b>CHAPTER 1</b></h1></a>
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
    
  );
};
