import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { VMOutput } from '../hooks/interaction/useScQuery';
import { isDropActive } from '../config/nftSmartContract';

interface NFTLeftToMintProps {
  data?: VMOutput;
  dropData?: VMOutput;
  dataLoading?: boolean;
}

export const NFTLeftToMint: FC<NFTLeftToMintProps> = ({
  data,
  dropData,
  dataLoading,
}) => {
  return (
    <Box
    >
      
    
    
    </Box>
  );
};
