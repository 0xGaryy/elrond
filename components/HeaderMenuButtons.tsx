import { useRouter } from 'next/router';
import { Box, Button } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from '../components/ActionButton';
import { SocialMediaIcons } from '../components/SocialMediaIcons';
import { LoginModalButton } from '../components/LoginModalButton';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/mint');
  }, [router]);


  return (
    <Box
      display="flex"
      gap={5}
      alignItems="center"
      sx={{
        '@media screen and (max-width: 515px)': {
          flexDirection: 'column',
        },
      }}
    >
  

      <SocialMediaIcons />

      {enabled.includes('mint') && (
        <ActionButton onClick={handleMintClick}>Mint</ActionButton>
      )}
      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};
