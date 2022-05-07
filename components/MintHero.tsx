import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { useScQuery, SCQueryType } from '../hooks/interaction/useScQuery';
import { MintForm } from './MintForm';
import { Authenticated } from './Authenticated';
import { useAccount } from '../hooks/auth/useAccount';
import { LoginModalButton } from './LoginModalButton';
import {
  isDropActive,
  smartContractAddress,
  tokensLimitPerAddressTotal,
  tokensLimitPerAddressPerDrop,
  isAllowlistEnabled,
  isMintingStarted,
} from '../config/nftSmartContract';
import { networkConfig, chainType } from '../config/network';
import { NFTLeftToMint } from './NFTLeftToMint';
import { NFTAllowlistEnabled } from './NFTAllowlistEnabled';
import { NFTMintedAlready } from './NFTMintedAlready';
import { NFTLeftToMintPerAddress } from './NFTLeftToMintPerAddress';

// TODO: Prepare sc query hooks for all cases
// TODO: Prepare separate components for the segments here
// TODO: refactor it a bit

export const MintHero = () => {
  const { address } = useAccount();
  const {
    data,
    mutate: refreshData,
    isLoading: totalIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getTotalTokensLeft',
      args: [],
    },
  });

  const {
    data: dropData,
    mutate: refreshDropData,
    isLoading: dropIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getDropTokensLeft',
      args: [],
    },
    autoInit: isDropActive,
  });

  const {
    data: mintedData,
    mutate: refreshMintedData,
    isLoading: mintedDataLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getMintedPerAddressTotal',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
    },
    autoInit: Boolean(address),
  });

  const { data: mintedPerDropData, mutate: refreshMintedPerDropData } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getMintedPerAddressPerDrop',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isDropActive),
    });

  const { data: allowlistCheckData, isLoading: allowlistCheckLoading } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getAllowlistAddressCheck',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isAllowlistEnabled),
    });

  const handleRefreshData = useCallback(() => {
    refreshData();
    refreshMintedData();
    refreshMintedPerDropData();
    refreshDropData();
  }, [
    refreshData,
    refreshMintedData,
    refreshMintedPerDropData,
    refreshDropData,
  ]);

  const getLeftToMintForUser = useCallback(() => {
    let leftPerDrop = 0;
    let leftInTotal = 0;

    if (isAllowlistEnabled && Number(allowlistCheckData?.data?.data) === 0) {
      return 0;
    }

    if (mintedPerDropData?.data?.data) {
      leftPerDrop =
        tokensLimitPerAddressPerDrop - Number(mintedPerDropData.data.data);
    }
    if (mintedData?.data?.data) {
      leftInTotal = tokensLimitPerAddressTotal - Number(mintedData.data.data);
    }
    if (!isDropActive || leftPerDrop > leftInTotal) {
      return leftInTotal;
    }
    return leftPerDrop;
  }, [
    allowlistCheckData?.data?.data,
    mintedData?.data.data,
    mintedPerDropData?.data.data,
  ]);

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  return (
    <Box width="100%">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'center' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
        textColor="black"
        
      >
        <h1 >MAKE THE HISTORY</h1>
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
       
      </Text>
      <Text
        marginTop="64px"
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        mb={5}
        textAlign={{ base: 'center'}}
        textColor="black"
      >
        Buy the first Champagne on the Elrond Blockchain in collaboration with Champagne Cattier. Limited to 500 pieces.
For each NFT minted, you will receive a bottle of Cattier with your NFT printed on it.
      </Text>
      {isMintingStarted ? (
        <Box mt={6}>
          <NFTLeftToMint
            data={data}
            dropData={dropData}
            dataLoading={isDropActive ? dropIsLoading : totalIsLoading}
          />
          <Box>
            <Authenticated
              fallback={
                <Box
                  mt={6}
                  display="flex"
                  justifyContent={'center'}
                >
                  <LoginModalButton />
                </Box>
              }
              spinnerCentered={isContentCentered}
            >
              <NFTAllowlistEnabled
                data={allowlistCheckData}
                dataLoading={allowlistCheckLoading}
              />
              <NFTMintedAlready
                data={mintedData}
                dataLoading={mintedDataLoading}
              />
              <NFTLeftToMintPerAddress
                leftToMintForUser={getLeftToMintForUser()}
              />
              <MintForm
                cb={handleRefreshData}
                leftToMintForUser={getLeftToMintForUser()}
              />
              {mintedData?.data?.data && mintedData.data.data > 0 && (
                <Box
                  display="flex"
                  alignItems="center"
                  mt={6}
                  justifyContent={{ base: 'center', md: 'flex-start' }}
                >
                  <Text
                    as="span"
                    fontSize={{ base: 'md', sm: 'xl' }}
                    fontWeight="bold"
                    color="black"
                  >
                    Check your NFTs:
                  </Text>
                  <Text
                    as="a"
                    ml={3}
                    target="_blank"
                    color="elvenTools.color3.base"
                    fontSize="2xl"
                    fontWeight="black"
                    textDecoration="underline"
                    rel="noopener noreferrer nofollow"
                    href={`${networkConfig[chainType].explorerAddress}/accounts/${address}/nfts`}
                  >
                    here
                  </Text>
                  
                </Box>
              )}
            </Authenticated>
          </Box>
        </Box>
      ) : (
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mt={10} textColor="black">
            Minting was not started yet.
          </Text>
          <Text fontSize="2xl" fontWeight="bold" textColor="black">
            Please be back soon!
          </Text>
        </Box>
      )}
  
 
    </Box>
  );
};
