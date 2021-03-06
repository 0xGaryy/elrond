import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { VMOutput } from '../hooks/interaction/useScQuery';
import { isAllowlistEnabled } from '../config/nftSmartContract';

interface NFTAllowlistEnabledProps {
  data?: VMOutput;
  dataLoading?: boolean;
}

export const NFTAllowlistEnabled: FC<NFTAllowlistEnabledProps> = ({
  data,
  dataLoading,
}) => {
  return (
    <>
      {isAllowlistEnabled && (
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          mb={2}
          justifyContent={{ base: 'center'}}
        >
          <Box>
            <Text
              as="span"
              fontSize={{ base: 'md', sm: 'xl' }}
              fontWeight="bold"
              textColor="black"
            >
              Allowlist is enabled. You are{' '}
            </Text>
            {dataLoading ? (
              <Spinner ml={3} color="elvenTools.color2.base" />
            ) : Number(data?.data?.data) !== 0 ? (
              <Text
                color="elvenTools.color2.base"
                as="span"
                fontWeight="bold"
                fontSize={{ base: 'md', sm: 'xl' }}
                textColor="black"
              >
                on
              </Text>
            ) : (
              <Text
                color="elvenTools.color3.base"
                as="span"
                fontWeight="bold"
                fontSize={{ base: 'md', sm: 'xl' }}
              >
                not on
              </Text>
            )}{' '}
            <Text
              as="span"
              fontSize={{ base: 'md', sm: 'xl' }}
              fontWeight="bold"
            >
              the list!
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};
