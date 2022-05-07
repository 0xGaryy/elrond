import { Box } from '@chakra-ui/react';

export const HeroImage = () => {
  return (
    <Box
      minWidth="400px"
      height="400px"
      display="flex"
      justifyContent="flex-end"
      sx={{
        '@media screen and (max-width: 1000px)': {
          display: 'none',
        },
      }}
    >
  
        <Box as="img" src="/img.gif" alt="" width="400px" height="400px" />
    </Box>
  );
};
