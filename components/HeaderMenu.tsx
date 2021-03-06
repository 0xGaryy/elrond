import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';

export const HeaderMenu: FC = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      gap="2"
      sx={{
        '@media screen and (max-width: 800px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Logo />
      {children}
    </Box>
  );
};
